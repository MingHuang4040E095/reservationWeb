(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"d169cb3d","chunk-4525ac10":"31a6e14b","chunk-4456548e":"093e79fd","chunk-5881160e":"364d142d","chunk-4cb38902":"44e906c6"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-4525ac10":1,"chunk-4456548e":1,"chunk-5881160e":1,"chunk-4cb38902":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-4525ac10":"ca9d3df8","chunk-4456548e":"cc6e8f5a","chunk-5881160e":"40792560","chunk-4cb38902":"3bbd7409"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"27c4":function(t,e,n){"use strict";var a=n("d712"),r=n.n(a);r.a},"2fcc":function(t,e,n){t.exports=n.p+"img/type2.7ce296fa.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("5363"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-main",{staticClass:"mt-14"},[n("router-view")],1),n("Footer")],1)}),i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{color:"white",fixed:!0}},[n("v-toolbar-title",[n("div",{staticClass:"logo pl-2",on:{click:t.backHome}},[n("div",{staticStyle:{"line-height":"20px","margin-bottom":"0.5rem"}},[t._v("LOFT")]),n("div",{staticStyle:{"line-height":"15px"}},[t._v("HOME")])])]),n("v-spacer"),n("v-row",{staticClass:"d-none d-md-flex",attrs:{align:"center"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",to:{name:"About"}}},[t._v("ABOUT")]),n("v-btn",{attrs:{text:"",to:{name:"Rooms"}}},[t._v("ROOMS")]),n("v-btn",{attrs:{text:""}},[t._v("CONTACT")]),n("v-btn",{staticClass:"ma-2 rounded-sm",attrs:{outlined:"",color:"#9CCC65"}},[t._v("BOOK NOW")]),n("div",[n("v-select",{staticStyle:{width:"120px"},attrs:{items:t.languageList,"item-text":"text","item-value":"value",label:"Language",outlined:"",dense:"","hide-details":""},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)],1),n("v-app-bar-nav-icon",{staticClass:"d-sm-inline-block d-md-none",on:{click:t.openDrawer}})],1),n("Drawer")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{width:"400",absolute:"",temporary:""},model:{value:t.drawerStatus,callback:function(e){t.drawerStatus=e},expression:"drawerStatus"}},[n("v-list-item",[n("v-list-item-content",[n("div",{staticClass:"pl-2",staticStyle:{"border-left":"2px solid #95908C","font-size":"1.5rem"}},[n("div",{staticStyle:{"line-height":"20px","margin-bottom":"0.5rem"}},[t._v("LOFT")]),n("div",{staticStyle:{"line-height":"15px"}},[t._v("HOME")])])])],1),n("v-divider"),n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(t._s(e.title))])],1)],1)})),n("v-list-item",[n("v-list-item-content",[n("v-select",{staticStyle:{width:"120px"},attrs:{items:t.languageList,"item-text":"text","item-value":"value",label:"Language",outlined:"",dense:"","hide-details":""},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)],1)],2)],1)},l=[],u=n("5530"),d=n("2f62"),p={computed:Object(u["a"])(Object(u["a"])({},Object(d["b"])({setdrawerStatus:function(t){return t.drawer.drawerStatus}})),{},{drawerStatus:{get:function(){return this.setdrawerStatus},set:function(t){this.$store.commit("drawer/setDrawerStatus",t)}}}),data:function(){return{language:null,languageList:[{text:"EN",value:"1"},{text:"中文",value:"2"},{text:"한국어",value:"3"}],items:[{title:"Home",icon:"mdi-home"},{title:"About",icon:"mdi-account-supervisor-circle"},{title:"Contact",icon:"mdi-forum"}]}}},m=p,f=n("2877"),v=n("6544"),g=n.n(v),h=n("ce7e"),b=n("132d"),y=n("8860"),w=n("da13"),x=n("5d23"),k=n("34c3"),C=n("f774"),_=n("b974"),S=Object(f["a"])(m,c,l,!1,null,null,null),O=S.exports;g()(S,{VDivider:h["a"],VIcon:b["a"],VList:y["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemIcon:k["a"],VListItemTitle:x["b"],VNavigationDrawer:C["a"],VSelect:_["a"]});var T={components:{Drawer:O},data:function(){return{language:null,languageList:[{text:"EN",value:"1"},{text:"中文",value:"2"},{text:"한국어",value:"3"}]}},methods:{openDrawer:function(){this.$store.commit("drawer/setDrawerStatus",!0)},backHome:function(){this.$router.push({name:"Home"})}}},j=T,V=(n("27c4"),n("40dc")),L=n("5bc1"),E=n("8336"),A=n("0fd9"),D=n("2fa4"),W=n("2a7f"),H=Object(f["a"])(j,o,s,!1,null,"263dcde0",null),N=H.exports;g()(H,{VAppBar:V["a"],VAppBarNavIcon:L["a"],VBtn:E["a"],VRow:A["a"],VSelect:_["a"],VSpacer:D["a"],VToolbarTitle:W["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-footer",{attrs:{color:"#F8F1EA"}},[n("v-container",{staticClass:"py-10"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-row",{staticClass:"fill-height",attrs:{justify:"space-around",align:"center","justify-sm":"start","align-sm":"start"}},[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"6"}},[n("v-row",{staticClass:"fill-height"},[n("v-col",{attrs:{cols:"6",sm:"12"}},[n("v-row",{staticClass:"pr-3 pr-sm-0 ml-0",attrs:{justify:"end","justify-sm":"start"}},[n("div",{staticClass:"pl-4",staticStyle:{"border-left":"2px solid #95908C","font-size":"36px"}},[n("div",{staticStyle:{"line-height":"27px","margin-bottom":"1rem"}},[t._v("LOFT")]),n("div",{staticStyle:{"line-height":"27px"}},[t._v("HOME")])])])],1),n("v-col",{staticClass:"mt-4 pb-0",attrs:{cols:"6",sm:"12"}},[n("div",[n("v-icon",{attrs:{size:"2.5rem",color:"#000000"}},[t._v("mdi-facebook")]),n("v-icon",{staticClass:"ml-3",attrs:{size:"2.5rem",color:"#000000"}},[t._v("mdi-instagram")]),n("v-icon",{staticClass:"ml-3",attrs:{size:"2.5rem",color:"#000000"}},[t._v("mdi-twitter")])],1)])],1)],1),n("v-col",{staticClass:"pt-5 pt-sm-1",attrs:{cols:"8",sm:"6"}},[n("div",{staticClass:"font-weight-light text-center text-sm-left"},[t._v("台北市中山區長春路777號3樓")]),n("div",{staticClass:"font-weight-light mt-2 text-center text-sm-left"},[t._v("Mail: lofthome@mail.com ")]),n("div",{staticClass:"font-weight-light mt-2 text-center text-sm-left"},[t._v("Tel: +886 2 2777-77772 ")])])],1)],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-row",{staticClass:"fill-height pt-2",attrs:{justify:"center",align:"start","justify-sm":"end","align-sm":"end"}},[n("span",[t._v("Copyright © 2019 LOFT HOME")])])],1)],1)],1)],1)],1)},M=[],R={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},F=R,I=n("62ad"),B=n("a523"),$=n("553a"),z=Object(f["a"])(F,P,M,!1,null,null,null),q=z.exports;g()(z,{VCol:I["a"],VContainer:B["a"],VFooter:$["a"],VIcon:b["a"],VRow:A["a"]});var J={name:"App",components:{Header:N,Footer:q}},K=J,U=(n("5c0b"),n("7496")),G=n("f6c4"),Q=Object(f["a"])(K,r,i,!1,null,null,null),X=Q.exports;g()(Q,{VApp:U["a"],VMain:G["a"]});n("d3b7");var Y=n("8c4f");a["a"].use(Y["a"]);var Z=[{path:"/",name:"Home",component:function(){return n.e("chunk-4cb38902").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/rooms",name:"Rooms",component:function(){return Promise.all([n.e("chunk-4525ac10"),n.e("chunk-5881160e")]).then(n.bind(null,"b924"))}},{path:"/booknow",name:"BookNow",props:function(t){return Object(u["a"])(Object(u["a"])({},t.params),t.query)},component:function(){return Promise.all([n.e("chunk-4525ac10"),n.e("chunk-4456548e")]).then(n.bind(null,"a518"))}}],tt=new Y["a"]({mode:"history",base:"",routes:Z}),et=tt,nt={namespaced:!0,state:{drawerStatus:!1},mutations:{setDrawerStatus:function(t,e){t.drawerStatus=e}}};a["a"].use(d["a"]);var at=new d["a"].Store({state:{bannetImgList:[{src:n("871f")},{src:n("7639")},{src:n("e3e3")}],roomTypeList:[{id:1,roomType:"Single Room",src:n("d8ac"),priceWeekdays:1380,priceWeekend:1500},{id:2,roomType:"Deluxe Single Room",src:n("2fcc"),priceWeekdays:1890,priceWeekend:2e3},{id:3,roomType:"Double Room",src:n("f7bb"),priceWeekdays:2460,priceWeekend:2500},{id:4,roomType:"Deluxe Room",src:n("d69b"),priceWeekdays:2888,priceWeekend:3e3},{id:5,roomType:"Twin Room",src:n("7384"),priceWeekdays:3350,priceWeekend:3500},{id:6,roomType:"Deluxe Twin Room",src:n("60b3"),priceWeekdays:3899,priceWeekend:4e3}]},mutations:{},actions:{},modules:{drawer:nt}}),rt=n("ade3"),it=(n("15f5"),n("f309"));a["a"].use(it["a"]);var ot=new it["a"]({icons:Object(rt["a"])({iconfont:"mdi"},"iconfont","fa")});a["a"].config.productionTip=!1,new a["a"]({router:et,store:at,vuetify:ot,render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"60b3":function(t,e,n){t.exports=n.p+"img/type6.3740cf39.png"},7384:function(t,e,n){t.exports=n.p+"img/type5.15099848.png"},7639:function(t,e,n){t.exports=n.p+"img/banner2.3a132768.png"},"871f":function(t,e,n){t.exports=n.p+"img/banner1.772f91f0.png"},"9c0c":function(t,e,n){},d69b:function(t,e,n){t.exports=n.p+"img/type4.d1f52382.png"},d712:function(t,e,n){},d8ac:function(t,e,n){t.exports=n.p+"img/type1.46f1e1a1.png"},e3e3:function(t,e,n){t.exports=n.p+"img/banner3.efb6d8d9.png"},f7bb:function(t,e,n){t.exports=n.p+"img/type3.2e57de6a.png"}});
//# sourceMappingURL=app.8851114f.js.map