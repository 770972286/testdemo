"use strict";(self["webpackChunkvuea"]=self["webpackChunkvuea"]||[]).push([[550],{3550:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var e=function(){var t=this,s=t._self._c;return s("div",[s("h1",[t._v("2023年考生考试成绩查询")]),s("el-card",{staticClass:"cardFa",attrs:{shadow:"always","body-style":{}}},[s("el-page-header",{on:{back:t.tiao}}),s("ul",[s("li",[s("span",[t._v("姓    名:")]),s("span",[t._v(t._s(this.$route.query.name))])]),s("li",[s("span",[t._v("学    号:")]),s("span",[t._v(t._s(this.$route.query.students))])]),s("li",[s("span",[t._v("证件码:")]),s("span",[t._v(t._s(this.$route.query.major))])]),s("li",[s("span",[t._v("总    分:")]),s("span",[t._v(t._s(Number(this.DataB[this.indexA].sx.split(":")[1])+Number(this.DataB[this.indexA].yy.split(":")[1])+Number(this.DataB[this.indexA].yw.split(":")[1])+Number(this.DataB[this.indexA].ty.split(":")[1])))])]),s("li",[s("span",[t._v("第一门:")]),s("span",[t._v(t._s(t.DataB[t.indexA].sx))])]),s("li",[s("span",[t._v("第二门:")]),s("span",[t._v(t._s(t.DataB[t.indexA].yy))])]),s("li",[s("span",[t._v("第三门:")]),s("span",[t._v(t._s(t.DataB[t.indexA].yw))])]),s("li",[s("span",[t._v("第四门:")]),s("span",[t._v(t._s(t.DataB[t.indexA].ty))])])])],1)],1)},i=[],n=(a(7658),{name:"home",data(){return{DataA:{},students:"",DataB:[],indexA:0,optionsData:["第一次","第二次","第三次","第四次","第五次"],num:0}},mounted(){this.DataA=JSON.parse(localStorage.getItem("Students")),this.students=this.$route.query.students,this.indexA=this.$route.query.indexMax,this.DataB=this.DataA[this.students]},methods:{tiao(){this.$router.push("/login")}}}),u=n,r=a(1001),h=(0,r.Z)(u,e,i,!1,null,"179db0c1",null),d=h.exports}}]);
//# sourceMappingURL=550.72037155.js.map