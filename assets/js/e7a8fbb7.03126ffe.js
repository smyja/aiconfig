"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[804],{5667:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=o(5893),i=o(1151);o(4866),o(5162),o(4883);const s={sidebar_position:7},t="Gradio Notebooks",r={id:"gradio-notebook",title:"Gradio Notebooks",description:"Gradio Notebook is a Gradio custom component that creates a notebook playground on Hugging Face Spaces with only 8-lines of code!",source:"@site/docs/gradio-notebook.md",sourceDirName:".",slug:"/gradio-notebook",permalink:"/docs/gradio-notebook",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docSidebar",previous:{title:"Supported Models",permalink:"/docs/overview/model-parsers"},next:{title:"Cookbooks & Guides",permalink:"/docs/cookbooks"}},l={},c=[{value:"Quickstart",id:"quickstart",level:2},{value:"1. Create a new Space with Gradio Notebooks",id:"1-create-a-new-space-with-gradio-notebooks",level:3},{value:"2. Design your Space",id:"2-design-your-space",level:3},{value:"3. Lock in your edits",id:"3-lock-in-your-edits",level:3},{value:"Examples",id:"examples",level:2},{value:"Features",id:"features",level:2},{value:"Gradio Notebook Structure",id:"gradio-notebook-structure",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Global Parameters",id:"global-parameters",level:4},{value:"Local Parameters",id:"local-parameters",level:4},{value:"Chaining",id:"chaining",level:3},{value:"Download",id:"download",level:3},{value:"Share Notebook",id:"share-notebook",level:3},{value:"Build apps inspired by Spaces",id:"build-apps-inspired-by-spaces",level:3},{value:"Supported Models",id:"supported-models",level:2},{value:"Inference API",id:"inference-api",level:3},{value:"Local Models",id:"local-models",level:3},{value:"Community &amp; Support",id:"community--support",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"gradio-notebooks",children:"Gradio Notebooks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/gradio-notebook-template",children:"Gradio Notebook"})," is a Gradio custom component that creates a notebook playground on Hugging Face Spaces with only ",(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/gradio-notebook-template/blob/main/app.py",children:"8-lines of code"}),"!"]}),"\n",(0,a.jsx)(n.p,{children:"You can:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use any model, and a combination of models, in a single space"}),"\n",(0,a.jsx)(n.li,{children:"Play around with models in any format (text, audio image) and ordering"}),"\n",(0,a.jsx)(n.li,{children:"Share Space output results with friends"}),"\n"]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{alt:"notebook",src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/1af66044-5eea-497c-964d-110933386154",width:"600"})})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,a.jsx)(n.h3,{id:"1-create-a-new-space-with-gradio-notebooks",children:"1. Create a new Space with Gradio Notebooks"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Option 1: Start with a template"}),". Duplicate the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/gradio-notebook-template",children:"Gradio Notebook Quickstart Space"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Option 2: Create from scratch"}),". Create a ",(0,a.jsx)(n.a,{href:"https://huggingface.co/new-space",children:"new Gradio SDK Space"})," and add these files to your Space repo. To add files to your Space repo, you can do so through the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/docs/hub/repositories-getting-started#adding-files-to-a-repository-web-ui",children:"Web UI"})," or ",(0,a.jsx)(n.a,{href:"https://huggingface.co/docs/hub/repositories-getting-started#terminal",children:"terminal"}),".","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/gradio-notebook-template/blob/main/app.py",children:"app.py"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/gradio-notebook-template/blob/main/requirements.txt",children:"requirements.txt"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Please ensure the ",(0,a.jsx)(n.code,{children:"sdk_version"})," in your Space's ",(0,a.jsx)(n.code,{children:"README.md"})," is set to ",(0,a.jsx)(n.code,{children:"sdk_version: 4.16.0"})," or lower due to compatibilty issues in higher ",(0,a.jsx)(n.code,{children:"gradio"})," package versions"]})}),"\n",(0,a.jsx)(n.h3,{id:"2-design-your-space",children:"2. Design your Space"}),"\n",(0,a.jsx)(n.p,{children:"Use the playground UI in your space to setup your models and prompts that you want on your space."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Add a new cell with '+'."})," Gradio Notebooks are made up cells. Each cell allows you to prompt a specific model."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Select the model for your cell."})," First, choose the ",(0,a.jsx)(n.a,{href:"#supported-models",children:"Hugging Face Task"})," for this cell. Then, click on the Cell Settings panel to select a model for that task. The model needs to available on the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/docs/api-inference/index",children:"Hugging Face Inference API"})," - check the model card on Hugging Face."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Note: Edits/changes won\u2019t save automatically."})," Refreshing the page will lose your edits."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"3-lock-in-your-edits",children:"3. Lock in your edits"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Download"}),". This captures the current configuration of your Space and downloads the ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file onto your computer."]}),"\n",(0,a.jsxs)(n.li,{children:["Rename the downloaded file to ",(0,a.jsx)(n.code,{children:"my_app.aiconfig.json"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Replace ",(0,a.jsx)(n.code,{children:"my_app.aiconfig.json"})," in the Space repo with the downloaded one."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Anyone who now visits your Space will see the state represented by ",(0,a.jsx)(n.code,{children:"my_app.aiconfig.json"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/music_generator",children:"Music Playground"}),": Implement various media formats (e.g. text, audio, image) for multi-modal models."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/ai_story_generator",children:"AI Story Generator"}),": Chain models and prompts together to create workflows, such as story building."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/sdxl_playground",children:"Stable Diffusion XL Playground"}),": Create interactive prompt templates for your model."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.h3,{id:"gradio-notebook-structure",children:"Gradio Notebook Structure"}),"\n",(0,a.jsxs)(n.p,{children:["Gradio Notebooks are inspired by ",(0,a.jsx)(n.a,{href:"https://jupyter.org/",children:"Jupyter notebooks"}),". Each Notebook is made up of cells. The cell is associated with a model and running the cell executes it with your prompt."]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{alt:"notebook",src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/85c9953f-0cf6-4d0c-84bf-5fffa4e5bcf5",width:"800"})})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Parameters are variables that you can define and pass into any cell within your notebook. You can set both ",(0,a.jsx)(n.strong,{children:"global parameters"})," and ",(0,a.jsx)(n.strong,{children:"local parameters"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, the prompt ",(0,a.jsx)(n.code,{children:'"A large, friendly {{animal}} wearing a {{color}} hat"'})," generates the following images for different parameters:"]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{alt:"notebook",src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/9a7a11fe-6cc0-44f2-b7a3-c2efca87079b",width:"600"})})}),"\n",(0,a.jsx)(n.h4,{id:"global-parameters",children:"Global Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["You can set global parameters for your entire notebook. Click on ",(0,a.jsx)(n.strong,{children:"Global Parameters "})," on the top of your notebook and set your global parameters that can be used in any cell of the notebook."]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{alt:"notebook",src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/631f33ac-cf66-4e40-a7aa-c28d37b2ffad",width:"800"})})}),"\n",(0,a.jsx)(n.h4,{id:"local-parameters",children:"Local Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["You can set local parameters that only apply to the cell you are in. Click on the cell sidebar and ",(0,a.jsx)(n.strong,{children:"Local Parameters"}),". Note: Local parameters will override the global parameters if they have the same name."]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{alt:"notebook",src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/0935ac7c-5e68-42f1-befe-e279b027cac8",width:"800"})})}),"\n",(0,a.jsx)(n.h3,{id:"chaining",children:"Chaining"}),"\n",(0,a.jsx)(n.p,{children:"You can reference the output from one cell in another cell. This allows you to create complex, interconnected workflows within your notebook."}),"\n",(0,a.jsxs)(n.p,{children:["The image_gen prompt below uses the output of the prompt_1 using handlebars syntax\n(e.g ",(0,a.jsx)(n.code,{children:"{{prompt_1.output}}"}),")"]}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{alt:"notebook",src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/78636283-79d3-43b9-ab13-d0cd1513b38f",width:"800"})})}),"\n",(0,a.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.strong,{children:"Download"})," to download the ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file that captures the current state of your Space. Example Space and corresponding ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/ai_story_generator",children:"Gradio notebook Space"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/ai_story_generator/blob/main/story_gen.aiconfig.json",children:"my_app.aiconfig.json"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Reasons for Downloading:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Lock in edits to your Space."})," Refreshing your Space does not save changes. You need to upload the downloaded ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file to your Space repo to lock in the state. Make sure you name your ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file as ",(0,a.jsx)(n.code,{children:"my_app.aiconfig.json"})," - it\u2019s referenced in ",(0,a.jsx)(n.code,{children:"app.py"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Build apps inspired by your Space."})," HuggingFace Spaces offer cool demos, but building an app with the tested models and prompts is challenging. However, by downloading the ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file, you can use the prompts (and models) from your Space in your code with the ",(0,a.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig",children:"AIConfig SDK"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"share-notebook",children:"Share Notebook"}),"\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.strong,{children:"Share Notebook"})," to get a link to a read-only copy of your Space to share with the rest of the world!"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/ceadc825-9df3-4192-b033-117ee1d40590",alt:"sharing"})}),"\n",(0,a.jsx)(n.h3,{id:"build-apps-inspired-by-spaces",children:"Build apps inspired by Spaces"}),"\n",(0,a.jsxs)(n.p,{children:["You can easily build generative apps inspired by your work in Gradio Notebook Spaces! Both Space creators and Space viewers can download the ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file to capture the state of their Space."]}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"aiconfig.json"})," file in your code with the ",(0,a.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig",children:"AIConfig SDK"})," in 2 lines."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"config = await AIConfigRuntime.load('my_app.aiconfig.json')\nmodel_output = await config.run('prompt_1')\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig",children:"AIConfig"})," is an open-source framework. Message us on ",(0,a.jsx)(n.a,{href:"https://discord.com/invite/xBhNKTetGx",children:"Discord"})," if you feedback or questions!"]}),"\n",(0,a.jsx)(n.h2,{id:"supported-models",children:"Supported Models"}),"\n",(0,a.jsx)(n.h3,{id:"inference-api",children:"Inference API"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Gradio Notebooks support models which use the ",(0,a.jsx)(n.a,{href:"https://huggingface.co/docs/api-inference/index",children:"Hugging Face Inference API"}),"."]})," ",(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks",children:"Hugging Face Tasks"})," that are supported:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/text-generation",children:"Text Generation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/summarization",children:"Summarization"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/translation",children:"Translation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/automatic-speech-recognition",children:"Automatic Speech Recognition (ASR)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/text-to-speech",children:"Text-to-Speech"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/text-to-image",children:"Text-to-Image"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://huggingface.co/tasks/image-to-text",children:"Image-to-Text"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"local-models",children:"Local Models"}),"\n",(0,a.jsx)(n.p,{children:"Model parsers also exist for local models associated with most of the above tasks (via Hugging Face Transformers and Diffusers library)."}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"Using local models will download the models to your Space, using up Space resources, even if the Space user is not an owner of the Space. Downloading the models will also require a significant wait when running a cell if they have not already been downloaded to your Space. Please be aware of these considerations when using local models."})}),"\n",(0,a.jsxs)(n.p,{children:["These local parsers can be used by adding them to the ",(0,a.jsx)(n.code,{children:"ModelParserRegistry"})," for your Space. To do so:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["add a ",(0,a.jsx)(n.code,{children:"model_parsers.py"})," file in your space repo"]}),"\n",(0,a.jsxs)(n.li,{children:["in the file, import the relevant model parser from ",(0,a.jsx)(n.code,{children:"aiconfig_extension_hugging_face"})]}),"\n",(0,a.jsxs)(n.li,{children:["register the model parser in a ",(0,a.jsx)(n.code,{children:"register_model_parsers"})," function"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://huggingface.co/spaces/lastmileai/gradio_notebook_local_model/blob/main/model_parsers.py",children:"https://huggingface.co/spaces/lastmileai/gradio_notebook_local_model/blob/main/model_parsers.py"})," for an example ",(0,a.jsx)(n.code,{children:"model_parsers.py"})," file. You can copy this file to your own Space and uncomment the desired local parsers."]}),"\n",(0,a.jsxs)(n.p,{children:["Once the ",(0,a.jsx)(n.code,{children:"model_parsers.py"})," file is created, simply reference it in ",(0,a.jsx)(n.code,{children:"app.py"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'import gradio as gr\nfrom gradio_notebook import GradioNotebook\n\nwith gr.Blocks() as demo:\n    GradioNotebook(parsers_path="./model_parsers.py")\n\ndemo.queue().launch()\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If a ",(0,a.jsx)(n.code,{children:"parsers_path"})," is not specified for the ",(0,a.jsx)(n.code,{children:"GradioNotebook"})," component, it will look for a ",(0,a.jsx)(n.code,{children:"model_parsers.py"})," by default."]}),"\n",(0,a.jsx)(n.h2,{id:"community--support",children:"Community & Support"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig",children:"AIConfig"})," is an open-source framework, we welcome your feedback and questions! Join our growing community for help, ideas, and discussions on AI."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Bug Report or Feature Request? ",(0,a.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/issues",children:"File an issue"})]}),"\n",(0,a.jsxs)(n.li,{children:["Chat live with us on ",(0,a.jsx)(n.a,{href:"https://discord.com/invite/xBhNKTetGx",children:"Discord"})]}),"\n",(0,a.jsxs)(n.li,{children:["Check weekly updates on our ",(0,a.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/blob/main/CHANGELOG.md",children:"Changelog"})]}),"\n",(0,a.jsxs)(n.li,{children:["Follow us on ",(0,a.jsx)(n.a,{href:"https://twitter.com/lastmile",children:"Twitter"})]}),"\n",(0,a.jsxs)(n.li,{children:["Connect with us on ",(0,a.jsx)(n.a,{href:"https://www.linkedin.com/company/lastmile-ai/",children:"LinkedIn"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4883:(e,n,o)=>{o.d(n,{Z:()=>t});var a=o(412);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),t={defaultOs:i?"macos":s?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"Python",value:"python"},{label:"TypeScript",value:"node"}]}},5162:(e,n,o)=>{o.d(n,{Z:()=>t});o(7294);var a=o(6010);const i={tabItem:"tabItem_Ymn6"};var s=o(5893);function t(e){let{children:n,hidden:o,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,t),hidden:o,children:n})}},4866:(e,n,o)=>{o.d(n,{Z:()=>w});var a=o(7294),i=o(6010),s=o(2466),t=o(6550),r=o(469),l=o(1980),c=o(7392),d=o(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:o}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:a,default:i}}=e;return{value:n,label:o,attributes:a,default:i}}))}(o);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:o}=e;const i=(0,t.k6)(),s=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:o=!1,groupId:i}=e,s=u(e),[t,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=o.find((e=>e.default))??o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:o,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(o);return[i,(0,a.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:i}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=o(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=o(5893);function j(e){let{className:n,block:o,selectedValue:a,selectValue:t,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,o=l.indexOf(n),i=r[o].value;i!==a&&(c(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},n),children:r.map((e=>{let{value:n,label:o,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:o??n},n)}))})}function y(e){let{lazy:n,children:o,selectedValue:i}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>t});var a=o(7294);const i={},s=a.createContext(i);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);