<template>
  <div>
    {{ $store.getters.getUsers }}
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
          {{ game.memo }}
        </div>
        <div class="col-2">
          <button @click.prevent="addInstGame(game.id)">×</button>
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
  methods: {
    deleteGame(id) {
      if (!confirm("ほんとに消す?")) return;

      this.$store.dispatch("deleteGame", { id }).then(() => {
        setTimeout(() => {
          this.$store.dispatch("fetchGames");
        }, 1000);
      });
    },
    addInstGame(id) {
      this.$store.dispatch("addInstGame", { id }).then(() => {
        setTimeout(() => {
          this.$store.dispatch("fetchGames");
        }, 1000);
      });
    }
  }
};
</script>
