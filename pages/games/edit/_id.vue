<template>
  <b-form @submit.prevent="editGame">
    <div class="container mt-5">

      <div class="row justify-content-center mb-3">
        <div class="col-12 col-sm-3">
          <h2>編集</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="title" label-for="title">
            <b-form-input
              id="title"
              :value="$store.getters.getGame.title"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="memo" label-for="memo">
            <b-form-input
              id="memo"
              :value="$store.getters.getGame.memo"
              required

            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-3">
          <b-button block type="submit" variant="primary">変更内容を保存</b-button>
        </div>
      </div>

    </div>
  </b-form>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id

    this.$store.dispatch('fetchGame', { id })
  },
  methods: {
    editGame(e) {
      const game = {
        id: this.$store.getters.getGame.id,
        title: e.target.title.value,
        memo: e.target.memo.value
      }

      this.$store.dispatch('editGame', { game })
      .then(() => {
        setTimeout(() => {
          this.$router.push('/games')
        }, 1000)
      })
    }
  }
}
</script>
