(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aaa39789"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"8e224470"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"37ed":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"63fb":function(e,t,n){"use strict";var r=n("efd1"),a=n.n(r);a.a},"9c8d":function(e,t,n){"use strict";var r=n("37ed"),a=n.n(r);a.a},a945:function(e,t,n){"use strict";var r=n("b40b"),a=n.n(r);a.a},afc4:function(e,t,n){"use strict";var r=n("f32f"),a=n.n(r);a.a},b40b:function(e,t,n){},b761:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"company-list"},[n("li",[e._v(e._s(e.filter))]),e._l(e.companies,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/company/"+t.id}},[e._v(e._s(t.name))])],1)}))],2)},a=[],o=n("d225"),i=n("b0b4"),c=n("308d"),u=n("6bb5"),s=n("4e2b"),l=n("9ab4"),f=n("60a3"),p=function(e){function t(){return Object(o["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),Object(i["a"])(t,[{key:"companies",get:function(){return this.$store.state.companies}},{key:"filteredCompanies",get:function(){var e=this;return this.companies.filter((function(t){return"string"!==typeof e.filter||!e.filter.length||-1!==t.name.toLowerCase().indexOf(e.filter)}))}}]),t}(f["c"]);Object(l["a"])([Object(f["b"])({default:""})],p.prototype,"filter",void 0),p=Object(l["a"])([f["a"]],p);var d=p,b=d,h=(n("9c8d"),n("2877")),m=Object(h["a"])(b,r,a,!1,null,"5a0eccac",null);t["a"]=m.exports},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"content"}},[n("router-view")],1),n("NavBarFooter")],1)},o=[],i=n("60a3"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[e.titleVisible?n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("DatE-IT")])],1):e._e(),e.searchQueryVisible?n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]):e._e(),n("a",{attrs:{id:"hamburger","aria-expanded":e.toggledMenubar},on:{click:e.toggleMenu}},[e._v("HAMBURGER")]),n("ul",{style:e.menubarStyle},[n("li",[n("router-link",{attrs:{to:"/map"}},[e._v("Map")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})])])])},u=[],s=n("d225"),l=n("b0b4"),f=n("308d"),p=n("6bb5"),d=n("4e2b"),b=n("9ab4"),h=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.searchQuery="Hej",e.menubarStyle={display:"none"},e.toggledMenubar=!1,e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"toggleMenu",value:function(){this.toggledMenubar=!this.toggledMenubar,this.menubarStyle.display=this.toggledMenubar?"block":"none"}}]),t}(i["c"]);Object(b["a"])([Object(i["b"])()],h.prototype,"titleVisible",void 0),Object(b["a"])([Object(i["b"])()],h.prototype,"searchQueryVisible",void 0),h=Object(b["a"])([i["a"]],h);var m=h,v=m,y=(n("afc4"),n("2877")),g=Object(y["a"])(v,c,u,!1,null,"e851f568",null),j=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/map"}},[e._v("Map")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])},_=[],w=function(e){function t(){return Object(s["a"])(this,t),Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(i["c"]);w=Object(b["a"])([i["a"]],w);var k=w,x=k,E=(n("63fb"),Object(y["a"])(x,O,_,!1,null,"2a822a79",null)),C=E.exports,Q=i["c"].extend({components:{NavBar:j,NavBarFooter:C},beforeMount:function(){this.$store.dispatch("fetchAndInsertData")}}),S=Q,A=(n("5c0b"),Object(y["a"])(S,a,o,!1,null,null,null)),M=A.exports,N=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("DatE-IT")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{placeholder:"Search for a company",type:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._m(0),n("div",[n("CompanyList",{attrs:{filter:e.searchQuery}})],1)])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"flexy"},[n("li",{staticClass:"lefty"},[e._v("Program:")]),n("li",[n("label",[n("input",{attrs:{type:"checkbox"}}),e._v("Computer")])]),n("li",[n("label",[n("input",{attrs:{type:"checkbox"}}),e._v("Electrical")])]),n("li",[n("label",[n("input",{attrs:{type:"checkbox"}}),e._v("IT")])])])])}],$=n("b761"),B=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.searchQuery="",e}return Object(d["a"])(t,e),t}(i["c"]);B=Object(b["a"])([Object(i["a"])({components:{CompanyList:$["a"]}})],B);var L=B,D=L,I=(n("a945"),Object(y["a"])(D,P,T,!1,null,"18d2d6be",null)),F=I.exports;r["a"].use(N["a"]);var H=new N["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/map",name:"map",component:function(){return n.e("about").then(n.bind(null,"4bb4"))}},{path:"/companies",name:"companies",component:function(){return n.e("about").then(n.bind(null,"0f93"))}},{path:"/company/:id",name:"company",component:function(){return n.e("about").then(n.bind(null,"8799"))}}]}),R=(n("ac6a"),n("96cf"),n("3b8d")),U=n("2f62");r["a"].use(U["a"]);var V=new U["a"].Store({state:{companies:Array()},mutations:{setCompanies:function(e,t){e.companies=t}},actions:{fetchAndInsertData:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/data.json",{method:"GET",cache:"default"});case 2:return n=e.sent,r=Array(),e.next=6,n.json();case 6:a=e.sent,a.companies.forEach((function(e){var t={id:e.id,name:e.name,imageUrl:e.imageUrl,divisions:e.divisions,offerings:e.offerings,description:e.description,fact:e.fact,startYear:e.startYear,employeesWorldwide:e.employeesWorldwide,employeesSweden:e.employeesSweden,website:e.website,contactEmail:e.contactEmail,locations:e.locations,booth:e.booth};r.push(t)})),t.commit("setCompanies",r);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}}),q=n("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:H,store:V,render:function(e){return e(M)}}).$mount("#app")},e332:function(e,t,n){},efd1:function(e,t,n){},f32f:function(e,t,n){}});
//# sourceMappingURL=app.9a0dc96d.js.map