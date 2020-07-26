<template>
  <b-navbar type="is-black">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Reddit Clone By IBRA
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
              <figcaption> {{ user.name }} </figcaption>
              <figure>
                <img class="is-rounded" :src="user.photoURL">
              </figure>

              <div class="buttons">
                <a v-if="isLoggedIn" class="button is-danger" @click="onLogOut()">
                    Logout
                </a>
                <a v-if="!isLoggedIn" class="button is-danger" @click="login()">
                    Login with Google
                </a>
              </div>
            </b-navbar-item>
        </template>

    </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'navbar',
  computed: {
    ...mapState('auth', ['isLoggedIn', 'user']),
  },
  methods: {
    ...mapActions('auth', ['login', 'logOut']),
    async onLogOut() {
      await this.logOut();
      this.$router.push('/');
    },
  },
};
</script>
