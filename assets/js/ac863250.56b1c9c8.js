"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(y,p(p({ref:t},u),{},{components:r})):n.createElement(y,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},p="ExecutionContext.queryObjects() method",i={unversionedId:"api/puppeteer.executioncontext.queryobjects",id:"api/puppeteer.executioncontext.queryobjects",title:"ExecutionContext.queryObjects() method",description:"This method iterates the JavaScript heap and finds all the objects with the given prototype.",source:"@site/../docs/api/puppeteer.executioncontext.queryobjects.md",sourceDirName:"api",slug:"/api/puppeteer.executioncontext.queryobjects",permalink:"/api/puppeteer.executioncontext.queryobjects",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ExecutionContext.frame() method",permalink:"/api/puppeteer.executioncontext.frame"},next:{title:"FileChooser class",permalink:"/api/puppeteer.filechooser"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"executioncontextqueryobjects-method"},"ExecutionContext.queryObjects() method"),(0,a.kt)("p",null,"This method iterates the JavaScript heap and finds all the objects with the given prototype."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"queryObjects<Prototype>(prototypeHandle: JSHandle<Prototype>): Promise<HandleFor<Prototype[]>>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prototypeHandle"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.jshandle"},"JSHandle"),"<","Prototype",">"),(0,a.kt)("td",{parentName:"tr",align:null},"a handle to the object prototype")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.handlefor"},"HandleFor"),"<","Prototype","[","]",">",">"),(0,a.kt)("p",null,"A handle to an array of objects with the given prototype."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Create a Map object\nawait page.evaluate(() => (window.map = new Map()));\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n")))}s.isMDXComponent=!0}}]);