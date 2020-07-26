<template>
  <article class="media">
    <span class="icon">
  <i class="fas fa-home"></i>
</span>
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="post.URL" alt="post image">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong> {{ post.title }} </strong>
          <small>@<router-link to="#">{{ user.name }}</router-link></small>
          <small v-if="post.created_at"> {{ postTime }}</small>
          <br>
          {{ post.description }}
        </p>
      </div>
      <nav class="level">
        <div class="level-left">
          <a class="level-item">
            <span class="icon has-text-info">
              <i class="fas fa-info-circle"></i>
            </span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
import moment from 'moment';

export default {
  props: ['post', 'user'],
  computed: {
    postTime() {
      return moment(this.post.created_at.toDate())
        .fromNow();
    },
  },
};
</script>
