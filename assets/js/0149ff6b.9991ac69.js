"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="Frame.waitForFunction() method",p={unversionedId:"api/puppeteer.frame.waitforfunction",id:"api/puppeteer.frame.waitforfunction",title:"Frame.waitForFunction() method",description:"Signature:",source:"@site/../docs/api/puppeteer.frame.waitforfunction.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforfunction",permalink:"/api/puppeteer.frame.waitforfunction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Frame.url() method",permalink:"/api/puppeteer.frame.url"},next:{title:"Frame.waitForNavigation() method",permalink:"/api/puppeteer.frame.waitfornavigation"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"framewaitforfunction-method"},"Frame.waitForFunction() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForFunction<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, options?: FrameWaitForFunctionOptions, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,a.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:null},"the function to evaluate in the frame context.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.framewaitforfunctionoptions"},"FrameWaitForFunctionOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," options to configure the polling method and timeout.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"args"),(0,a.kt)("td",{parentName:"tr",align:null},"Params"),(0,a.kt)("td",{parentName:"tr",align:null},"arguments to pass to the ",(0,a.kt)("code",null,"pageFunction"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,a.kt)("p",null,"the promise which resolve when the ",(0,a.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a truthy value."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"waitForFunction")," can be used to observe viewport size change:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n.  const browser = await puppeteer.launch();\n.  const page = await browser.newPage();\n.  const watchDog = page.mainFrame().waitForFunction('window.innerWidth < 100');\n.  page.setViewport({width: 50, height: 50});\n.  await watchDog;\n.  await browser.close();\n})();\n")),(0,a.kt)("p",null,"To pass arguments from Node.js to the predicate of ",(0,a.kt)("inlineCode",{parentName:"p"},"page.waitForFunction")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const selector = '.foo';\nawait frame.waitForFunction(\n  selector => !!document.querySelector(selector),\n  {}, // empty options object\n  selector\n);\n")))}m.isMDXComponent=!0}}]);