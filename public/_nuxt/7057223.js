(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{286:function(t,e,r){"use strict";r.r(e);r(42);var o={created:function(){var t=this.$route.params.id;this.$store.dispatch("fetchGame",{id:t})},methods:{editGame:function(t){var e=this,r={id:this.$store.getters.getGame.id,title:t.target.title.value,memo:t.target.memo.value};this.$store.dispatch("editGame",{game:r}).then((function(){setTimeout((function(){e.$router.push("/games")}),1e3)}))}}},l=r(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.editGame.apply(null,arguments)}}},[r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"row justify-content-center mb-3"},[r("div",{staticClass:"col-12 col-sm-3"},[r("h2",[t._v("編集")])])]),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-3"},[r("b-form-group",{attrs:{label:"title","label-for":"title"}},[r("b-form-input",{attrs:{id:"title",value:t.$store.getters.getGame.title,required:""}})],1)],1)]),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-3"},[r("b-form-group",{attrs:{label:"memo","label-for":"memo"}},[r("b-form-input",{attrs:{id:"memo",value:t.$store.getters.getGame.memo,required:""}})],1)],1)]),t._v(" "),r("div",{staticClass:"row justify-content-center mt-3"},[r("div",{staticClass:"col-12 col-sm-3"},[r("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[t._v("変更内容を保存")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);