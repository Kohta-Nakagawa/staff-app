(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{280:function(t,e,n){"use strict";n.r(e);n(42);var r={created:function(){this.$store.dispatch("fetchGames"),this.$store.dispatch("fetchUsers")},computed:{getUser:function(){return this.$store.getters.getUser},usersInstList:function(){for(var t=this.getUser.uid,i=0;i<this.$store.getters.getUsers.length;i++)if(console.log(this.$store.getters.getUsers[i]),console.log(this.$store.getters.getUsers[i].uid),this.$store.getters.getUsers[i].uid==t)return this.$store.getters.getUsers[i].instGame;return[]}},methods:{deleteGame:function(t){var e=this;this.$store.dispatch("deleteGame",{id:t}).then((function(){setTimeout((function(){e.$store.dispatch("fetchGames")}),1e3)}))},addInstGame:function(t){var e=this;this.$store.dispatch("addInstGame",{id:t}).then((function(){setTimeout((function(){e.$store.dispatch("fetchUsers")}),1e3)}))},delInstGame:function(t){var e=this;this.$store.dispatch("delInstGame",{id:t}).then((function(){setTimeout((function(){e.$store.dispatch("fetchUsers")}),1e3)}))}}},o=n(47),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._l(t.$store.getters.getGames,(function(e,r){return n("div",{key:r,staticClass:"row mb-4 bg-light p-2"},[n("h3",{staticClass:"col-12 small font-weight-bold"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"col-12 small"},[t._v("\n        "+t._s(e.memo)+"\n      ")]),t._v(" "),t._l(t.$store.getters.getUsers,(function(r,o){return n("div",{key:o},[r.instGame.includes(e.id)?n("span",{staticClass:"badge badge-primary ml-1 small"},[t._v("\n          "+t._s(r.userName)+"\n        ")]):t._e()])})),t._v(" "),n("b-button-group",{staticClass:"m-1",attrs:{size:"sm"}},[t.usersInstList.includes(e.id)?n("b-button",{attrs:{variant:"secondary"},on:{click:function(n){return n.preventDefault(),t.delInstGame(e.id)}}},[t._v("\n          ×\n        ")]):n("b-button",{on:{click:function(n){return n.preventDefault(),t.addInstGame(e.id)}}},[t._v("○")]),t._v(" "),n("b-button",{attrs:{variant:"outline-primary"}},[n("nuxt-link",{attrs:{to:{name:"games-edit-id",params:{id:e.id}}}},[t._v("\n            編集\n          ")])],1)],1)],2)}))],2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 p-2"},[n("h2",{staticClass:"small"},[t._v("ゲーム一覧")])])])}],!1,null,null,null);e.default=component.exports}}]);