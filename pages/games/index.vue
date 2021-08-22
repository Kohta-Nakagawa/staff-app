<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 p-2">
          <h2 class="small">ゲーム一覧</h2>
        </div>
      </div>
      <div
        v-for="(game, key) in $store.getters.getGames"
        :key="key"
        class="row mb-4 bg-light p-2"
      >
        <h3 class="col-12 small font-weight-bold">
          {{ game.title }}
        </h3>

        <div class="col-12 small">
          {{ game.memo }}
        </div>
        <div v-for="(user, key) in $store.getters.getUsers" :key="key">
          <span
            v-if="user.instGame.includes(game.id)"
            class="badge badge-primary ml-1 small"
          >
            {{ user.userName }}
          </span>
        </div>
        <b-button-group size="sm" class="m-1">
          <b-button
            v-if="usersInstList.includes(game.id)"
            variant="secondary"
            @click.prevent="delInstGame(game.id)"
          >
            ×
          </b-button>

          <b-button v-else @click.prevent="addInstGame(game.id)">○</b-button>

          <b-button variant="outline-primary">
            <nuxt-link :to="{ name: 'games-edit-id', params: { id: game.id } }">
              編集
            </nuxt-link>
          </b-button>
        </b-button-group>
        <!-- <div class="col-1">
          <a href="#" @click.prevent="deleteGame(game.id)">削除</a>
        </div> -->
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
