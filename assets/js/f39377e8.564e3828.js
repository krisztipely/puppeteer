"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const p={sidebar_label:"Page.on"},o="Page.on() method",i={unversionedId:"api/puppeteer.page.on",id:"version-16.1.0/api/puppeteer.page.on",title:"Page.on() method",description:"Listen to page events.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.page.on.md",sourceDirName:"api",slug:"/api/puppeteer.page.on",permalink:"/api/puppeteer.page.on",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Page.on"},sidebar:"sidebar",previous:{title:"Page.off",permalink:"/api/puppeteer.page.off"},next:{title:"Page.once",permalink:"/api/puppeteer.page.once"}},l={},c=[{value:"Parameters",id:"parameters",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageon-method"},"Page.on() method"),(0,a.kt)("p",null,"Listen to page events."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method exists to define event typings and handle proper wireup of cooperative request interception. Actual event listening and dispatching is delegated to ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.eventemitter"},"EventEmitter"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  on<K extends keyof PageEventObject>(\n    eventName: K,\n    handler: (event: PageEventObject[K]) => void\n  ): EventEmitter;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventName"),(0,a.kt)("td",{parentName:"tr",align:null},"K"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handler"),(0,a.kt)("td",{parentName:"tr",align:null},"(event: ",(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.pageeventobject"},"PageEventObject"),"[","K","]",") =",">"," void"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.eventemitter"},"EventEmitter")))}s.isMDXComponent=!0}}]);