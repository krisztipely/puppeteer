"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="CDPSession class",p={unversionedId:"api/puppeteer.cdpsession",id:"api/puppeteer.cdpsession",title:"CDPSession class",description:"The CDPSession instances are used to talk raw Chrome Devtools Protocol.",source:"@site/../docs/api/puppeteer.cdpsession.md",sourceDirName:"api",slug:"/api/puppeteer.cdpsession",permalink:"/api/puppeteer.cdpsession",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"BrowserLaunchArgumentOptions.userDataDir property",permalink:"/api/puppeteer.browserlaunchargumentoptions.userdatadir"},next:{title:"CDPSession.connection() method",permalink:"/api/puppeteer.cdpsession.connection"}},i={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cdpsession-class"},"CDPSession class"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CDPSession extends EventEmitter\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.eventemitter"},"EventEmitter")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Protocol methods can be called with ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.cdpsession.send"},"CDPSession.send()")," method and protocol events can be subscribed to with ",(0,a.kt)("inlineCode",{parentName:"p"},"CDPSession.on")," method."),(0,a.kt)("p",null,"Useful links: ",(0,a.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md"},"Getting Started with DevTools Protocol"),"."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"CDPSession")," class."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const client = await page.target().createCDPSession();\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () =>\n  console.log('Animation created!')\n);\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2,\n});\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.cdpsession.connection"},"connection()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.cdpsession.detach"},"detach()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.cdpsession.id"},"id()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the session's id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/api/puppeteer.cdpsession.send"},"send(method, paramArgs)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);