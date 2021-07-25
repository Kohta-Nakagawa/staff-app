<template>
  <div>
    {{ user }} {{ gotuser.uid }}
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
                v-model="user.name"
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
      user: {
        uid: "",
        // uid: "gotuser.uid", ←これを入れたいです。
        email: "",
        login: false,
        userName: null,
        instGame: []
      }
    };
  },
  computed: {
    gotuser() {
      return this.$store.getters["user"];
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser", { user: this.user }).then(() => {
        this.user.name = null;
        this.user.age = null;

        alert("Successfully created user");
      });
    }
  }
};
</script>
