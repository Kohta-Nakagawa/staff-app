<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">JELLY STAFF APP</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/games">games</b-nav-item>
          <b-nav-item href="/manual">マニュアル</b-nav-item>
          <b-nav-item href="/games/addgame">ゲームを追加</b-nav-item>
          <b-nav-item href="/user">Profile</b-nav-item>
          <b-nav-item href="/user/create">add user</b-nav-item>
          <b-nav-item href="/signin">Sign in</b-nav-item>
          <b-nav-item href="/signout">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
