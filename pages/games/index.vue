<template>
  <div>
    <div>userinstlist</div>
    {{ usersInstList }}
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2>ゲーム一覧</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-4 font-weight-bold">タイトル</div>
        <div class="col-4 font-weight-bold">メモ</div>
        <div class="col-4 col-sm-1 font-weight-bold">操作</div>
      </div>

      <div
        v-for="(game, key) in $store.getters.getGames"
        :key="key"
        class="row"
      >
        <div class="col-4">
          {{ game.title }}
        </div>
        <div class="col-4">
          {{ game.id }}
        </div>
        <div v-if="usersInstList.includes(game.id)" class="col-2">
          <button @click.prevent="delInstGame(game.id)">del</button>
        </div>
        <div v-else>
          <button @click.prevent="addInstGame(game.id)">add</button>
        </div>
        <div class="col-1">
          <nuxt-link :to="{ name: 'games-edit-id', params: { id: game.id } }">
            Edit
          </nuxt-link>
        </div>
        <div class="col-1">
          <a href="#" @click.prevent="deleteGame(game.id)">削除</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchGames");
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    getUser() {
      return this.$store.getters["getUser"];
    },
    usersInstList() {
      let userId = this.getUser.uid;
      for (let i = 0; i < this.$store.getters.getUsers.length; i++) {
        console.log(this.$store.getters.getUsers[i]);
        console.log(this.$store.getters.getUsers[i].uid); //Cannot read property 'uid' of undefined になる
        if (this.$store.getters.getUsers[i].uid == userId) {
          return this.$store.getters.getUsers[i].instGame;
        }
      }
      // なにも見つからなくても空配列を返す
      return [];
    }
  },
  methods: {
    deleteGame(id) {
      this.$store.dispatch("deleteGame", { id }).then(() => {
        setTimeout(() => {
          this.$store.dispatch("fetchGames");
        }, 1000);
      });
    },
    addInstGame(id) {
      this.$store.dispatch("addInstGame", { id }).then(() => {
        setTimeout(() => {
          this.$store.dispatch("fetchUsers");
        }, 1000);
      });
    },
    delInstGame(id) {
      this.$store.dispatch("delInstGame", { id }).then(() => {
        setTimeout(() => {
          this.$store.dispatch("fetchUsers");
        }, 1000);
      });
    }
  }
};
</script>
