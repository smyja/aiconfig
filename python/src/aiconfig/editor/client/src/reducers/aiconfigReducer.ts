import { AIConfig, Prompt } from "aiconfig";
import {
  ClientAIConfig,
  ClientPrompt,
  aiConfigToClientConfig,
} from "../shared/types";
import { getPromptModelName } from "../utils/promptUtils";
import type {
  AIConfigReducerAction,
  ConsolidateAIConfigSubAction,
} from "./actions";

function reduceReplacePrompt(
  state: ClientAIConfig,
  id: string,
  replacerFn: (prompt: ClientPrompt) => ClientPrompt
): ClientAIConfig {
  return {
    ...state,
    prompts: state.prompts.map((prompt) =>
      prompt._ui.id === id ? replacerFn(prompt) : prompt
    ),
  };
}

function reduceInsertPromptAtIndex(
  state: ClientAIConfig,
  index: number,
  prompt: ClientPrompt
): ClientAIConfig {
  return {
    ...state,
    prompts: [
      ...state.prompts.slice(0, index),
      prompt,
      ...state.prompts.slice(index),
    ],
  };
}

function setRunningPromptId(
  state: ClientAIConfig,
  runningPromptId: string | undefined
): ClientAIConfig {
  return {
    ...state,
    _ui: {
      ...state._ui,
      runningPromptId,
    },
  };
}

/**
 * Consolidate existing state and external prompt into a single prompt.
 * Existing client input and metadata takes precedence since it may have been updated
 * by the user while the external process was happening (e.g. request was in flight).
 * External outputs will always be used since they can only be updated by external source.
 * @param statePrompt ClientPrompt that exists in client state
 * @param externalPrompt ClientPrompt obtained from external source (e.g. server response)
 * @returns Consolidated ClientPrompt
 */
function reduceConsolidatePrompt(
  statePrompt: ClientPrompt,
  externalPrompt: Prompt
): ClientPrompt {
  return {
    ...externalPrompt,
    ...statePrompt,
    metadata: {
      ...externalPrompt.metadata,
      ...statePrompt.metadata,
    },
    outputs: externalPrompt.outputs,
    _ui: statePrompt._ui,
  };
}

function reduceConsolidateAIConfig(
  state: ClientAIConfig,
  action: ConsolidateAIConfigSubAction,
  responseConfig: AIConfig
): ClientAIConfig {
  // Make sure prompt structure is properly updated. Client input and metadata takes precedence
  // since it may have been updated by the user while the request was in flight
  const consolidatePrompt = (statePrompt: ClientPrompt) => {
    const responsePrompt = responseConfig.prompts.find(
      (resPrompt) => resPrompt.name === statePrompt.name
    );

    if (!responsePrompt) {
      return statePrompt;
    }

    return reduceConsolidatePrompt(statePrompt, responsePrompt);
  };

  switch (action.type) {
    case "ADD_PROMPT_AT_INDEX": {
      return reduceReplacePrompt(
        state,
        action.prompt._ui.id,
        consolidatePrompt
      );
    }
    case "UPDATE_PROMPT_INPUT": {
      return reduceReplacePrompt(state, action.id, consolidatePrompt);
    }
    default: {
      return state;
    }
  }
}

export default function aiconfigReducer(
  state: ClientAIConfig,
  action: AIConfigReducerAction
): ClientAIConfig {
  const dirtyState = {
    ...state,
    _ui: {
      ...state._ui,
      isDirty: true,
    },
  };
  switch (action.type) {
    case "ADD_PROMPT_AT_INDEX": {
      return reduceInsertPromptAtIndex(dirtyState, action.index, action.prompt);
    }
    case "CLEAR_OUTPUTS": {
      const prompts = state.prompts.map((prompt) => {
        if (prompt.outputs) {
          return {
            ...prompt,
            outputs: undefined,
          };
        } else {
          return prompt;
        }
      });

      for (const prompt of prompts) {
        if (prompt.outputs) {
          delete prompt.outputs;
        }
      }

      return {
        ...dirtyState,
        prompts,
      };
    }
    case "DELETE_PROMPT": {
      return {
        ...dirtyState,
        prompts: dirtyState.prompts.filter(
          (prompt) => prompt._ui.id !== action.id
        ),
      };
    }
    case "PROVIDED_AICONFIG_UPDATE": {
      // For now, treat the editor as a controlled component and replace the entire state.
      // Revisit this if we want to optimize consolidation by deep comparing the existing
      // state and the provided state (i.e. to prevent re-rendering prompts that haven't
      // changed), but note the trade-off of deep compare perf cost vs. re-rendering cost
      // may be negligible. Consider only if UX is affected by current approach
      return aiConfigToClientConfig(action.config);
    }
    case "SET_DESCRIPTION": {
      return {
        ...dirtyState,
        description: action.description,
      };
    }
    case "SET_NAME": {
      return {
        ...dirtyState,
        name: action.name,
      };
    }
    case "UPDATE_PROMPT_INPUT": {
      return reduceReplacePrompt(dirtyState, action.id, (prompt) => ({
        ...prompt,
        input: action.input,
      }));
    }
    case "UPDATE_PROMPT_METADATA": {
      return reduceReplacePrompt(dirtyState, action.id, (prompt) => ({
        ...prompt,
        metadata: {
          ...action.metadata,
          // Keep existing model and parameters metadata (managed by separate actions)
          model: prompt.metadata?.model,
          parameters: prompt.metadata?.parameters,
        },
      }));
    }
    case "UPDATE_PROMPT_NAME": {
      // Validate that no prompt has a name that conflicts with this one:
      const existingPromptNames = dirtyState.prompts.map(
        (prompt) => prompt.name
      );

      if (
        existingPromptNames.find((existingName) => action.name === existingName)
      ) {
        // Don't allow duplicate names
        return state;
      }
      return reduceReplacePrompt(dirtyState, action.id, (prompt) => ({
        ...prompt,
        name: action.name,
      }));
    }
    case "UPDATE_PROMPT_MODEL": {
      return reduceReplacePrompt(dirtyState, action.id, (prompt) => {
        // TODO (rossdan): Uncomment below once we are able to handle updating model names for HF tasks or sub-classes
        // TODO: Consolidate settings based on schema union, server-side
        // For now, just keep all the settings to match the server-side implementation
        let modelSettings;
        const promptModel = prompt.metadata?.model;
        if (promptModel && typeof promptModel !== "string") {
          modelSettings = promptModel.settings;
          // TODO (rossdanlm): For now just clearing the model field whenever new model name is selected
          if (modelSettings) {
            delete modelSettings.model;
          }
        }
        return {
          ...prompt,
          metadata: {
            ...prompt.metadata,
            model: action.modelName
              ? {
                  name: action.modelName,
                  // TODO (rossdanlm): For now just clearing the model field whenever new model name is selected
                  settings: modelSettings,
                }
              : undefined,
          },
        };
      });
    }
    case "UPDATE_PROMPT_MODEL_SETTINGS": {
      return reduceReplacePrompt(dirtyState, action.id, (prompt) => ({
        ...prompt,
        metadata: {
          ...prompt.metadata,
          model: {
            // TODO: Figure out why 'as' is needed here. Should just be ClientAIConfig and that
            // should properly type metadata
            // ModelMetadata must have name here
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            name: getPromptModelName(
              prompt,
              (state as unknown as AIConfig).metadata.default_model
            )!,
            settings: action.modelSettings,
          },
        },
      }));
    }
    case "UPDATE_PROMPT_PARAMETERS": {
      return reduceReplacePrompt(dirtyState, action.id, (prompt) => ({
        ...prompt,
        metadata: {
          ...prompt.metadata,
          parameters: action.parameters,
        },
      }));
    }
    case "UPDATE_GLOBAL_PARAMETERS": {
      return {
        ...dirtyState,
        metadata: {
          ...state.metadata,
          parameters: action.parameters,
        },
      };
    }
    case "RUN_PROMPT_START": {
      const runningState = setRunningPromptId(dirtyState, action.promptId);
      return reduceReplacePrompt(runningState, action.promptId, (prompt) => ({
        ...prompt,
        _ui: {
          ...prompt._ui,
          isRunning: true,
          cancellationToken: action.cancellationToken,
        },
        // clear the outputs before running so that new outputs are noticeable, even if they are identical
        outputs: [],
      }));
    }
    case "RUN_PROMPT_CANCEL": {
      const nonRunningState = setRunningPromptId(dirtyState, undefined);

      // TODO: We'll have to update potentially all outputs when we support
      // run_with_dependencies, because other prompt outputs may have been
      // updated during this time
      const replaceOutput = (statePrompt: ClientPrompt) => {
        const responsePrompt = action.config.prompts.find(
          (resPrompt) => resPrompt.name === statePrompt.name
        );
        return {
          ...statePrompt,
          outputs: responsePrompt?.outputs,
          _ui: {
            ...statePrompt._ui,
            isRunning: false,
            cancellationToken: undefined,
          },
        } as ClientPrompt;
      };

      return reduceReplacePrompt(
        nonRunningState,
        action.promptId,
        replaceOutput
      );
    }
    case "RUN_PROMPT_ERROR": {
      const nonRunningState = setRunningPromptId(dirtyState, undefined);
      return reduceReplacePrompt(
        nonRunningState,
        action.promptId,
        (prompt) => ({
          ...prompt,
          outputs: [
            {
              output_type: "error",
              ename: "Error",
              evalue: action.message ?? "Error running prompt",
              traceback: [],
            },
          ],
          _ui: {
            ...prompt._ui,
            isRunning: false,
            cancellationToken: undefined,
          },
        })
      );
    }
    case "RUN_PROMPT_SUCCESS": {
      const nonRunningState = setRunningPromptId(dirtyState, undefined);

      // TODO: We'll have to update potentially all outputs when we support
      // run_with_dependencies, because other prompt outputs may have been
      // updated during this time
      const replaceOutputAndResetRunningFlags = (statePrompt: ClientPrompt) => {
        // If AIConfig is not passed in from response (ex: "stop_streaming"),
        // then we don't need to update output and responsePrompt is undefined
        const responsePrompt = action.config?.prompts.find(
          (resPrompt) => resPrompt.name === statePrompt.name
        );
        return {
          ...statePrompt,
          outputs: responsePrompt?.outputs ?? statePrompt.outputs,
          _ui: {
            ...statePrompt._ui,
            isRunning: false,
            cancellationToken: undefined,
          },
        } as ClientPrompt;
      };

      return reduceReplacePrompt(
        nonRunningState,
        action.promptId,
        replaceOutputAndResetRunningFlags
      );
    }
    case "STREAM_AICONFIG_CHUNK": {
      const replaceOutput = (statePrompt: ClientPrompt) => {
        const responsePrompt = action.config.prompts.find(
          (resPrompt) => resPrompt.name === statePrompt.name
        );
        return {
          // Note: Don't need to set `isRunning` or `cancellationToken`
          // because we already call RUN_PROMPT_START earlier in `onRunPrompt`
          ...statePrompt,
          outputs: responsePrompt?.outputs,
        } as ClientPrompt;
      };
      return reduceReplacePrompt(
        dirtyState,
        dirtyState._ui.runningPromptId as string,
        replaceOutput
      );
    }
    case "STREAM_OUTPUT_CHUNK": {
      return reduceReplacePrompt(dirtyState, action.promptId, (prompt) => ({
        ...prompt,
        outputs: [action.output],
      }));
    }
    case "SAVE_CONFIG_SUCCESS": {
      return {
        ...state,
        _ui: {
          ...state._ui,
          isDirty: false,
        },
      };
    }
    case "CONSOLIDATE_AICONFIG": {
      return reduceConsolidateAIConfig(
        dirtyState,
        action.action,
        action.config
      );
    }
  }
}
