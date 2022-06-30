"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o="CustomQueryHandler interface",i={unversionedId:"api/puppeteer.customqueryhandler",id:"api/puppeteer.customqueryhandler",title:"CustomQueryHandler interface",description:"Contains two functions queryOne and queryAll that can be registered as alternative querying strategies. The functions queryOne and queryAll are executed in the page context. queryOne should take an Element and a selector string as argument and return a single Element or null if no element is found. queryAll takes the same arguments but should instead return a NodeListOf or Array with all the elements that match the given query selector.",source:"@site/../docs/api/puppeteer.customqueryhandler.md",sourceDirName:"api",slug:"/api/puppeteer.customqueryhandler",permalink:"/api/puppeteer.customqueryhandler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"CustomError.(constructor)",permalink:"/api/puppeteer.customerror._constructor_"},next:{title:"CustomQueryHandler.queryAll property",permalink:"/api/puppeteer.customqueryhandler.queryall"}},p={},u=[{value:"Properties",id:"properties",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customqueryhandler-interface"},"CustomQueryHandler interface"),(0,a.kt)("p",null,"Contains two functions ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOne")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"queryAll")," that can be ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.registercustomqueryhandler"},"registered")," as alternative querying strategies. The functions ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOne")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"queryAll")," are executed in the page context. ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOne")," should take an ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," and a selector string as argument and return a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Element")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if no element is found. ",(0,a.kt)("inlineCode",{parentName:"p"},"queryAll")," takes the same arguments but should instead return a ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeListOf<Element>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<Element>")," with all the elements that match the given query selector."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CustomQueryHandler\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.customqueryhandler.queryall"},"queryAll?")),(0,a.kt)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element","[","]"," ","|"," NodeListOf","<","Element",">"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.customqueryhandler.queryone"},"queryOne?")),(0,a.kt)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))))}c.isMDXComponent=!0}}]);