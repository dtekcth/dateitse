(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a49":function(t,n,a){var e=a("9b43"),r=a("626a"),s=a("4bf8"),c=a("9def"),i=a("cd1c");t.exports=function(t,n){var a=1==t,o=2==t,u=3==t,l=4==t,p=6==t,f=5==t||p,m=n||i;return function(n,i,v){for(var _,d,y=s(n),b=r(y),h=e(i,v,3),g=c(b.length),O=0,j=a?m(n,g):o?m(n,0):void 0;g>O;O++)if((f||O in b)&&(_=b[O],d=h(_,O,y),t))if(a)j[O]=d;else if(d)switch(t){case 3:return!0;case 5:return _;case 6:return O;case 2:j.push(_)}else if(l)return!1;return p?-1:u||l?l:j}}},"0f93":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"companies"},[a("h1",[t._v("Company index page")]),a("CompanyList")],1)},r=[],s=a("d225"),c=a("308d"),i=a("6bb5"),o=a("4e2b"),u=a("9ab4"),l=a("60a3"),p=a("b761"),f=function(t){function n(){return Object(s["a"])(this,n),Object(c["a"])(this,Object(i["a"])(n).apply(this,arguments))}return Object(o["a"])(n,t),n}(l["c"]);f=Object(u["a"])([Object(l["a"])({components:{CompanyList:p["a"]}})],f);var m=f,v=m,_=a("2877"),d=Object(_["a"])(v,e,r,!1,null,null,null);n["default"]=d.exports},1169:function(t,n,a){var e=a("2d95");t.exports=Array.isArray||function(t){return"Array"==e(t)}},1818:function(t,n,a){"use strict";var e=a("f1d8"),r=a.n(e);r.a},"4bb4":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"map"},[a("h1",[t._v("This is the map page")]),a("img",{staticClass:"map",attrs:{src:"/img/map-new.svg"}})])}],s=(a("5a6f"),a("2877")),c={},i=Object(s["a"])(c,e,r,!1,null,"1e513fea",null);n["default"]=i.exports},"5a6f":function(t,n,a){"use strict";var e=a("610a"),r=a.n(e);r.a},"610a":function(t,n,a){},7514:function(t,n,a){"use strict";var e=a("5ca1"),r=a("0a49")(5),s="find",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),e(e.P+e.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},8799:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"company"},[a("img",{staticClass:"company-logo",attrs:{src:"../"+t.company.imageUrl,alt:t.company.name}}),a("h1",[t._v(t._s(t.company.name))]),a("div",{staticClass:"location"},[a("img",{staticClass:"map-pin",attrs:{src:"/img/map-pin.png"}}),a("router-link",{attrs:{to:"/map#"+t.company.booth}},[t._v(t._s(t.company.booth))])],1),a("hr"),a("h2",[t._v("Programmes")]),a("ul",{staticClass:"divisions"},t._l(t.company.divisions,(function(n){return a("li",{key:n},[t._v(t._s(n))])})),0),a("hr"),a("h2",[t._v("Offers")]),a("ul",{staticClass:"offers"},t._l(t.company.offerings,(function(n){return a("li",{key:n},[t._v(t._s(n))])})),0),a("hr"),a("h2",[t._v("Description")]),a("p",[t._v('"'),a("em",[t._v(t._s(t.company.fact))]),t._v('"')]),a("p",[t._v(t._s(t.company.description))]),a("p",[a("strong",[t._v("Location(s):")]),t._v(" "+t._s(t.company.locations))]),a("p",[a("strong",[t._v("Founding year:")]),t._v(" "+t._s(t.company.startYear))]),a("p",[a("strong",[t._v("Employees Worldwide:")]),t._v(" "+t._s(t.company.employeesWorldwide))]),a("p",[a("strong",[t._v("Employees Sweden:")]),t._v(" "+t._s(t.company.employeesSweden))]),a("hr"),a("h2",[t._v("Contact")]),a("h3",[t._v("Website")]),a("p",[a("a",{attrs:{href:"http://"+t.company.website}},[t._v(t._s(t.company.website))])]),t.company.contactEmail?[a("h3",[t._v("Email")]),a("p",[a("a",{attrs:{href:"mailto:"+t.company.contactEmail}},[t._v(t._s(t.company.contactEmail))])])]:t._e()],2)},r=[],s=(a("7514"),a("d225")),c=a("b0b4"),i=a("308d"),o=a("6bb5"),u=a("4e2b"),l=a("9ab4"),p=a("60a3"),f=function(t){function n(){return Object(s["a"])(this,n),Object(i["a"])(this,Object(o["a"])(n).apply(this,arguments))}return Object(u["a"])(n,t),Object(c["a"])(n,[{key:"mounted",value:function(){var t=document.getElementById("app");t instanceof HTMLDivElement&&t.scrollTo(0,0)}},{key:"company",get:function(){var t=this,n=this.$store.state.companies.find((function(n){return n.id===t.$route.params.id}));return n||{name:"loading..."}}}]),n}(p["c"]);f=Object(l["a"])([p["a"]],f);var m=f,v=m,_=(a("1818"),a("2877")),d=Object(_["a"])(v,e,r,!1,null,null,null);n["default"]=d.exports},cd1c:function(t,n,a){var e=a("e853");t.exports=function(t,n){return new(e(t))(n)}},e853:function(t,n,a){var e=a("d3f4"),r=a("1169"),s=a("2b4c")("species");t.exports=function(t){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)||(n=void 0),e(n)&&(n=n[s],null===n&&(n=void 0))),void 0===n?Array:n}},f1d8:function(t,n,a){},f820:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],s=a("2877"),c={},i=Object(s["a"])(c,e,r,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=about.8e477dd6.js.map