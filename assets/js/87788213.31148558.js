"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,x=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(x,o(o({ref:t},c),{},{components:n})):a.createElement(x,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},o="ExecutionContext.evaluateHandle() method",p={unversionedId:"api/puppeteer.executioncontext.evaluatehandle",id:"api/puppeteer.executioncontext.evaluatehandle",title:"ExecutionContext.evaluateHandle() method",description:"Signature:",source:"@site/../docs/api/puppeteer.executioncontext.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.executioncontext.evaluatehandle",permalink:"/api/puppeteer.executioncontext.evaluatehandle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ExecutionContext.evaluate() method",permalink:"/api/puppeteer.executioncontext.evaluate"},next:{title:"ExecutionContext.frame() method",permalink:"/api/puppeteer.executioncontext.frame"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"executioncontextevaluatehandle-method"},"ExecutionContext.evaluateHandle() method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"a function to be evaluated in the ",(0,r.kt)("code",null,"executionContext"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"argument to pass to the page function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,r.kt)("p",null,"A promise that resolves to the return value of the given function as an in-page object (a ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.jshandle"},"JSHandle"),")."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The only difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," returns an in-page object (a ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.jshandle"},"JSHandle"),"). If the function passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," returns a Promise, then ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const context = await page.mainFrame().executionContext();\nconst aHandle = await context.evaluateHandle(() => Promise.resolve(self));\naHandle; // Handle for the global object.\n")),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"A string can also be passed in instead of a function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Handle for the '3' * object.\nconst aHandle = await context.evaluateHandle('1 + 2');\n")),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,"JSHandle instances can be passed as arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.* evaluateHandle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const aHandle = await context.evaluateHandle(() => document.body);\nconst resultHandle = await context.evaluateHandle(body => body.innerHTML, * aHandle);\nconsole.log(await resultHandle.jsonValue()); // prints body's innerHTML\nawait aHandle.dispose();\nawait resultHandle.dispose();\n")))}s.isMDXComponent=!0}}]);