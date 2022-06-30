"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||p;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<p;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},19063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const p={},o="Keyboard.down() method",i={unversionedId:"api/puppeteer.keyboard.down",id:"api/puppeteer.keyboard.down",title:"Keyboard.down() method",description:"Dispatches a keydown event.",source:"@site/../docs/api/puppeteer.keyboard.down.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.down",permalink:"/api/puppeteer.keyboard.down",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Keyboard class",permalink:"/api/puppeteer.keyboard"},next:{title:"Keyboard.press() method",permalink:"/api/puppeteer.keyboard.press"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyboarddown-method"},"Keyboard.down() method"),(0,a.kt)("p",null,"Dispatches a ",(0,a.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"down(key: KeyInput, options?: {\n        text?: string;\n    }): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.keyinput"},"KeyInput")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of key to press, such as ",(0,a.kt)("code",null,"ArrowLeft"),". See ",(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ text?: string; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," An object of options. Accepts text which, if specified, generates an input event with this text.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",(0,a.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"input")," event will also generated. The ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated. If ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.keyboard.up"},"Keyboard.up()"),"."),(0,a.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.keyboard.down"},"Keyboard.down()")," will have ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"},"repeat")," set to true. To release the key, use ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.keyboard.up"},"Keyboard.up()"),"."),(0,a.kt)("p",null,"Modifier keys DO influence ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.keyboard.down"},"Keyboard.down()"),". Holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}u.isMDXComponent=!0}}]);