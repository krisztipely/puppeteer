"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,x=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(x,l(l({ref:t},s),{},{components:n})):a.createElement(x,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},l="ExecutionContext.evaluate() method",i={unversionedId:"api/puppeteer.executioncontext.evaluate",id:"api/puppeteer.executioncontext.evaluate",title:"ExecutionContext.evaluate() method",description:"Signature:",source:"@site/../docs/api/puppeteer.executioncontext.evaluate.md",sourceDirName:"api",slug:"/api/puppeteer.executioncontext.evaluate",permalink:"/api/puppeteer.executioncontext.evaluate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ExecutionContext class",permalink:"/api/puppeteer.executioncontext"},next:{title:"ExecutionContext.evaluateHandle() method",permalink:"/api/puppeteer.executioncontext.evaluatehandle"}},p={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"executioncontextevaluate-method"},"ExecutionContext.evaluate() method"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluate<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"a function to be evaluated in the ",(0,r.kt)("code",null,"executionContext"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Params"),(0,r.kt)("td",{parentName:"tr",align:null},"argument to pass to the page function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,r.kt)("p",null,"A promise that resolves to the return value of the given function."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"If the function passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," returns a Promise, then ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," returns a non-serializable value, then ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.evaluate")," resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const executionContext = await page.mainFrame().executionContext();\nconst result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;\nconsole.log(result); // prints "56"\n')),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"A string can also be passed in instead of a function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await executionContext.evaluate('1 + 2')); // prints \"3\"\n")),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.jshandle"},"JSHandle")," instances can be passed as arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionContext.* evaluate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const oneHandle = await executionContext.evaluateHandle(() => 1);\nconst twoHandle = await executionContext.evaluateHandle(() => 2);\nconst result = await executionContext.evaluate(\n   (a, b) => a + b, oneHandle, * twoHandle\n);\nawait oneHandle.dispose();\nawait twoHandle.dispose();\nconsole.log(result); // prints '3'.\n")))}c.isMDXComponent=!0}}]);