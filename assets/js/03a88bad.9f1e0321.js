"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||p;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const p={sidebar_position:1},o="Puppeteer",i={unversionedId:"index",id:"index",title:"Puppeteer",description:"Build status npm puppeteer package",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"FAQ",permalink:"/faq"}},l={},s=[{value:"API | FAQ | Contributing | Troubleshooting",id:"api--faq--contributing--troubleshooting",level:6},{value:"What can I do?",id:"what-can-i-do",level:5},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"puppeteer-core",id:"puppeteer-core",level:4},{value:"Usage",id:"usage",level:3},{value:"Working with Chrome Extensions",id:"working-with-chrome-extensions",level:3},{value:"Default runtime settings",id:"default-runtime-settings",level:2},{value:"Resources",id:"resources",level:2},{value:"Debugging tips",id:"debugging-tips",level:2},{value:"Contributing",id:"contributing",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"puppeteer"},"Puppeteer"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/actions?query=workflow%3ACI"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/puppeteer/puppeteer/workflows/CI/badge.svg",alt:"Build status"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.org/package/puppeteer"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/puppeteer.svg",alt:"npm puppeteer package"}))),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",height:"200",align:"right"}),(0,r.kt)("h6",{id:"api--faq--contributing--troubleshooting"},(0,r.kt)("a",{parentName:"h6",href:"https://pptr.dev/api"},"API")," | ",(0,r.kt)("a",{parentName:"h6",href:"https://pptr.dev/faq"},"FAQ")," | ",(0,r.kt)("a",{parentName:"h6",href:"https://pptr.dev/contributing"},"Contributing")," | ",(0,r.kt)("a",{parentName:"h6",href:"https://pptr.dev/troubleshooting"},"Troubleshooting")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the ",(0,r.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol"),". Puppeteer runs ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"headless")," by default, but can be configured to run full (non-headless) Chrome or Chromium.")),(0,r.kt)("h5",{id:"what-can-i-do"},"What can I do?"),(0,r.kt)("p",null,"Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate screenshots and PDFs of pages."),(0,r.kt)("li",{parentName:"ul"},'Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).'),(0,r.kt)("li",{parentName:"ul"},"Automate form submission, UI testing, keyboard input, etc."),(0,r.kt)("li",{parentName:"ul"},"Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features."),(0,r.kt)("li",{parentName:"ul"},"Capture a ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"},"timeline trace")," of your site to help diagnose performance issues."),(0,r.kt)("li",{parentName:"ul"},"Test Chrome Extensions.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use Puppeteer in your project, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm i puppeteer\n# or "yarn add puppeteer"\n')),(0,r.kt)("p",null,"When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API (customizable through ",(0,r.kt)("a",{parentName:"p",href:"#environment-variables"},"Environment Variables"),"). For a version of Puppeteer purely for connection, see ",(0,r.kt)("a",{parentName:"p",href:"#puppeteer-core"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer-core")),"."),(0,r.kt)("h4",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"Puppeteer looks for certain ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Environment_variable"},"environment variables")," to aid its operations.\nIf Puppeteer doesn't find them in the environment during the installation step, a lowercased variant of these variables will be used from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/config"},"npm config"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," - defines HTTP proxy settings that are used to download and run the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_SKIP_CHROMIUM_DOWNLOAD")," - do not download bundled Chromium during installation step."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_TMP_DIR")," - defines the directory to be used by Puppeteer for creating temporary files. Defaults to ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/api/os.html#os_os_tmpdir"},(0,r.kt)("inlineCode",{parentName:"a"},"os.tmpdir()")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_DOWNLOAD_HOST")," - overwrite URL prefix that is used to download Chromium. Note: this includes protocol and might even include path prefix. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://storage.googleapis.com"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_DOWNLOAD_PATH")," - overwrite the path for the downloads folder. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"<root>/.local-chromium"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"<root>")," is Puppeteer's package root."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_CHROMIUM_REVISION")," - specify a certain version of Chromium you'd like Puppeteer to use. See ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.puppeteernode.launch"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer.launch"))," on how executable path is inferred."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_EXECUTABLE_PATH")," - specify an executable path to be used in ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.puppeteernode.launch"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer.launch")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_PRODUCT")," - specify which browser you'd like Puppeteer to use. Must be one of ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"firefox"),". This can also be used during installation to fetch the recommended browser binary. Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"product")," programmatically in ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.puppeteernode.launch"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer.launch"))," supersedes this environment variable. The product is exposed in ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.product"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer.product"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_EXPERIMENTAL_CHROMIUM_MAC_ARM")," \u2014 specify Puppeteer download Chromium for Apple M1. On Apple M1 devices Puppeteer by default downloads the version for Intel's processor which runs via Rosetta. It works without any problems, however, with this option, you should get more efficient resource usage (CPU and RAM) that could lead to a faster execution time.")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Puppeteer is only ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/faq#q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy"},"guaranteed to work")," with the bundled Chromium, use at your own risk."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"PUPPETEER_*")," env variables are not accounted for in ",(0,r.kt)("a",{parentName:"p",href:"#puppeteer-core"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer-core")),"."))),(0,r.kt)("h4",{id:"puppeteer-core"},"puppeteer-core"),(0,r.kt)("p",null,"Every release since v1.7.0 we publish two packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/puppeteer"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/puppeteer-core"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer-core")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," is a ",(0,r.kt)("em",{parentName:"p"},"product")," for browser automation. When installed, it downloads a version of\nChromium, which it then drives using ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core"),". Being an end-user product, ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," supports a bunch of convenient ",(0,r.kt)("inlineCode",{parentName:"p"},"PUPPETEER_*")," env variables to tweak its behavior."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," is a ",(0,r.kt)("em",{parentName:"p"},"library")," to help drive anything that supports DevTools protocol. ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," doesn't download Chromium when installed. Being a library, ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," is fully driven\nthrough its programmatic interface and disregards all the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUPPETEER_*")," env variables."),(0,r.kt)("p",null,"To sum up, the only differences between ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer-core")," doesn't automatically download Chromium when installed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer-core")," ignores all ",(0,r.kt)("inlineCode",{parentName:"li"},"PUPPETEER_*")," env variables.")),(0,r.kt)("p",null,"In most cases, you'll be fine using the ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," package."),(0,r.kt)("p",null,"However, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you're building another end-user product or library atop of DevTools protocol. For example, one might build a PDF generator using ",(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer-core")," and write a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"install.js")," script that downloads ",(0,r.kt)("a",{parentName:"li",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"headless_shell"))," instead of Chromium to save disk space."),(0,r.kt)("li",{parentName:"ul"},"you're bundling Puppeteer to use in Chrome Extension / browser with the DevTools protocol where downloading an additional Chromium binary is unnecessary."),(0,r.kt)("li",{parentName:"ul"},"you're building a set of tools where ",(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer-core")," is one of the ingredients and you want to postpone ",(0,r.kt)("inlineCode",{parentName:"li"},"install.js")," script execution until Chromium is about to be used.")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core"),", remember to change the ",(0,r.kt)("em",{parentName:"p"},"include")," line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer-core');\n")),(0,r.kt)("p",null,"You will then need to call ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.puppeteer.connect"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer.connect"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.puppeteernode.launch"},(0,r.kt)("inlineCode",{parentName:"a"},"puppeteer.launch"))," with an explicit ",(0,r.kt)("inlineCode",{parentName:"p"},"executablePath")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," option."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Puppeteer follows the latest ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release#release-schedule"},"maintenance LTS")," version of Node."),(0,r.kt)("p",null,"Puppeteer will be familiar to people using other browser testing frameworks. You create an instance\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"Browser"),", open pages, and then manipulate them with ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api"},"Puppeteer's API"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," - navigating to ",(0,r.kt)("a",{parentName:"p",href:"https://example.com"},"https://example.com")," and saving a screenshot as ",(0,r.kt)("em",{parentName:"p"},"example.png"),":"),(0,r.kt)("p",null,"Save file as ",(0,r.kt)("strong",{parentName:"p"},"example.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await page.screenshot({path: 'example.png'});\n\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,"Execute script on the command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node example.js\n")),(0,r.kt)("p",null,"Puppeteer sets an initial page size to 800\xd7600px, which defines the screenshot size. The page size can be customized with ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.setviewport"},(0,r.kt)("inlineCode",{parentName:"a"},"Page.setViewport()")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," - create a PDF."),(0,r.kt)("p",null,"Save file as ",(0,r.kt)("strong",{parentName:"p"},"hn.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://news.ycombinator.com', {\n    waitUntil: 'networkidle2',\n  });\n  await page.pdf({path: 'hn.pdf', format: 'a4'});\n\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,"Execute script on the command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node hn.js\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.pdf"},(0,r.kt)("inlineCode",{parentName:"a"},"Page.pdf"))," for more information about creating pdfs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," - evaluate script in the context of the page"),(0,r.kt)("p",null,"Save file as ",(0,r.kt)("strong",{parentName:"p"},"get-dimensions.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n\n  // Get the \"viewport\" of the page, as reported by the page.\n  const dimensions = await page.evaluate(() => {\n    return {\n      width: document.documentElement.clientWidth,\n      height: document.documentElement.clientHeight,\n      deviceScaleFactor: window.devicePixelRatio,\n    };\n  });\n\n  console.log('Dimensions:', dimensions);\n\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,"Execute script on the command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node get-dimensions.js\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.evaluate"},(0,r.kt)("inlineCode",{parentName:"a"},"Page.evaluate"))," and related methods like ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.evaluateOnNewDocument"},(0,r.kt)("inlineCode",{parentName:"a"},"Page.evaluateOnNewDocument"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page.exposeFunction"},(0,r.kt)("inlineCode",{parentName:"a"},"Page.exposeFunction")),"."),(0,r.kt)("h3",{id:"working-with-chrome-extensions"},"Working with Chrome Extensions"),(0,r.kt)("p",null,"Puppeteer can be used for testing Chrome Extensions."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Extensions in Chrome / Chromium currently only work in non-headless mode and experimental Chrome headless mode."))),(0,r.kt)("p",null,"The following is code for getting a handle to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"background page")," of an extension whose source is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const browser = await puppeteer.launch({\n    headless: 'chrome',\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`,\n    ],\n  });\n  const backgroundPageTarget = await browser.waitForTarget(\n    target => target.type() === 'background_page'\n  );\n  const backgroundPage = await backgroundPageTarget.page();\n  // Test the background page as you would any other page.\n  await browser.close();\n})();\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Chrome Manifest V3 extensions have a background ServiceWorker of type 'service_worker', instead of a page of type 'background_page'."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is not yet possible to test extension popups or content scripts."))),(0,r.kt)("h2",{id:"default-runtime-settings"},"Default runtime settings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Uses Headless mode")),(0,r.kt)("p",null,"Puppeteer launches Chromium in ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"headless mode"),". To launch a full version of Chromium, set the ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.browserlaunchargumentoptions.headless"},(0,r.kt)("inlineCode",{parentName:"a"},"headless")," option")," when launching a browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({headless: false}); // default is true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Runs a bundled version of Chromium")),(0,r.kt)("p",null,"By default, Puppeteer downloads and uses a specific version of Chromium so its API\nis guaranteed to work out of the box. To use Puppeteer with a different version of Chrome or Chromium,\npass in the executable's path when creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Browser")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});\n")),(0,r.kt)("p",null,"You can also use Puppeteer with Firefox Nightly (experimental support). See ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.puppeteernode.launch"},(0,r.kt)("inlineCode",{parentName:"a"},"Puppeteer.launch"))," for more information."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},(0,r.kt)("inlineCode",{parentName:"a"},"this article"))," for a description of the differences between Chromium and Chrome. ",(0,r.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/chromium_browser_vs_google_chrome.md"},(0,r.kt)("inlineCode",{parentName:"a"},"This article"))," describes some differences for Linux users."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Creates a fresh user profile")),(0,r.kt)("p",null,"Puppeteer creates its own browser user profile which it ",(0,r.kt)("strong",{parentName:"p"},"cleans up on every run"),"."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api"},"API Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/tree/main/examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transitive-bullshit/awesome-puppeteer"},"Community list of Puppeteer resources"))),(0,r.kt)("h2",{id:"debugging-tips"},"Debugging tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Turn off headless mode - sometimes it's useful to see what the browser is\ndisplaying. Instead of launching in headless mode, launch a full version of\nthe browser using ",(0,r.kt)("inlineCode",{parentName:"p"},"headless: false"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({headless: false});\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Slow it down - the ",(0,r.kt)("inlineCode",{parentName:"p"},"slowMo")," option slows down Puppeteer operations by the\nspecified amount of milliseconds. It's another way to help see what's going on."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  headless: false,\n  slowMo: 250, // slow down by 250ms\n});\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Capture console output - You can listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"console")," event.\nThis is also handy when debugging code in ",(0,r.kt)("inlineCode",{parentName:"p"},"page.evaluate()"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"page.on('console', msg => console.log('PAGE LOG:', msg.text()));\n\nawait page.evaluate(() => console.log(`url is ${location.href}`));\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use debugger in application code browser"),(0,r.kt)("p",{parentName:"li"},"There are two execution context: node.js that is running test code, and the browser\nrunning application code being tested. This lets you debug code in the\napplication code browser; ie code inside ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluate()"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{devtools: true}")," when launching Puppeteer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({devtools: true});\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change default test timeout:"),(0,r.kt)("p",{parentName:"li"},"jest: ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.setTimeout(100000);")),(0,r.kt)("p",{parentName:"li"},"jasmine: ",(0,r.kt)("inlineCode",{parentName:"p"},"jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;")),(0,r.kt)("p",{parentName:"li"},"mocha: ",(0,r.kt)("inlineCode",{parentName:"p"},"this.timeout(100000);")," (don't forget to change test to use ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/23492442"},"function and not '=>'"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add an evaluate statement with ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," inside / add ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," to an existing evaluate statement:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => {\n  debugger;\n});\n")),(0,r.kt)("p",{parentName:"li"},"The test will now stop executing in the above evaluate statement, and chromium will stop in debug mode.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use debugger in node.js"),(0,r.kt)("p",{parentName:"li"},"This will let you debug test code. For example, you can step over ",(0,r.kt)("inlineCode",{parentName:"p"},"await page.click()")," in the node.js script and see the click happen in the application code browser."),(0,r.kt)("p",{parentName:"li"},"Note that you won't be able to run ",(0,r.kt)("inlineCode",{parentName:"p"},"await page.click()")," in\nDevTools console due to this ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=833928"},"Chromium bug"),". So if\nyou want to try something out, you have to add it to your test file."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," to your test, eg:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"debugger;\nawait page.click('a[target=_blank]');\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"headless")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"node --inspect-brk"),", eg ",(0,r.kt)("inlineCode",{parentName:"p"},"node --inspect-brk node_modules/.bin/jest tests"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Chrome open ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://inspect/#devices")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"inspect"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the newly opened test browser, type ",(0,r.kt)("inlineCode",{parentName:"p"},"F8")," to resume test execution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now your ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," will be hit and you can debug in the test browser")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable verbose logging - internal DevTools protocol traffic\nwill be logged via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/debug"},(0,r.kt)("inlineCode",{parentName:"a"},"debug"))," module under the ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},' # Basic verbose logging\n env DEBUG="puppeteer:*" node script.js\n\n # Protocol traffic can be rather noisy. This example filters out all Network domain messages\n env DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v \'"Network\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Debug your Puppeteer (node) code easily, using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GoogleChromeLabs/ndb"},"ndb")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g ndb")," (or even better, use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkat/npx"},"npx"),"!)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add a ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," to your Puppeteer (node) code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add ",(0,r.kt)("inlineCode",{parentName:"p"},"ndb")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ndb"),") before your test command. For example:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ndb jest")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ndb mocha")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ndb jest")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ndb mocha"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"debug your test inside chromium like a boss!"))),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Check out our ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/contributing"},"contributing guide")," to get an overview of Puppeteer development."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/faq"},"FAQ")," has migrated to ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/faq"},"our site"),"."))}m.isMDXComponent=!0}}]);