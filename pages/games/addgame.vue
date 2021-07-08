<template><div>
<mainNav/>
  <b-form @submit.prevent="addGame">
    <div class="container mt-5">

      <div class="row justify-content-center mb-3">
        <div class="col-12 col-sm-3">
          <h2>ゲームを登録</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="title" label-for="title">
            <b-form-input
              id="title"
              v-model="game.title"
              required
              placeholder="タイトル"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="memo" label-for="memo">
            <b-form-input
              id="memo"
              v-model="game.memo"
              required
              placeholder="メモ"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>


      <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-3">
          <b-button block type="submit" variant="primary">登録</b-button>
        </div>
      </div>

    </div>
  </b-form></div>
</template>

<script>
export default {
  data() {
    return {
      game: {
        title:null,
        // img: null,
   
        memo:null
      }
    }
  },
  methods: {
    addGame() {
      this.$store.dispatch('addGame', { game: this.game })
      .then(() => {
        this.game.title= null
        this.game.memo = null
        // this.game.img = null
        

        alert('ゲームの登録ができました')
      })
    }
  }
}
</script>