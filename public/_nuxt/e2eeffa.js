(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{283:function(t,e,n){"use strict";n.r(e);n(38);var r={data:function(){return{uid:"",email:"",login:!1,userName:null,instGame:[]}},created:function(){this.$store.dispatch("fetchUsers")},computed:{user:function(){return this.$store.getters.user}},methods:{}},c=n(47),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.$store.getters.getUsers,(function(e,r){return n("div",{key:r,staticClass:"row"},[n("div",{staticClass:"col-4"},[t._v("\n      "+t._s(e.uid)+"\n    ")]),t._v(" "),n("div",{staticClass:"col-4"},[t._v("\n      "+t._s(e.email)+"\n    ")]),t._v(" "),n("div",{staticClass:"col-4"},[t._v("\n      "+t._s(e.userName)+"\n    ")]),t._v(" "),n("div",{staticClass:"col-4"},[t._v("\n      "+t._s(e.instGame)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);