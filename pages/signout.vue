<template>
  <div>
    <button @click="signout">sign out</button>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      this.$store.dispatch("signout");
    }
  }
};
</script>
