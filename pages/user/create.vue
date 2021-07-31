<template>
  <div>
    <button @click="setNickname">set test</button>
    <div>user{{ userName }}</div>
    <!-- <div>user2{{ user2 }}</div> -->
    <div>getUser{{ getUser }}</div>

    <b-form @submit.prevent="addUser">
      <div class="container mt-5">
        <div class="row justify-content-center mb-3">
          <div class="col-12 col-sm-3">
            <h2>Create user</h2>
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
</template>

<script>
export default {
  data() {
    return {
      userName: null
    };
  },
  computed: {
    getUser() {
      return this.$store.getters["user"];
    }
    // user2: function() {
    //   return { ...this.data, uid: this.getUser.uid };
    // }
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
    },
    setNickname() {
      this.$store.dispatch("setNickname", {});
    }
  }
};
</script>
