(function(e){function t(t){for(var r,a,i=t[0],o=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c={app:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-829599a2":"d2ac9c5e","chunk-af9b0602":"c840cb6f","chunk-cdd27d7c":"f9b0f6fd"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-829599a2":1,"chunk-af9b0602":1,"chunk-cdd27d7c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-829599a2":"d4fa9064","chunk-af9b0602":"0a25b6f5","chunk-cdd27d7c":"8a292d04"}[e]+".css",c=o.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2e03":function(e,t,n){"use strict";n("b993")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",class:{"app--sidebar-open":e.sidebarIsOpen},attrs:{id:"app"}},[n("the-header",{staticClass:"app__header"}),n("b-container",{staticClass:"app__container",attrs:{fluid:""}},[n("b-row",{staticClass:"app__row"},[n("b-col",{staticClass:"app__sidebar",attrs:{xl:"2",lg:"3",md:"4",sm:"4",cols:"6"}},[n("the-sidebar")],1),n("b-col",{attrs:{"offset-xl":"2","offset-lg":"3","offset-md":"4"}},[n("the-page",{staticClass:"app__page"})],1)],1)],1)],1)},s=[],i=n("5530"),o=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("b-container",{staticClass:"header__container",attrs:{fluid:""}},[n("b-row",{staticClass:"header__row"},[n("b-col",[n("header-menu")],1),n("b-col",[n("header-theme-switcher",{staticClass:"header__theme-switcher"})],1)],1)],1)],1)},l=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"header-menu",attrs:{id:"menu"},on:{click:e.toggleSidebar}},[r("img",{staticClass:"header-menu__img",attrs:{src:n("869f"),alt:"Menu"}})])},f=[],b={name:"HeaderMenu",methods:Object(i["a"])({},Object(o["c"])(["toggleSidebar"]))},h=b,p=(n("8d21"),n("2877")),m=Object(p["a"])(h,d,f,!1,null,"56f2cf0f",null),v=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"header-theme-switcher",attrs:{id:"theme-switcher"},on:{click:e.switchTheme}},[e._v(" Сменить тему ")])},_=[],k={name:"HeaderThemeSwitcher",methods:{switchTheme:function(){var e,t=document.documentElement,n="data-dark-theme";e="true"===t.getAttribute(n)?"false":"true",t.setAttribute(n,e),localStorage.darkTheme=e}}},O=k,w=(n("2e03"),Object(p["a"])(O,g,_,!1,null,"ee842996",null)),y=w.exports,j={name:"TheHeader",components:{HeaderThemeSwitcher:y,HeaderMenu:v}},S=j,C=(n("c69d"),Object(p["a"])(S,u,l,!1,null,"3ee5a4b4",null)),x=C.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],staticClass:"sidebar"},[n("sidebar-links")],1)},E=[],P=n("c28b"),A=n.n(P),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidebar-links"},[n("li",[n("sidebar-link",{attrs:{to:"/",exact:""}},[e._v("Главная")])],1),n("li",[n("sidebar-link",{attrs:{to:"/bus"}},[e._v("Шина")])],1),n("li",[n("sidebar-link",{attrs:{to:"/cpu"}},[e._v("Процессор")])],1)])},L=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"sidebar-link",attrs:{to:e.to,exact:e.exact,"active-class":"sidebar-link--active"}},[e._t("default")],2)},H=[],M={name:"SidebarLink",props:{to:String,exact:Boolean}},N=M,B=(n("b38d"),Object(p["a"])(N,$,H,!1,null,"be11001e",null)),q=B.exports,D={name:"SidebarLinks",components:{SidebarLink:q}},J=D,F=(n("a011"),Object(p["a"])(J,I,L,!1,null,"0677075a",null)),K=F.exports,U={name:"TheSidebar",directives:{clickOutside:A.a.directive},components:{SidebarLinks:K},methods:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["closeSidebar"])),{},{clickOutside:function(e){var t=e.target;"menu"!==t.id&&"menu"!==t.parentElement.id&&"theme-switcher"!==t.id&&this.closeSidebar()}})},z=U,G=Object(p["a"])(z,T,E,!1,null,"16c84c42",null),Q=G.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"page"},[n("router-view")],1)},V=[],W={name:"ThePage"},X=W,Y=(n("d4f0"),Object(p["a"])(X,R,V,!1,null,"ae9d57a6",null)),Z=Y.exports,ee={components:{TheHeader:x,TheSidebar:Q,ThePage:Z},computed:Object(i["a"])({},Object(o["b"])(["sidebarIsOpen"])),methods:Object(i["a"])({},Object(o["c"])(["closeSidebar"])),mounted:function(){Object.hasOwnProperty.call(localStorage,"darkTheme")&&document.documentElement.setAttribute("data-dark-theme",localStorage.darkTheme)}},te=ee,ne=(n("034f"),Object(p["a"])(te,c,s,!1,null,null,null)),re=ne.exports,ae=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(ae["a"]);var ce=[{path:"/",component:function(){return n.e("chunk-cdd27d7c").then(n.bind(null,"bb51"))}},{path:"/bus",component:function(){return n.e("chunk-af9b0602").then(n.bind(null,"f3b3"))}},{path:"/cpu",component:function(){return n.e("chunk-829599a2").then(n.bind(null,"f85b"))}}],se=new ae["a"]({mode:"history",base:"/",routes:ce}),ie=se;r["default"].use(o["a"]);var oe=new o["a"].Store({state:{sidebarIsOpen:!1},mutations:{toggleSidebar:function(e){e.sidebarIsOpen=!e.sidebarIsOpen},closeSidebar:function(e){e.sidebarIsOpen=!1}},getters:{sidebarIsOpen:function(e){return e.sidebarIsOpen}},actions:{},modules:{}});n("db39"),n("f5df1"),n("2dd8"),n("f9e3");r["default"].config.productionTip=!1,r["default"].use(a["a"]),new r["default"]({router:ie,store:oe,render:function(e){return e(re)}}).$mount("#app")},"85ec":function(e,t,n){},"869f":function(e,t,n){e.exports=n.p+"img/menu.53071549.svg"},"8d21":function(e,t,n){"use strict";n("e5fd")},"94a5":function(e,t,n){},a011:function(e,t,n){"use strict";n("bed3")},b1c1:function(e,t,n){},b38d:function(e,t,n){"use strict";n("94a5")},b993:function(e,t,n){},bed3:function(e,t,n){},c69d:function(e,t,n){"use strict";n("fd98")},d4f0:function(e,t,n){"use strict";n("b1c1")},db39:function(e,t,n){},e5fd:function(e,t,n){},fd98:function(e,t,n){}});
//# sourceMappingURL=app.c2b680e2.js.map