<template>
  <div>
    <p v-if="getUser.login">
      <span>ログインに成功！</span>
      {{ getUser }}
    </p>
    <p v-else>ログインしてないよ</p>
    <form class="form" @submit.prevent>
      <label>
        <span>
          email
        </span>
        <input class="input" type="text" v-model="email" />
      </label>
      <label>
        <span>
          password
        </span>
        <input class="input" type="password" v-model="password" />
      </label>
      <button class="button" type="submit" @click="login">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    getUser() {
      return this.$store.getters["getUser"];
    }
  },
  methods: {
    login(email, password) {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
