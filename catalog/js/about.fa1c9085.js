(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a49":function(t,n,e){var a=e("9b43"),r=e("626a"),c=e("4bf8"),o=e("9def"),s=e("cd1c");t.exports=function(t,n){var e=1==t,i=2==t,u=3==t,l=4==t,p=6==t,f=5==t||p,m=n||s;return function(n,s,v){for(var _,d,h=c(n),b=r(h),y=a(s,v,3),g=o(b.length),w=0,E=e?m(n,g):i?m(n,0):void 0;g>w;w++)if((f||w in b)&&(_=b[w],d=y(_,w,h),t))if(e)E[w]=d;else if(d)switch(t){case 3:return!0;case 5:return _;case 6:return w;case 2:E.push(_)}else if(l)return!1;return p?-1:u||l?l:E}}},"0f93":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"companies"},[e("h1",[t._v("Company index page")]),e("CompanyList")],1)},r=[],c=e("d225"),o=e("308d"),s=e("6bb5"),i=e("4e2b"),u=e("9ab4"),l=e("60a3"),p=e("b761"),f=function(t){function n(){return Object(c["a"])(this,n),Object(o["a"])(this,Object(s["a"])(n).apply(this,arguments))}return Object(i["a"])(n,t),n}(l["c"]);f=Object(u["a"])([Object(l["a"])({components:{CompanyList:p["a"]}})],f);var m=f,v=m,_=e("2877"),d=Object(_["a"])(v,a,r,!1,null,null,null);n["default"]=d.exports},1169:function(t,n,e){var a=e("2d95");t.exports=Array.isArray||function(t){return"Array"==a(t)}},1818:function(t,n,e){"use strict";var a=e("f1d8"),r=e.n(a);r.a},"1e90":function(t,n,e){"use strict";var a=e("c6e3"),r=e.n(a);r.a},"4bb4":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"map"},[e("h1",[t._v("Map")]),e("img",{staticClass:"map",attrs:{src:"/img/map-new.svg"}})])}],c=(e("1e90"),e("2877")),o={},s=Object(c["a"])(o,a,r,!1,null,"c7680f42",null);n["default"]=s.exports},7514:function(t,n,e){"use strict";var a=e("5ca1"),r=e("0a49")(5),c="find",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(c)},8799:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"company"},[e("img",{staticClass:"company-logo",attrs:{src:"../"+t.company.imageUrl,alt:t.company.name}}),e("h1",[t._v(t._s(t.company.name))]),e("div",{staticClass:"location"},[e("img",{staticClass:"map-pin",attrs:{src:"/img/map-pin.png"}}),e("router-link",{attrs:{to:"/map#"+t.company.booth}},[t._v(t._s(t.company.booth))])],1),e("hr"),e("h2",[t._v("Programmes")]),e("ul",{staticClass:"divisions"},t._l(t.company.divisions,(function(n){return e("li",{key:n},[t._v(t._s(n))])})),0),e("hr"),e("h2",[t._v("Offers")]),e("ul",{staticClass:"offers"},t._l(t.company.offerings,(function(n){return e("li",{key:n},[t._v(t._s(n))])})),0),e("hr"),e("h2",[t._v("Description")]),e("p",[t._v('"'),e("em",[t._v(t._s(t.company.fact))]),t._v('"')]),e("p",[t._v(t._s(t.company.description))]),e("p",[e("strong",[t._v("Location(s):")]),t._v(" "+t._s(t.company.locations))]),e("p",[e("strong",[t._v("Founding year:")]),t._v(" "+t._s(t.company.startYear))]),e("p",[e("strong",[t._v("Employees Worldwide:")]),t._v(" "+t._s(t.company.employeesWorldwide))]),e("p",[e("strong",[t._v("Employees Sweden:")]),t._v(" "+t._s(t.company.employeesSweden))]),e("hr"),e("h2",[t._v("Contact")]),e("h3",[t._v("Website")]),e("p",[e("a",{attrs:{href:"http://"+t.company.website}},[t._v(t._s(t.company.website))])]),t.company.contactEmail?[e("h3",[t._v("Email")]),e("p",[e("a",{attrs:{href:"mailto:"+t.company.contactEmail}},[t._v(t._s(t.company.contactEmail))])])]:t._e()],2)},r=[],c=(e("7514"),e("d225")),o=e("b0b4"),s=e("308d"),i=e("6bb5"),u=e("4e2b"),l=e("9ab4"),p=e("60a3"),f=function(t){function n(){return Object(c["a"])(this,n),Object(s["a"])(this,Object(i["a"])(n).apply(this,arguments))}return Object(u["a"])(n,t),Object(o["a"])(n,[{key:"mounted",value:function(){var t=document.getElementById("app");t instanceof HTMLDivElement&&t.scrollTo(0,0)}},{key:"company",get:function(){var t=this,n=this.$store.state.companies.find((function(n){return n.id===t.$route.params.id}));return n||{name:"loading..."}}}]),n}(p["c"]);f=Object(l["a"])([p["a"]],f);var m=f,v=m,_=(e("1818"),e("2877")),d=Object(_["a"])(v,a,r,!1,null,null,null);n["default"]=d.exports},c6e3:function(t,n,e){},cd1c:function(t,n,e){var a=e("e853");t.exports=function(t,n){return new(a(t))(n)}},e853:function(t,n,e){var a=e("d3f4"),r=e("1169"),c=e("2b4c")("species");t.exports=function(t){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)||(n=void 0),a(n)&&(n=n[c],null===n&&(n=void 0))),void 0===n?Array:n}},f1d8:function(t,n,e){},f820:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("About DatE-IT")]),e("p",[t._v("DatE-IT is the labour fair for Computer, Electrical, and Software Engineering")]),e("p",[t._v("The fair will be open from 10:00 - 16:00 on the 14th of November 2019")]),e("p",[t._v("The fair is in the SB Multi Hall "),e("a",{attrs:{href:"https://www.google.com/maps/place/Betongv%C3%A4gen+9,+412+58+G%C3%B6teborg/"}},[t._v("Google Maps")])])])}],c=e("2877"),o={},s=Object(c["a"])(o,a,r,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=about.fa1c9085.js.map