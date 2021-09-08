<template>
  <div class="container">
    <div class="row mb-4 bg-light p-2">
      <div
        v-for="(user, key) in $store.getters.getUsers"
        :key="key"
        class="row"
      >
        <div class="col-4">
          {{ user.uid }}
        </div>
        <div class="col-4">
          {{ user.email }}
        </div>
        <div class="col-4">
          {{ user.userName }}
        </div>
        <div class="col-4">
          {{ user.instGame }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      uid: "",
      email: "",
      login: false,
      userName: null,
      instGame: []
    };
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    }
  },
  methods: {
    // login(email, password) {
    //   this.$store.dispatch("login", {
    //     email: this.email,
    //     password: this.password
    //   });
    // }
  }
};
</script>
