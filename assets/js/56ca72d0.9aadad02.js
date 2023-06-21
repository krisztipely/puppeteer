"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={sidebar_label:"Page.screenshot"},i="Page.screenshot() method",l={unversionedId:"api/puppeteer.page.screenshot",id:"version-20.7.3/api/puppeteer.page.screenshot",title:"Page.screenshot() method",description:"Captures screenshot of the current page.",source:"@site/versioned_docs/version-20.7.3/api/puppeteer.page.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.page.screenshot",permalink:"/api/puppeteer.page.screenshot",draft:!1,tags:[],version:"20.7.3",frontMatter:{sidebar_label:"Page.screenshot"},sidebar:"api",previous:{title:"Page.removeScriptToEvaluateOnNewDocument",permalink:"/api/puppeteer.page.removescripttoevaluateonnewdocument"},next:{title:"Page.screenshot_1",permalink:"/api/puppeteer.page.screenshot_1"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pagescreenshot-method"}),"Page.screenshot() method"),(0,r.kt)("p",null,"Captures screenshot of the current page."),(0,r.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  screenshot(\n    options: ScreenshotOptions & {\n      encoding: 'base64';\n    }\n  ): Promise<string>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.screenshotoptions"}),"ScreenshotOptions")," ","&"," { encoding: 'base64'; }"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","string",">"),(0,r.kt)("p",null,"Promise which resolves to buffer or a base64 string (depending on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding"),") with captured screenshot."),(0,r.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"Options object which might have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path")," : The file path to save the image to. The screenshot type will be inferred from file extension. If ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," is a relative path, then it is resolved relative to ",(0,r.kt)("a",a({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". If no path is provided, the image won't be saved to the disk.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"type")," : Specify screenshot type, can be ",(0,r.kt)("inlineCode",{parentName:"p"},"jpeg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"png")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"webp"),". Defaults to 'png'.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"quality")," : The quality of the image, between 0-100. Not applicable to ",(0,r.kt)("inlineCode",{parentName:"p"},"png")," images.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fullPage")," : When true, takes a screenshot of the full scrollable page. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clip")," : An object which specifies clipping region of the page. Should have the following fields:",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," : x-coordinate of top-left corner of clip area.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," : y-coordinate of top-left corner of clip area.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," : width of clipping area.",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," : height of clipping area.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"omitBackground")," : Hides default white background and allows capturing screenshots with transparency. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," : The encoding of the image, can be either base64 or binary. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"binary"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"captureBeyondViewport")," : When true, captures screenshot ",(0,r.kt)("a",a({parentName:"p"},{href:"https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-captureScreenshot"}),"beyond the viewport"),". When false, falls back to old behaviour, and cuts the screenshot by the viewport size. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fromSurface")," : When true, captures screenshot ",(0,r.kt)("a",a({parentName:"p"},{href:"https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-captureScreenshot"}),"from the surface rather than the view"),". When false, works only in headful mode and ignores page viewport (but not browser window's bounds). Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))))}m.isMDXComponent=!0}}]);