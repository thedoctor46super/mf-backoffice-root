System.register(["single-spa"],(function(t,e){var r={};return{setters:[function(t){r.registerApplication=t.registerApplication,r.start=t.start}],execute:function(){t((()=>{var t={982:(t,e,r)=>{const n=r(720).R;e.s=function(t){if(t||(t=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,t)}},720:(t,e,r)=>{e.R=function(t,e){const r=document.createElement("a");r.href=t;const n="/"===r.pathname[0]?r.pathname:"/"+r.pathname;let o=0,a=n.length;for(;o!==e&&a>=0;)"/"===n[--a]&&o++;if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+t);const i=n.slice(0,a+1);return r.protocol+"//"+r.host+i};Number.isInteger},589:t=>{"use strict";t.exports=r}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.y=e,o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="";var a={};return(0,o(982).s)(1),(()=>{"use strict";o.r(a);var t=o(589);(0,t.registerApplication)({name:"@ft/backoffice-nav",app:function(){return import("http://localhost:3001/src/main.js")},activeWhen:function(t){return!t.pathname.includes("/login")}}),(0,t.registerApplication)({name:"@ft/backoffice-login",app:function(){return import("http://localhost:3002/src/main.js")},activeWhen:function(t){return"/login"===t.pathname}}),(0,t.registerApplication)({name:"@ft/backoffice-home",app:function(){return import("http://localhost:3003/src/main.js")},activeWhen:function(t){return"/"===t.pathname||"/home"===t.pathname}}),(0,t.registerApplication)({name:"@ft/backoffice-about",app:function(){return import("http://localhost:3004/src/main.js")},activeWhen:function(t){return"/about"===t.pathname}}),(0,t.start)({urlRerouteOnly:!0})})(),a})())}}}));
//# sourceMappingURL=ft-backoffice-root.js.map