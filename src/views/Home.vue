<template>
  <div class="home">
    <b-button type="is-danger" @click="login()">Sign in with Goolge</b-button>
    <b-button type="is-danger" @click="logOut()">Logout</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions('auth', ['login', 'logOut']),
  },
};
</script>
