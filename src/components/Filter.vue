<template>
  <form @keyup.prevent.enter >
    <b-field label="search">
        <b-input v-model="searchTerm"></b-input>
    </b-field>
  </form>
</template>

<script>
/* eslint-disable object-shorthand */
export default {
  props: ['onSearchTermChanged'],
  data: () => ({
    searchTerm: '',
  }),
  watch: {
    searchTerm: function (newValue) {
      this.onSearchTermChanged(newValue);
    },
  },
};
</script>
