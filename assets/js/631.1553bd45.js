"use strict";(self["webpackChunkvuea"]=self["webpackChunkvuea"]||[]).push([[631],{4631:function(t,s,a){a.r(s),a.d(s,{default:function(){return o}});var e=function(){var t=this,s=t._self._c;return s("div",[s("h1",[t._v("2024年信息汇总查询")]),s("el-card",{staticClass:"cardFa",attrs:{shadow:"always","body-style":{}}},[s("el-page-header",{on:{back:t.tiao}}),s("ul",[s("li",[s("span",[t._v("姓    名:")]),s("span",[t._v(t._s(this.$route.query.name))])]),s("li",[s("span",[t._v("学    号:")]),s("span",[t._v(t._s(this.$route.query.students))])]),s("li",[s("span",[t._v("证件码:")]),s("span",[t._v(t._s(this.$route.query.major))])]),s("li",[s("span",[t._v("第一志愿:")]),s("span",[t._v(t._s(t.DataB[t.indexA].sx))])]),s("li",[s("span",[t._v("第二志愿:")]),s("span",[t._v(t._s(t.DataB[t.indexA].yy))])]),s("li",[s("span",[t._v("第三志愿:")]),s("span",[t._v(t._s(t.DataB[t.indexA].yw))])])])],1)],1)},n=[],u=(a(7658),{name:"home",data(){return{DataA:{},students:"",DataB:[],indexA:0,optionsData:["第一次","第二次","第三次","第四次","第五次"],num:0}},mounted(){this.DataA=JSON.parse(localStorage.getItem("Students")),this.students=this.$route.query.students,this.indexA=this.$route.query.indexMax,this.DataB=this.DataA[this.students]},methods:{tiao(){this.$router.push("/login")}}}),i=u,r=a(1001),d=(0,r.Z)(i,e,n,!1,null,"4ef4d817",null),o=d.exports}}]);
//# sourceMappingURL=631.1553bd45.js.map