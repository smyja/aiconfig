import ModelSettingsRenderer from "./model_settings/ModelSettingsRenderer";
import PromptMetadataRenderer from "./prompt_metadata/PromptMetadataRenderer";
import { ClientPrompt } from "../../shared/types";
import {
  PromptSchema,
  checkParametersSupported,
} from "../../utils/promptUtils";
import { ActionIcon, Container, Flex, ScrollArea, Tabs } from "@mantine/core";
import { IconClearAll } from "@tabler/icons-react";
import { memo, useState } from "react";
import ParametersRenderer from "../ParametersRenderer";
import { JSONObject } from "aiconfig";
import { PROMPT_CONTAINER_HEIGHT_MAP } from "./PromptContainer";

type Props = {
  prompt: ClientPrompt;
  promptSchema?: PromptSchema;
  onUpdateModelSettings: (settings: Record<string, unknown>) => void;
  onUpdateParameters: (parameters: JSONObject) => void;
};

// Don't default to config-level model settings since that could be confusing
// to have them shown at the prompt level in the editor but not in the config
function getModelSettings(prompt: ClientPrompt) {
  if (typeof prompt.metadata?.model !== "string") {
    return prompt.metadata?.model?.settings;
  }
}

function getPromptParameters(prompt: ClientPrompt) {
  return prompt.metadata?.parameters;
}

// This height accounts for all height within the action bar except the contents of the Panel
// items. This is important to have correct, otherwise the cellInputOutputRef height would
// itself be updated by the height of the action bar contents, which would cause the action
// bar content height to increase each time the input changes (even if the change would not
// normally affect the cellInputOutput container height)
const ACTION_CONTENT_SURROUNDING_HEIGHT = 84;
const MIN_ACTION_BAR_HEIGHT = 300;
const ADD_PARAMETER_BOTTOM_HEIGHT = 46;

export default memo(function PromptActionBar({
  prompt,
  promptSchema,
  onUpdateModelSettings,
  onUpdateParameters,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  // TODO: Handle drag-to-resize
  const modelSettingsSchema = promptSchema?.model_settings;
  const promptMetadataSchema = promptSchema?.prompt_metadata;

  const promptContainerHeight = PROMPT_CONTAINER_HEIGHT_MAP.get(prompt._ui.id);
  let maxContentHeightPx;
  if (promptContainerHeight) {
    maxContentHeightPx = Math.max(
      promptContainerHeight - ACTION_CONTENT_SURROUNDING_HEIGHT,
      MIN_ACTION_BAR_HEIGHT
    );
  }

  return (
    <Flex direction="column" justify="space-between">
      {isExpanded ? (
        <Container miw="400px">
          <ActionIcon size="sm" onClick={() => setIsExpanded(false)} mt="0.5em">
            <IconClearAll />
          </ActionIcon>
          <Tabs defaultValue="settings" mb="1em">
            <Tabs.List>
              <Tabs.Tab value="settings">Settings</Tabs.Tab>
              {checkParametersSupported(prompt) && (
                <Tabs.Tab value="parameters">Local Parameters</Tabs.Tab>
              )}
            </Tabs.List>

            <Tabs.Panel value="settings" className="actionTabsPanel">
              <ScrollArea
                h={maxContentHeightPx}
                type="auto"
                style={{ overflowY: "auto" }}
              >
                <ModelSettingsRenderer
                  settings={getModelSettings(prompt)}
                  schema={modelSettingsSchema}
                  onUpdateModelSettings={onUpdateModelSettings}
                />
                <PromptMetadataRenderer
                  prompt={prompt}
                  schema={promptMetadataSchema}
                />
              </ScrollArea>
            </Tabs.Panel>

            {checkParametersSupported(prompt) && (
              <Tabs.Panel value="parameters" className="actionTabsPanel">
                <ParametersRenderer
                  initialValue={getPromptParameters(prompt)}
                  onUpdateParameters={onUpdateParameters}
                  maxHeight={
                    maxContentHeightPx
                      ? maxContentHeightPx - ADD_PARAMETER_BOTTOM_HEIGHT
                      : undefined
                  }
                />
              </Tabs.Panel>
            )}
          </Tabs>
        </Container>
      ) : (
        <Flex
          className="promptActionBarClosed"
          direction="column"
          justify="space-between"
          h="100%"
        >
          <Flex direction="row" justify="center" mt="0.5em">
            <ActionIcon size="sm" onClick={() => setIsExpanded(true)}>
              <IconClearAll />
            </ActionIcon>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
});
