<template>
  <div id="app">
    <b-navbar type="is-black">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Reddit Clone By IBRA
            </b-navbar-item>
        </template>

    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
