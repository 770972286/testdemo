"use strict";(self["webpackChunkvuea"]=self["webpackChunkvuea"]||[]).push([[357],{8357:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("2024年志愿填报")]),t("el-card",{staticClass:"cardFa",attrs:{shadow:"always","body-style":{padding:"30px"}}},[t("el-form",{ref:"form",attrs:{model:e.PersonsData,"label-width":"70px",size:"min"}},[t("el-form-item",{attrs:{label:"名字"}},[t("el-input",{model:{value:e.PersonsData.name,callback:function(t){e.$set(e.PersonsData,"name",t)},expression:"PersonsData.name"}})],1),t("el-form-item",{attrs:{label:"学号"}},[t("el-input",{model:{value:e.PersonsData.students,callback:function(t){e.$set(e.PersonsData,"students",e._n(t))},expression:"PersonsData.students"}})],1),t("el-form-item",{attrs:{label:"证件号码"}},[t("el-input",{model:{value:e.PersonsData.major,callback:function(t){e.$set(e.PersonsData,"major",t)},expression:"PersonsData.major"}})],1),t("el-form-item",{attrs:{label:"第一志愿"}},[t("el-input",{model:{value:e.PersonsData.sx,callback:function(t){e.$set(e.PersonsData,"sx",t)},expression:"PersonsData.sx"}})],1),t("el-form-item",{attrs:{label:"第二志愿"}},[t("el-input",{model:{value:e.PersonsData.yy,callback:function(t){e.$set(e.PersonsData,"yy",t)},expression:"PersonsData.yy"}})],1),t("el-form-item",{attrs:{label:"第三志愿"}},[t("el-input",{model:{value:e.PersonsData.yw,callback:function(t){e.$set(e.PersonsData,"yw",t)},expression:"PersonsData.yw"}})],1),t("el-form-item",{attrs:{label:"成绩"}},[t("el-select",{attrs:{placeholder:"请选择第几次"},model:{value:e.PersonsData.number,callback:function(t){e.$set(e.PersonsData,"number",t)},expression:"PersonsData.number"}},e._l(e.optionsData,(function(e,s){return t("el-option",{key:s,attrs:{label:e,value:s+1}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitA}},[e._v("立即保存")]),t("el-button",{on:{click:e.returnA}},[e._v("返回")])],1)],1)],1)],1)},n=[],r=(s(7658),{name:"register",data(){return{PersonsData:{name:"",students:"",major:"",sx:"",yy:"",yw:"",number:""},optionsData:["第一次","第二次","第三次","第四次","第五次"],dataMax:[],newData:[],object:{}}},methods:{submitA(){for(const a in this.PersonsData)if(["",void 0,null].includes(this.PersonsData[a]))return alert(a+":不能为空");let e=this.PersonsData.students;this.object[e]||(this.object[e]=[]);let t=this.PersonsData.number-1,s={name:this.PersonsData.name,major:this.PersonsData.major,sx:this.PersonsData.sx,yy:this.PersonsData.yy,yw:this.PersonsData.yw};this.object[e][t]=s,localStorage.setItem("Students",JSON.stringify(this.object))},returnA(){this.$router.push({path:"/login"})}}}),o=r,l=s(1001),i=(0,l.Z)(o,a,n,!1,null,null,null),u=i.exports}}]);
//# sourceMappingURL=357.4c742728.js.map