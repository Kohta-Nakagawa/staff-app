(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{281:function(t,e,n){"use strict";n.r(e);n(38);var o={data:function(){return{email:"",password:""}},computed:{getUser:function(){return this.$store.getters.getUser}},methods:{login:function(t,e){this.$store.dispatch("login",{email:this.email,password:this.password})}}},r=n(47),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.getUser.login?n("p",[n("span",[t._v("ログインに成功！")]),t._v("\n    "+t._s(t.getUser)+"\n  ")]):n("p",[t._v("ログインしてないよ")]),t._v(" "),n("form",{staticClass:"form",on:{submit:function(t){t.preventDefault()}}},[n("label",[n("span",[t._v("\n        email\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("label",[n("span",[t._v("\n        password\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.login}},[t._v("\n      Login\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);