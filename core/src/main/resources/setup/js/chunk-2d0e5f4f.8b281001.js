(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f4f"],{9761:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-5",attrs:{"grid-list-md":""}},[!t.loading||t.installationComplete||t.error?t._e():r("div",[r("h3",[t._v("Please wait while Jemo creates the installation resources.")]),r("v-progress-linear",{attrs:{indeterminate:!0}}),t.terraformOutput?r("div",[r("pre",[t._v(t._s(t.terraformOutput))]),r("div",{staticClass:"pa-3"},[r("v-progress-circular",{attrs:{indeterminate:"",size:16}})],1)]):t._e()],1),t.error?r("div",["TERRAFORM_NOT_INSTALLED"===t.error.code?r("div",[r("h3",[t._v("The server can not find the terraform command.")]),t._v("\n            Either terraform is not installed ("),r("a",{attrs:{href:"https://learn.hashicorp.com/terraform/getting-started/install.html",target:"_blank"}},[t._v("Installation\n            instructions")]),t._v("),\n            or it is not in the path. (e.g. run: terraform -version).\n\n            "),r("br"),r("br"),r("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.install}},[t._v("Fixed")])],1):r("div",[r("h3",[t._v("Terraform failed to create the installation resources. The following error occurred:")]),r("pre",[t._v(t._s(t.error.message))]),r("br"),r("v-btn",{attrs:{to:{name:"delete",params:{csp:this.csp,mode:"INSTALL"}},color:"primary"}},[t._v("Revert")])],1)]):t._e(),t.installationComplete?r("div",[r("h3",[t._v("Setup Completed")]),r("br"),t._v("\n        Installation has finished successfully. Terraform reported the following created resources and outputs.\n        "),r("br"),r("br"),r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[t._v("Created Resources")])],1),r("v-data-table",{staticClass:"elevation-1",attrs:{items:t.createItems(t.terraformResult.createdResources),"hide-actions":"","hide-headers":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.name))]),r("td",[t._v(t._s(e.item.value))])]}}])}),r("br"),r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[t._v("Outputs")])],1),r("v-data-table",{staticClass:"elevation-1",attrs:{items:t.createItems(t.terraformResult.outputs),"hide-actions":"","hide-headers":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.name))]),r("td",[t._v(t._s(e.item.value))])]}}])}),r("br"),t._v("\n\n        Please, click the following button to input Jemo parameters"),r("br"),r("br"),r("v-btn",{attrs:{color:"primary"},on:{click:t.redirectToParamSet}},[t._v("Next")])],1):t._e()])},s=[],o=(r("7f7f"),{data:function(){return{csp:this.$route.params.csp,parameters:this.$route.params.parameters,installationComplete:!1,error:null,terraformResult:null,terraformOutput:null,loading:!1,timer:null}},watch:{$route:function(t){"install"===t.name&&t.params.csp&&(this.csp=t.params.csp,this.parameters=t.params.parameters?t.params.parameters:this.parameters,this.installationComplete=!1,this.loading=!1,this.error=null,this.terraformResult=null,this.terraformOutput=null,this.install())}},mounted:function(){this.install()},methods:{install:function(){var t=this;this.loading=!0;var e={csp:this.csp.name,parameters:this.parameters};this.$http.post("install",e).then(function(e){console.log(e),t.timer=setInterval(t.pollForInstallResult,1e4)},function(e){console.log(e),t.error=e.data})},pollForInstallResult:function(){var t=this;this.$http.get("install/result/"+this.csp.name+"/"+this.parameters.region).then(function(e){console.log(e),t.terraformOutput=e.data.output,"FINISHED"===e.data.status&&(clearInterval(t.timer),e.data.error?t.error=e.data.error:(t.installationComplete=!0,t.error=null,t.terraformResult=e.data.terraformResult))},function(e){clearInterval(t.timer),console.log(e),t.error=e.data,alert(e.data)})},redirectToParamSet:function(){var t=this;this.$http.get("jemoparams/paramsets/"+this.csp.name).then(function(e){console.log(e),t.$router.push({name:"jemo-param-set",params:{csp:t.csp,paramSets:e.data}})},function(t){console.log(t),alert(t.data)})},createItems:function(t){var e=[];for(var r in t)e.push({name:r,value:t[r]});return console.log(e),e}}}),n=o,l=r("2877"),i=r("6544"),c=r.n(i),u=r("8336"),m=r("a523"),p=r("8fea"),d=r("490a"),h=r("8e36"),v=r("71d9"),f=r("2a7f"),_=Object(l["a"])(n,a,s,!1,null,null,null);_.options.__file="Install.vue";e["default"]=_.exports;c()(_,{VBtn:u["a"],VContainer:m["a"],VDataTable:p["a"],VProgressCircular:d["a"],VProgressLinear:h["a"],VToolbar:v["a"],VToolbarTitle:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0e5f4f.8b281001.js.map