(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fa1c9085"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"1a74d582"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"63fb":function(e,t,r){"use strict";var n=r("efd1"),a=r.n(n);a.a},"7ad0":function(e,t,r){},"84fa":function(e,t,r){"use strict";var n=r("7ad0"),a=r.n(n);a.a},afc4:function(e,t,r){"use strict";var n=r("f32f"),a=r.n(n);a.a},b573:function(e,t,r){},b761:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"company-list"},e._l(e.filteredCompanies,(function(t){return r("li",{key:t.id},[r("router-link",{attrs:{to:"/company/"+t.id}},[e._v(e._s(t.name))])],1)})),0)},a=[],o=(r("6762"),r("2fdb"),r("d225")),c=r("b0b4"),i=r("308d"),s=r("6bb5"),u=r("4e2b"),l=r("9ab4"),f=r("60a3"),p=function(e){function t(){return Object(o["a"])(this,t),Object(i["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"companies",get:function(){return this.$store.state.companies}},{key:"filteredCompanies",get:function(){var e=this;return this.companies.filter((function(t){return("string"!==typeof e.filter||0===e.filter.length||-1!==t.name.toLowerCase().indexOf(e.filter.toLowerCase()))&&(!(e.computer&&!t.divisions.includes("D"))&&(!(e.software&&!t.divisions.includes("IT"))&&!(e.electrical&&!t.divisions.includes("E"))))}))}}]),t}(f["c"]);Object(l["a"])([Object(f["b"])({default:""})],p.prototype,"filter",void 0),Object(l["a"])([Object(f["b"])({default:!1})],p.prototype,"computer",void 0),Object(l["a"])([Object(f["b"])({default:!1})],p.prototype,"software",void 0),Object(l["a"])([Object(f["b"])({default:!1})],p.prototype,"electrical",void 0),p=Object(l["a"])([f["a"]],p);var d=p,m=d,b=(r("84fa"),r("2877")),h=Object(b["a"])(m,n,a,!1,null,"cd0a6706",null);t["a"]=h.exports},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"content"}},[r("router-view")],1),r("NavBarFooter")],1)},o=[],c=r("60a3"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[e.titleVisible?r("h1",[r("router-link",{attrs:{to:"/"}},[e._v("DatE-IT")])],1):e._e(),e.searchQueryVisible?r("form",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]):e._e(),r("a",{attrs:{id:"hamburger","aria-expanded":e.toggledMenubar},on:{click:e.toggleMenu}},[e._v("HAMBURGER")]),r("ul",{style:e.menubarStyle},[r("li",[r("router-link",{attrs:{to:"/map"}},[e._v("Map")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("li",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})])])])},s=[],u=r("d225"),l=r("b0b4"),f=r("308d"),p=r("6bb5"),d=r("4e2b"),m=r("9ab4"),b=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.searchQuery="Hej",e.menubarStyle={display:"none"},e.toggledMenubar=!1,e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"toggleMenu",value:function(){this.toggledMenubar=!this.toggledMenubar,this.menubarStyle.display=this.toggledMenubar?"block":"none"}}]),t}(c["c"]);Object(m["a"])([Object(c["b"])()],b.prototype,"titleVisible",void 0),Object(m["a"])([Object(c["b"])()],b.prototype,"searchQueryVisible",void 0),b=Object(m["a"])([c["a"]],b);var h=b,v=h,y=(r("afc4"),r("2877")),g=Object(y["a"])(v,i,s,!1,null,"e851f568",null),j=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("li",[r("router-link",{attrs:{to:"/map"}},[e._v("Map")])],1),r("li",[r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])},O=[],_=function(e){function t(){return Object(u["a"])(this,t),Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(c["c"]);_=Object(m["a"])([c["a"]],_);var k=_,x=k,A=(r("63fb"),Object(y["a"])(x,w,O,!1,null,"2a822a79",null)),E=A.exports,C=c["c"].extend({components:{NavBar:j,NavBarFooter:E},beforeMount:function(){this.$store.dispatch("fetchAndInsertData")}}),N=C,P=(r("5c0b"),Object(y["a"])(N,a,o,!1,null,null,null)),Q=P.exports,S=r("8c4f"),M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("DatE-IT")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{placeholder:"Search for a company",type:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),r("div",[r("ul",{staticClass:"flexy"},[r("li",{staticClass:"lefty"},[e._v("Program:")]),r("li",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.computer,expression:"computer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.computer)?e._i(e.computer,null)>-1:e.computer},on:{change:function(t){var r=e.computer,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=null,c=e._i(r,o);n.checked?c<0&&(e.computer=r.concat([o])):c>-1&&(e.computer=r.slice(0,c).concat(r.slice(c+1)))}else e.computer=a}}}),e._v("Computer")])]),r("li",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.electrical,expression:"electrical"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.electrical)?e._i(e.electrical,null)>-1:e.electrical},on:{change:function(t){var r=e.electrical,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=null,c=e._i(r,o);n.checked?c<0&&(e.electrical=r.concat([o])):c>-1&&(e.electrical=r.slice(0,c).concat(r.slice(c+1)))}else e.electrical=a}}}),e._v("Electrical")])]),r("li",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.software,expression:"software"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.software)?e._i(e.software,null)>-1:e.software},on:{change:function(t){var r=e.software,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=null,c=e._i(r,o);n.checked?c<0&&(e.software=r.concat([o])):c>-1&&(e.software=r.slice(0,c).concat(r.slice(c+1)))}else e.software=a}}}),e._v("IT")])])])]),r("div",[r("CompanyList",{attrs:{filter:e.searchQuery,computer:e.computer,electrical:e.electrical,software:e.software}})],1)])},T=[],L=r("b761"),B=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.searchQuery="",e.computer=!1,e.electrical=!1,e.software=!1,e}return Object(d["a"])(t,e),t}(c["c"]);B=Object(m["a"])([Object(c["a"])({components:{CompanyList:L["a"]}})],B);var $=B,D=$,I=(r("f35b"),Object(y["a"])(D,M,T,!1,null,"34b76c36",null)),F=I.exports;n["a"].use(S["a"]);var H=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/map",name:"map",component:function(){return r.e("about").then(r.bind(null,"4bb4"))}},{path:"/companies",name:"companies",component:function(){return r.e("about").then(r.bind(null,"0f93"))}},{path:"/company/:id",name:"company",component:function(){return r.e("about").then(r.bind(null,"8799"))}}]}),R=(r("ac6a"),r("96cf"),r("3b8d")),U=r("2f62");n["a"].use(U["a"]);var V=new U["a"].Store({state:{companies:Array()},mutations:{setCompanies:function(e,t){e.companies=t}},actions:{fetchAndInsertData:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/data.json",{method:"GET",cache:"default"});case 2:return r=e.sent,n=Array(),e.next=6,r.json();case 6:a=e.sent,a.companies.forEach((function(e){var t={id:e.id,name:e.name,imageUrl:e.imageUrl,divisions:e.divisions,offerings:e.offerings,description:e.description,fact:e.fact,startYear:e.startYear,employeesWorldwide:e.employeesWorldwide,employeesSweden:e.employeesSweden,website:e.website,contactEmail:e.contactEmail,locations:e.locations,booth:e.booth};n.push(t)})),t.commit("setCompanies",n);case 9:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}}),q=r("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:H,store:V,render:function(e){return e(Q)}}).$mount("#app")},e332:function(e,t,r){},efd1:function(e,t,r){},f32f:function(e,t,r){},f35b:function(e,t,r){"use strict";var n=r("b573"),a=r.n(n);a.a}});
//# sourceMappingURL=app.965e1645.js.map