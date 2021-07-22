<template>
  <b-form @submit.prevent="editUser">
    <div class="container mt-5">
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-sm-3">
          <h2>編集</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="userName" label-for="userName">
            <b-form-input
              id="userName"
              :value="$store.getters.getUser.userName"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <b-form-group label="instGame" label-for="instGame">
            <b-form-input
              id="instGame"
              :value="$store.getters.getUser.instGame"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-3">
          <b-button block type="submit" variant="primary"
            >変更内容を保存</b-button
          >
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id;

    this.$store.dispatch("fetchUser", { id });
  },
  methods: {
    editUser(e) {
      const user = {
        uid: this.$store.getters.getGame.id,
        email: e.target.email.value,
        login: e.target.login.value,
        userName: e.target.userName.value,
        instGame: e.target.instGame.value
      };

      this.$store.dispatch("editGame", { game }).then(() => {
        setTimeout(() => {
          this.$router.push("/games");
        }, 1000);
      });
    }
  }
};
</script>
