(function(t){function e(e){for(var a,l,r=e[0],s=e[1],u=e[2],p=0,d=[];p<r.length;p++)l=r[p],o[l]&&d.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/jemo/monitor/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("28dd"),i=n("bb71");n("da64");a["a"].use(i["a"],{iconfont:"md"});var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("navbar"),n("v-content",{staticClass:"mx-4 mb-4"},[n("keep-alive",[n("router-view")],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"indigo",attrs:{app:"",dark:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Eclipse Jemo")]),n("span",{staticClass:"font-weight-light mx-2"},[t._v("Monitor UI")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://www.eclipse.org/jemo/",target:"_blank"}},[n("span",{staticClass:"mr-8"},[t._v("Project page")])])],1)},u=[],c=n("2877"),p=n("6544"),d=n.n(p),f=n("8336"),v=n("9910"),g=n("71d9"),m=n("2a7f"),h={},b=Object(c["a"])(h,s,u,!1,null,null,null),_=b.exports;d()(b,{VBtn:f["a"],VSpacer:v["a"],VToolbar:g["a"],VToolbarTitle:m["a"]});var x={name:"App",components:{Navbar:_}},y=x,j=n("7496"),k=n("549c"),w=Object(c["a"])(y,l,r,!1,null,null,null),P=w.exports;d()(w,{VApp:j["a"],VContent:k["a"]});var V=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-spacer"),n("div",{staticClass:"d-flex justify-between align-center mb-3"},[n("v-btn",{attrs:{color:"primary"},on:{click:t.expandAll}},[t._v("Expand All")]),n("v-btn",{attrs:{color:"secondary"},on:{click:t.colapseAll}},[t._v("Collapse All")])],1),n("v-expansion-panel",{attrs:{expand:""},model:{value:t.expand,callback:function(e){t.expand=e},expression:"expand"}},t._l(t.plugins,function(e,a){return n("v-expansion-panel-content",{key:a,scopedSlots:t._u([{key:"header",fn:function(){return[n("div",[n("strong",[t._v("id:")]),t._v(" "+t._s(e.pluginInfo.id))]),n("div",[n("strong",[t._v("name:")]),t._v(" "+t._s(e.pluginInfo.name))]),n("div",[n("strong",[t._v("version:")]),t._v(" "+t._s(e.pluginInfo.version))]),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(n){return n.stopPropagation(),t.changePluginVersionStatus(e.pluginInfo.id,e.pluginInfo.version,e.metaData.enabled)}}},[t._v(t._s(e.metaData.enabled?"Deactivate":"Activate")+"\n                ")]),n("v-btn",{attrs:{color:"red",flat:""},on:{click:function(n){return n.stopPropagation(),t.deletePluginVersion(e,a)}}},[t._v("Delete")])]},proxy:!0}],null,!0)},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"Endpoints",align:"left",sortable:!1,value:"endpoint"}],items:Object.keys(e.metaData.endpoints),"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(a){return[n("td",[t._v(t._s(a.item))]),n("td",[t._v(t._s(e.metaData.endpoints[a.item]))])]}}],null,!0)}),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"Batches",align:"left",sortable:!1,value:"batch"}],items:e.metaData.batches,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item))])]}}],null,!0)}),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"Events",align:"left",sortable:!1,value:"event"}],items:e.metaData.events,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item))])]}}],null,!0)}),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"Fixed Processes",align:"left",sortable:!1,value:"event"}],items:e.metaData.fixed,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item))])]}}],null,!0)})],1)}),1)],1)},S=[],C=(n("ac6a"),n("75fc")),D={data:function(){return{expand:[],plugins:[]}},created:function(){var t=this;this.$http.get("/jemo/monitor/plugins").then(function(e){console.log(e),t.plugins=e.data},function(t){console.log(t),alert(t.data)})},methods:{expandAll:function(){this.expand=Object(C["a"])(Array(this.plugins.length).keys()).map(function(){return!0})},colapseAll:function(){this.expand=[]},changePluginVersionStatus:function(t,e,n){var a=this,o={enabled:!n};this.$http.patch("/jemo/monitor/plugins/"+t+"/"+e,o).then(function(t){console.log(t),200===t.status&&(a.plugins=a.plugins.map(function(e){return e.metaData.id===t.data.metaData.id?t.data:e}))},function(t){alert(t.data),console.log(t)})},deletePluginVersion:function(t,e){var n=this;this.$http.delete("/jemo/monitor/plugins/"+t.pluginInfo.id+"/"+t.pluginInfo.version).then(function(t){console.log(t),204===t.status&&n.plugins.splice(e,1)},function(t){alert(t.data)})}}},A=D,E=n("8fea"),I=n("cd55"),T=n("49e2"),$=Object(c["a"])(A,O,S,!1,null,null,null),M=$.exports;d()($,{VBtn:f["a"],VDataTable:E["a"],VExpansionPanel:I["a"],VExpansionPanelContent:T["a"],VSpacer:v["a"]}),a["a"].use(V["a"]);var B=new V["a"]({routes:[{path:"/plugins",name:"plugins",component:M},{path:"*",redirect:{name:"plugins"}}]});a["a"].config.productionTip=!1,a["a"].use(o["a"]),new a["a"]({router:B,render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.aaeae72e.js.map