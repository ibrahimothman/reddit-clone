<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="main container"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};

</script>
<style lang="scss">
  .main {
    margin-top: 2em;
  }
</style>
