"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[162],{6443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=t(5893),a=t(1151),o=t(4866),r=t(5162),s=t(4883);const l={sidebar_position:2},c="Getting Started",d={id:"getting-started",title:"Getting Started",description:"AIConfig saves prompts, models and model parameters as source control friendly configs. This allows you to iterate on prompts and model parameters separately from your application code.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"What is AIConfig",permalink:"/docs/basics"},next:{title:"Overview",permalink:"/docs/category/overview"}},u={},h=[{value:"Installation",id:"installation",level:2},{value:"Node.js (TypeScript)",id:"nodejs-typescript",level:4},{value:"Python",id:"python",level:4},{value:"Quickstart",id:"quickstart",level:2},{value:"1. Download the AIConfig.",id:"1-download-the-aiconfig",level:3},{value:"2. Run the <code>get_activities</code> prompt.",id:"2-run-the-get_activities-prompt",level:3},{value:"3. Enable streaming for your prompt.",id:"3-enable-streaming-for-your-prompt",level:3},{value:"4. Run the <code>gen_itinerary</code> prompt.",id:"4-run-the-gen_itinerary-prompt",level:3},{value:"5. Save the AIConfig.",id:"5-save-the-aiconfig",level:3},{value:"6. Open the AIConfig in AI Workbook editor.",id:"6-open-the-aiconfig-in-ai-workbook-editor",level:3},{value:"Code for Getting Started",id:"code-for-getting-started",level:3},{value:"Additional Guides",id:"additional-guides",level:2},{value:"Cookbooks",id:"cookbooks",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["AIConfig saves prompts, models and model parameters as source control friendly configs. This allows you to iterate on prompts and model parameters ",(0,i.jsx)(n.em,{children:"separately from your application code"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Please read ",(0,i.jsx)(n.a,{href:"/docs/basics",children:"AIConfig Basics"})," to understand the motivation behind storing prompts and model parameters as configs."]})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.a,{href:"/docs/overview/ai-config-format",children:[(0,i.jsx)(n.code,{children:"aiconfig"})," file format"]})," is best used with the AIConfig SDK. To install the SDK, use your favorite package manager:"]}),"\n",(0,i.jsx)(n.h4,{id:"nodejs-typescript",children:"Node.js (TypeScript)"}),"\n",(0,i.jsxs)(o.Z,{groupId:"package-manager",queryString:!0,defaultValue:s.Z.defaultNodePackageManager,values:s.Z.nodePackageManagers,children:[(0,i.jsx)(r.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npm install aiconfig\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn add aiconfig\n"})})})]}),"\n",(0,i.jsx)(n.h4,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(o.Z,{groupId:"package-manager",queryString:!0,defaultValue:s.Z.defaultPythonPackageManager,values:s.Z.pythonPackageManagers,children:[(0,i.jsx)(r.Z,{value:"pip",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pip install python-aiconfig\n"})})}),(0,i.jsx)(r.Z,{value:"poetry",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ poetry add python-aiconfig\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Make sure to specify the API keys (such as ",(0,i.jsx)(n.code,{children:"OPENAI_API_KEY"}),") in your environment before proceeding."]})}),"\n",(0,i.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsxs)(n.p,{children:["In this quickstart, you will create a customizable NYC travel itinerary using ",(0,i.jsx)(n.code,{children:"aiconfig"}),". We will start with a pre-built AIConfig that we generated from this ",(0,i.jsx)(n.a,{href:"https://lastmileai.dev/workbooks/clooqs3p200kkpe53u6n2rhr9",children:"AI Workbook"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Clone the tutorial code used below from ",(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Getting-Started",children:(0,i.jsx)(n.strong,{children:"here"})})]})}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("video",{controls:!0,height:"480",width:"800",children:(0,i.jsx)("source",{src:"https://github.com/lastmile-ai/aiconfig/assets/25641935/d3d41ad2-ab66-4eb6-9deb-012ca283ff81"})})}),"\n",(0,i.jsx)(n.h3,{id:"1-download-the-aiconfig",children:"1. Download the AIConfig."}),"\n",(0,i.jsxs)(n.p,{children:["This AIConfig ",(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})," contains a prompt chain to get a list of travel activities from an LLM and then customize the activities based on user preferences (defined as parameters of the prompt). It also contains the specific models and model parameters for the LLMs."]}),"\n",(0,i.jsxs)(n.p,{children:["Download AIConfig ",(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/blob/main/cookbook/Getting-Started/travel.aiconfig.json",children:"here"}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "NYC Trip Planner",\n  "description": "Intrepid explorer with ChatGPT and AIConfig",\n  "schema_version": "latest",\n  "metadata": {\n    "models": {\n      "gpt-3.5-turbo": {\n        "model": "gpt-3.5-turbo",\n        "top_p": 1,\n        "temperature": 1\n      },\n      "gpt-4": {\n        "model": "gpt-4",\n        "max_tokens": 3000,\n        "system_prompt": "You are an expert travel coordinator with exquisite taste."\n      }\n    },\n    "default_model": "gpt-3.5-turbo"\n  },\n  "prompts": [\n    {\n      "name": "get_activities",\n      "input": "Tell me 10 fun attractions to do in NYC."\n    },\n    {\n      "name": "gen_itinerary",\n      "input": "Generate an itinerary ordered by {{order_by}} for these activities: {{get_activities.output}}.",\n      "metadata": {\n        "model": "gpt-4",\n        "parameters": {\n          "order_by": "geographic location"\n        }\n      }\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Don't worry if you don't understand all parts of this yet, we'll go over it in steps. We will also cover a prompt editor (",(0,i.jsx)(n.a,{href:"#ai-workbook-playground",children:"AI Workbooks"}),") to help you create AIConfigs visually."]})}),"\n",(0,i.jsxs)(n.h3,{id:"2-run-the-get_activities-prompt",children:["2. Run the ",(0,i.jsx)(n.code,{children:"get_activities"})," prompt."]}),"\n",(0,i.jsxs)(n.p,{children:["You don't need to worry about how to run inference for the model; it's all handled by AIConfig. The prompt runs with gpt-3.5-turbo since that is the ",(0,i.jsx)(n.code,{children:"default_model"})," for this AIConfig."]}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  // Load the AIConfig. You can also use AIConfigRuntime.loadJSON({})\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  // Run a single prompt\n  await aiConfig.run("get_activities");\n}\n'})})}),(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from aiconfig import AIConfigRuntime, InferenceOptions\n\n# Load the aiconfig.\nconfig = AIConfigRuntime.load('travel.aiconfig.json')\n\n# Run a single prompt\nawait config.run(\"get_activities\")\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"3-enable-streaming-for-your-prompt",children:"3. Enable streaming for your prompt."}),"\n",(0,i.jsx)(n.p,{children:"You can enable streaming for your prompt responses by passing in a streaming callback."}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a single prompt\n  await aiConfig.run("get_activities", /*params*/ undefined, options);\n}\n'})})}),(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from aiconfig import AIConfigRuntime, InferenceOptions\nconfig = AIConfigRuntime.load('travel.aiconfig.json')\n\n# Run a single prompt (with streaming)\ninference_options = InferenceOptions(stream=True)\nawait config.run(\"get_activities\", options=inference_options)\n"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"4-run-the-gen_itinerary-prompt",children:["4. Run the ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," prompt."]}),"\n",(0,i.jsxs)(n.p,{children:["This prompt depends on the output of ",(0,i.jsx)(n.code,{children:"get_activities"}),". It also takes in parameters (user input) to determine the customized itinerary."]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a closer look:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"gen_itinerary"})," prompt:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"Generate an itinerary ordered by {{order_by}} for these activities: {{get_activities.output}}."\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"prompt metadata:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "metadata": {\n    "model": "gpt-4",\n    "parameters": {\n      "order_by": "geographic location"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Observe the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The prompt depends on the output of the ",(0,i.jsx)(n.code,{children:"get_activities"})," prompt."]}),"\n",(0,i.jsxs)(n.li,{children:["It also depends on an ",(0,i.jsx)(n.code,{children:"order_by"})," parameter"]}),"\n",(0,i.jsxs)(n.li,{children:["It uses ",(0,i.jsx)(n.strong,{children:"gpt-4"}),", whereas the ",(0,i.jsx)(n.code,{children:"get_activities"})," prompt it depends on uses ",(0,i.jsx)(n.strong,{children:"gpt-3.5-turbo"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Effectively, this is a prompt chain between ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," and ",(0,i.jsx)(n.code,{children:"get_activities"})," prompts, ",(0,i.jsx)(n.em,{children:"as well as"})," as a model chain between ",(0,i.jsx)(n.strong,{children:"gpt-3.5-turbo"})," and ",(0,i.jsx)(n.strong,{children:"gpt-4"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let's run this with AIConfig:"}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsxs)(r.Z,{value:"node",children:[(0,i.jsxs)(n.p,{children:["Replace the ",(0,i.jsx)(n.code,{children:"aiconfig.run"})," call above with this:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Run a prompt chain, with data passed in as params\n// This will first run get_activities with GPT-3.5, and\n// then use its output to run the gen_itinerary using GPT-4\nawait aiConfig.runWithDependencies(\n  "gen_itinerary",\n  /*params*/ { order_by: "duration" },\n  options\n);\n'})})]}),(0,i.jsxs)(r.Z,{value:"python",children:[(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"config.run"})," above with this:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'inference_options = InferenceOptions(stream=True)\nawait config.run(\n    "gen_itinerary",\n    params={"order_by": "duration"},\n    options=inference_options,\n    run_with_dependencies=True)\n'})})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Notice how simple the syntax is to perform a fairly complex task - running 2 different prompts across 2 different models and chaining one's output as part of the input of another."})}),"\n",(0,i.jsx)(n.h3,{id:"5-save-the-aiconfig",children:"5. Save the AIConfig."}),"\n",(0,i.jsx)(n.p,{children:"Let's save the AIConfig back to disk, and serialize the outputs from the latest inference run as well:"}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Save the AIConfig to disk, and serialize outputs from the model run\naiConfig.save(\n  "updated.aiconfig.json",\n  /*saveOptions*/ { serializeOutputs: true }\n);\n'})})}),(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Save the aiconfig to disk. and serialize outputs from the model run\nconfig.save('updated.aiconfig.json', include_outputs=True)\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The AIConfig SDK supports ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",children:"CRUD"})," operations for prompts, models, parameters, and arbitrary metadata in the ",(0,i.jsx)(n.code,{children:"aiconfig"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"6-open-the-aiconfig-in-ai-workbook-editor",children:"6. Open the AIConfig in AI Workbook editor."}),"\n",(0,i.jsxs)(n.p,{children:["We can iterate on an ",(0,i.jsx)(n.code,{children:"aiconfig"})," using a notebook-like editor called an ",(0,i.jsx)(n.strong,{children:"AI Workbook"}),". Now that we have an ",(0,i.jsx)(n.code,{children:"aiconfig"})," file artifact that encapsulates the generative AI part of our application, the application code doesn't need to change even as the ",(0,i.jsx)(n.code,{children:"aiconfig"})," is updated."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://lastmileai.dev",children:"https://lastmileai.dev"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to Workbooks page: ",(0,i.jsx)(n.a,{href:"https://lastmileai.dev/workbooks",children:"https://lastmileai.dev/workbooks"})]}),"\n",(0,i.jsx)(n.li,{children:"Click dropdown from '+ New Workbook' and select 'Create from AIConfig'"}),"\n",(0,i.jsxs)(n.li,{children:["Upload ",(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Try out the workbook playground here: ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://lastmileai.dev/workbooks/clooqs3p200kkpe53u6n2rhr9",children:"NYC Travel Workbook"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["We are working on a local editor that you can run yourself. For now, please use the hosted version on ",(0,i.jsx)(n.a,{href:"https://lastmileai.dev",children:"https://lastmileai.dev"}),"."]})}),"\n",(0,i.jsx)("video",{controls:!0,children:(0,i.jsx)("source",{src:"https://s3.amazonaws.com/publicdata.lastmileai.com/workbook_editor_480.mov"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{})}),"\n",(0,i.jsx)(n.h3,{id:"code-for-getting-started",children:"Code for Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["Tutorial code can be found ",(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/ad38040ec3d9f0273e006464e01e02b06f2809e9/cookbook/Getting-Started",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"additional-guides",children:"Additional Guides"}),"\n",(0,i.jsxs)(n.p,{children:["There is a lot you can do with ",(0,i.jsx)(n.code,{children:"aiconfig"}),". We have several other tutorials to help get you started:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/overview/create-an-aiconfig",children:"Create an AIConfig from scratch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/overview/run-aiconfig",children:"Run a prompt"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/overview/parameters",children:"Pass data into prompts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/overview/define-prompt-chain",children:"Prompt chains"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/overview/monitoring-aiconfig",children:"Callbacks and monitoring"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cookbooks",children:"Cookbooks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Wizard-GPT",children:"CLI Chatbot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/RAG-with-AIConfig",children:"RAG with AIConfig"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Basic-Prompt-Routing",children:"Prompt routing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Function-Calling-OpenAI",children:"OpenAI function calling"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Chain-of-Verification",children:"Chain of thought"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4883:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(412);const a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultOs:a?"macos":o?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"TypeScript",value:"node"},{label:"Python",value:"python"}]}},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var i=t(6010);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var i=t(7294),a=t(6010),o=t(2466),r=t(6550),s=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[c,u]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function v(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==i&&(c(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(7294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);