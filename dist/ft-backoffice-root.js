System.register(["single-spa"],(function(t,e){var r={};return{setters:[function(t){r.registerApplication=t.registerApplication,r.start=t.start}],execute:function(){t((()=>{var t={982:(t,e,r)=>{const o=r(720).R;e.s=function(t){if(t||(t=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=o(r.y.meta.url,t)}},720:(t,e,r)=>{e.R=function(t,e){const r=document.createElement("a");r.href=t;const o="/"===r.pathname[0]?r.pathname:"/"+r.pathname;let n=0,i=o.length;for(;n!==e&&i>=0;)"/"===o[--i]&&n++;if(n!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+n+") in the URL path "+t);const s=o.slice(0,i+1);return r.protocol+"//"+r.host+s};Number.isInteger},589:t=>{"use strict";t.exports=r}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.y=e,n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="";var i={};return(0,n(982).s)(1),(()=>{"use strict";n.r(i);var t=n(589);(0,t.registerApplication)({name:"@ft/backoffice-login",app:function(){return import("http://localhost:3002/src/main.js")},activeWhen:function(t){return"/mf-backoffice-root/login"===t.pathname}}),(0,t.start)({urlRerouteOnly:!0})})(),i})())}}}));
//# sourceMappingURL=ft-backoffice-root.js.map