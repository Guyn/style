import{i as e,c as t,a,b as n,h as s,_ as o,d as i,e as l,f as c,g as r,E as p,r as u,m as f,n as d,j as m,k as g,l as h,w as _,o as k,p as v,q as E,s as w,t as y,u as A,v as D,F as b,x as S}from"./runtime-core.esm-bundler-9a3744ec.js";const M="http://www.w3.org/2000/svg",R="undefined"!=typeof document?document:null;let N,C;const P={insert:(e,t,a)=>{a?t.insertBefore(e,a):t.appendChild(e)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a)=>t?R.createElementNS(M,e):R.createElement(e,a?{is:a}:void 0),createText:e=>R.createTextNode(e),createComment:e=>R.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>R.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode:e=>e.cloneNode(!0),insertStaticContent(e,t,a,n){const s=n?C||(C=R.createElementNS(M,"svg")):N||(N=R.createElement("div"));s.innerHTML=e;const o=s.children[0];return P.insert(o,t,a),o}};const x=/\s*!important$/;function T(e,t,a){if(t.startsWith("--"))e.setProperty(t,a);else{const n=function(e,t){const a=q[t];if(a)return a;let n=o(t);if("filter"!==n&&n in e)return q[t]=n;n=i(n);for(let a=0;a<L.length;a++){const s=L[a]+n;if(s in e)return q[t]=s}return t}(e,t);x.test(a)?e.setProperty(s(n),a.replace(x,""),"important"):e[n]=a}}const L=["Webkit","Moz","ms"],q={};const U="http://www.w3.org/1999/xlink";let j=Date.now;"undefined"!=typeof document&&j()>document.createEvent("Event").timeStamp&&(j=()=>performance.now());let O=0;const F=Promise.resolve(),G=()=>{O=0},I=()=>O||(F.then(G),O=j());function V(e,t,a,n){e.addEventListener(t,a,n)}function W(e,t,a,n){e.removeEventListener(t,a,n)}function H(e,t){const a=e=>{e.timeStamp>=a.lastUpdated-1&&c(function(e,t){if(r(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}(e,a.value),t,5,[e])};return a.value=e,e.invoker=a,a.lastUpdated=I(),a}const $=/^on[a-z]/,J={patchProp:(t,s,o,i,c=!1,r,u,f,d)=>{switch(s){case"class":!function(e,t,a){if(null==t&&(t=""),a)e.setAttribute("class",t);else{const a=e._vtc;a&&(t=(t?[t,...a]:[...a]).join(" ")),e.className=t}}(t,i,c);break;case"style":!function(t,a,n){const s=t.style;if(n)if(e(n))s.cssText=n;else{for(const e in n)T(s,e,n[e]);if(a&&!e(a))for(const e in a)n[e]||T(s,e,"")}else t.removeAttribute("style")}(t,o,i);break;default:a(s)?s.startsWith("onUpdate:")||function(e,t,a,n,s=null){const o=t.slice(2).toLowerCase(),i=a&&"options"in a&&a.options,l=n&&"options"in n&&n.options,c=a&&a.invoker,r=n&&"handler"in n?n.handler:n;if(i||l){const t=i||p,a=l||p;if(t.capture!==a.capture||t.passive!==a.passive||t.once!==a.once){if(c&&W(e,o,c,t),n&&r){const t=H(r,s);n.invoker=t,V(e,o,t,a)}return}}n&&r?c?(a.invoker=null,c.value=r,n.invoker=c,c.lastUpdated=I()):V(e,o,H(r,s),l||void 0):c&&W(e,o,c,i||void 0)}(t,s,o,i,u):(c?"innerHTML"===s||s in t&&$.test(s)&&n(i):s in t&&(!$.test(s)||!e(i)))?function(e,t,a,n,s,o,i){if("innerHTML"===t||"textContent"===t)return n&&i(n,s,o),void(e[t]=null==a?"":a);if("value"===t&&"PROGRESS"!==e.tagName)return e._value=a,void(e.value=null==a?"":a);if(""===a&&"boolean"==typeof e[t])e[t]=!0;else if(null==a&&"string"==typeof e[t])e[t]="";else try{e[t]=a}catch(e){}}(t,s,i,r,u,f,d):("true-value"===s?t._trueValue=i:"false-value"===s&&(t._falseValue=i),function(e,t,a,n){if(n&&t.startsWith("xlink:"))null==a?e.removeAttributeNS(U,t.slice(6,t.length)):e.setAttributeNS(U,t,a);else{const n=l(t);null==a||n&&!1===a?e.removeAttribute(t):e.setAttribute(t,n?"":a)}}(t,s,i,c))}},...P};let z,B=!1;const Y=(...a)=>{const n=(z=B?z:t(J),B=!0,z).createApp(...a),{mount:s}=n;return n.mount=t=>{const a=function(t){if(e(t)){return document.querySelector(t)}return t}(t);if(a)return s(a,!0)},n};const K=Symbol();function Q(){return function(){const e=m(K);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}const X=g((Z='{"title":"VitePress","description":"A VitePress site","base":"/","head":[],"themeConfig":{}}',h(JSON.parse(Z))));var Z;function ee(e){const t=Array.from(document.querySelectorAll("meta"));let a=!0;const n=e=>{a?a=!1:(t.forEach(e=>document.head.removeChild(e)),t.length=0,e&&e.length&&e.forEach(e=>{const a=function([e,t,a]){const n=document.createElement(e);for(const e in t)n.setAttribute(e,t[e]);a&&(n.innerHTML=a);return n}(e);document.head.appendChild(a),t.push(a)}))};_(()=>{const t=e.value,a=X.value,s=t&&t.title;document.title=(s?s+" | ":"")+a.title,n([["meta",{name:"description",content:a.description}],...a.head,...t&&t.frontmatter.head||[]])})}const te=Symbol(),ae={setup(){const e=Q();return()=>e.contentComponent?k(e.contentComponent):null}},ne={class:"navigation"},se=w('<ul class="navigation__list"><li class="navigation__item"><a class="navigation__link" href="/docs/get-started">Get Started</a></li><li class="navigation__item"><a class="navigation__link" href="/docs/installation">Installation</a></li><li class="navigation__item"><a class="navigation__link" href="/#modules">Modules</a></li></ul>');const oe={render:function(e,t){return v(),E("nav",ne,[se])}},ie={class:"packages",id:"modules"},le=w('<ul class="packages__list"><li class="packages__item"><a class="packages__link" href="/packages/animate/README">Animate</a></li><li class="packages__item"><a class="packages__link" href="/packages/color/README">Color</a></li><li class="packages__item"><a class="packages__link" href="/packages/custom/README">Custom</a></li><li class="packages__item"><a class="packages__link" href="/packages/debug/README">Debug</a></li><li class="packages__item"><a class="packages__link" href="/packages/default/README">Default</a></li><li class="packages__item"><a class="packages__link" href="/packages/ease-gradient/README"> Ease Gradient </a></li><li class="packages__item"><a class="packages__link" href="/packages/animate/README">Forms</a></li><li class="packages__item"><a class="packages__link" href="/packages/grid/README">Grid</a></li><li class="packages__item"><a class="packages__link" href="/packages/math/README">Math</a></li><li class="packages__item"><a class="packages__link" href="/packages/menu/README">Menu</a></li><li class="packages__item"><a class="packages__link" href="/packages/output/README">Output</a></li><li class="packages__item"><a class="packages__link" href="/packages/patterns/README">Patterns</a></li><li class="packages__item"><a class="packages__link" href="/packages/reset/README">Reset</a></li><li class="packages__item"><a class="packages__link" href="/packages/settings/README">Settings</a></li><li class="packages__item"><a class="packages__link" href="/packages/style/README">Style</a></li><li class="packages__item"><a class="packages__link" href="/packages/typography/README"> Typography </a></li><li class="packages__item"><a class="packages__link" href="/packages/utilities/README"> Utilities </a></li></ul>');const ce={render:function(e,t){return v(),E("nav",ie,[le])}};var re={data:()=>({version:"0.1.0"}),components:{Navigation:oe,Packages:ce}};const pe={id:"logo"},ue=y("a",{href:"/docs/get-started"},"Guyn",-1),fe={class:"version"};re.render=function(e,t){const a=S("Navigation"),n=S("Content"),s=S("Packages");return v(),E(b,null,[y("h1",pe,[ue,y("span",fe,A(e.version),1)]),y(a),y(n,{class:"content"}),D(" make sure to include markdown outlet "),y(s)],64)};var de={Layout:re,NotFound:()=>"custom 404",enhanceApp({app:e,router:t,siteData:a}){}};const me="undefined"!=typeof window,ge=de.NotFound||(()=>"404 Not Found");function he(){const e=g();me&&ee(e);const t=function(e,t){const a=u({path:"/",contentComponent:null}),n="undefined"!=typeof window;function s(e){return e=e||(n?location.href:"/"),n&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),o(e)}async function o(s,o=0){const i=new URL(s,"http://vuejs.org"),l=a.path=i.pathname;try{let t=e(a);if("then"in t&&"function"==typeof t.then&&(t=await t),a.path===l){if(!t)throw new Error("Invalid route component: "+t);if(a.contentComponent=f(t),n){if(await d(),i.hash&&!o){const e=document.querySelector(i.hash);e&&(o=e.offsetTop)}window.scrollTo({left:0,top:o,behavior:"auto"})}}}catch(e){e.message.match(/fetch/)||console.error(e),a.path===l&&(a.contentComponent=t?f(t):null)}}return n&&(window.addEventListener("click",e=>{if("A"===e.target.tagName){const{href:t,target:a}=e.target,n=new URL(t),o=window.location;"_blank"!==a&&n.protocol===o.protocol&&n.hostname===o.hostname&&(n.pathname===o.pathname?n.hash!==o.hash&&(e.preventDefault(),window.scrollTo({left:0,top:e.target.offsetTop,behavior:"smooth"})):(e.preventDefault(),s(t)))}},{capture:!0}),window.addEventListener("popstate",e=>{o(location.href,e.state&&e.state.scrollPosition||0)})),{route:a,go:s}}(t=>{let a=t.path.replace(/\.html$/,"");if(a.endsWith("/")&&(a+="index"),a="./"+a.slice(1).replace(/\//g,"_")+".md.js",me)return import(a).then(t=>(t.__pageData&&(e.value=h(JSON.parse(t.__pageData))),t.default));{const t=require(a);return e.value=JSON.parse(t.__pageData),t.default}},ge),a=Y(de.Layout);return a.provide(K,t),a.provide(te,e),a.component("Content",ae),a.component("Debug",()=>null),Object.defineProperties(a.config.globalProperties,{$site:{get:()=>X.value},$page:{get:()=>e.value}}),de.enhanceApp&&de.enhanceApp({app:a,router:t,siteData:X}),{app:a,router:t}}if(me){const{app:e,router:t}=he();t.go().then(()=>{e.mount("#app")})}export{he as createApp};