"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(r),b=n,k=u["".concat(p,".").concat(b)]||u[b]||d[b]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_label:"API"},s="@puppeteer/browsers",p={unversionedId:"browsers-api/index",id:"version-21.3.0/browsers-api/index",title:"@puppeteer/browsers",description:"Manage and launch browsers/drivers from a CLI or programmatically.",source:"@site/versioned_docs/version-21.3.0/browsers-api/index.md",sourceDirName:"browsers-api",slug:"/browsers-api/",permalink:"/browsers-api/",draft:!1,tags:[],version:"21.3.0",frontMatter:{sidebar_label:"API"},sidebar:"browsersApi",next:{title:"launch",permalink:"/browsers-api/browsers.launch"}},i={},m=[{value:"CLI",id:"cli",level:2},{value:"Known limitations",id:"known-limitations",level:2},{value:"API",id:"api",level:2},{value:"Classes",id:"classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}],d={toc:m};function u(e){var{components:t}=e,r=l(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"puppeteerbrowsers"}),"@puppeteer/browsers"),(0,a.kt)("p",null,"Manage and launch browsers/drivers from a CLI or programmatically."),(0,a.kt)("h2",n({},{id:"cli"}),"CLI"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," to run the CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"npx @puppeteer/browsers --help\n")),(0,a.kt)("p",null,"CLI help will provide all documentation you need to use the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-bash"}),"npx @puppeteer/browsers --help # help for all commands\nnpx @puppeteer/browsers install --help # help for the install command\nnpx @puppeteer/browsers launch --help # help for the launch command\n")),(0,a.kt)("h2",n({},{id:"known-limitations"}),"Known limitations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We support installing and running Firefox, Chrome and Chromium. The ",(0,a.kt)("inlineCode",{parentName:"li"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"beta"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"canary"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"stable")," keywords are only supported for the install command. For the ",(0,a.kt)("inlineCode",{parentName:"li"},"launch")," command you need to specify an exact build ID. The build ID is provided by the ",(0,a.kt)("inlineCode",{parentName:"li"},"install")," command (see ",(0,a.kt)("inlineCode",{parentName:"li"},"npx @puppeteer/browsers install --help")," for the format)."),(0,a.kt)("li",{parentName:"ol"},"Launching the system browsers is only possible for Chrome/Chromium.")),(0,a.kt)("h2",n({},{id:"api"}),"API"),(0,a.kt)("p",null,"The programmatic API allows installing and launching browsers from your code. See the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," folder for examples on how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"canInstall"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"launch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"computeExecutablePath"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"computeSystemExecutablePath")," and other methods."),(0,a.kt)("h2",n({},{id:"classes"}),"Classes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Class"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.cli"}),"CLI")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.installedbrowser"}),"InstalledBrowser")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.process"}),"Process")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.timeouterror"}),"TimeoutError")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",n({},{id:"enumerations"}),"Enumerations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Enumeration"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.browser"}),"Browser")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Supported browsers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.browserplatform"}),"BrowserPlatform")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Platform names used to identify a OS platfrom x architecture combination in the way that is relevant for the browser download.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.chromereleasechannel"}),"ChromeReleaseChannel")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",n({},{id:"functions"}),"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.candownload"}),"canDownload(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.computeexecutablepath"}),"computeExecutablePath(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.computesystemexecutablepath"}),"computeSystemExecutablePath(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.createprofile"}),"createProfile(browser, opts)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.detectbrowserplatform"}),"detectBrowserPlatform()")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.getinstalledbrowsers"}),"getInstalledBrowsers(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Returns metadata about browsers installed in the cache directory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.install"}),"install(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.install_1"}),"install(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.launch"}),"launch(opts)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.makeprogresscallback"}),"makeProgressCallback(browser, buildId)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.resolvebuildid"}),"resolveBuildId(browser, platform, tag)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.uninstall"}),"uninstall(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",n({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interface"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.getinstalledbrowsersoptions"}),"GetInstalledBrowsersOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.installoptions"}),"InstallOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.launchoptions"}),"LaunchOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.options"}),"Options")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.profileoptions"}),"ProfileOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.systemoptions"}),"SystemOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.uninstalloptions"}),"UninstallOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",n({},{id:"variables"}),"Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.cdp_websocket_endpoint_regex"}),"CDP_WEBSOCKET_ENDPOINT_REGEX")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/browsers-api/browsers.webdriver_bidi_websocket_endpoint_regex"}),"WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))))}u.isMDXComponent=!0}}]);