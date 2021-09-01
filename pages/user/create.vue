<template>
  <div>
    {{ getUser.userName === null }}
    <div v-if="getUser.userName === null">
      <b-form @submit.prevent="addUser">
        <div class="container mt-5">
          <div class="row justify-content-center mb-3">
            <div class="col-12 col-sm-3">
              <h2>ユーザー名を登録</h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-12 col-sm-3">
              <b-form-group label="name" label-for="name">
                <b-form-input
                  id="name"
                  v-model="userName"
                  required
                  placeholder="ここにニックネームを入れてね"
                ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <div class="row justify-content-center mt-3">
            <div class="col-12 col-sm-3">
              <b-button block type="submit" variant="primary">Create</b-button>
            </div>
          </div>
        </div>
      </b-form>
    </div>
    <div v-else>名前は登録済だよ</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchGames");
    this.$store.dispatch("fetchUsers");
  },
  data() {
    return {
      userName: null
    };
  },
  computed: {
    getUser() {
      return this.$store.getters["getUser"];
    }
  },
  methods: {
    addUser() {
      const userData = {
        uid: this.getUser.uid,
        email: this.getUser.email,
        login: false,
        userName: this.userName,
        instGame: []
      };
      this.$store.dispatch("addUser", userData).then(() => {
        alert("Successfully created user");
      });
    }
  }
};
</script>
