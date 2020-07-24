<template>
  <b-menu>
    <b-menu-list label="Available Subreddits">
      <b-menu-item v-for="subreddit in subreddits" :key="subreddit.id"
        :label="subreddit.name"
        tag="router-link"
        :to="{name: 'Subreddit', params: {name: subreddit.name}}">
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  created() {
    this.bindSubreddits();
  },
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['bindSubreddits']),
};
</script>
