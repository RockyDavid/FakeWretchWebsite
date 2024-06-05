<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import PostContent from '../components/PostContent/PostContent.vue'
  import { Banner }  from '../components/Banner/Banner.ts';
  Banner.Hide();
  const route = useRoute();
  const postId = route.params.id;
  const showId = route.params.showId;
</script>

<template>
  <div class="post">
    <PostContent :postId="postId" :showId="showId" />
  </div>
</template>

<style scoped>
  .post {
    position: relative;
    display: block;
    margin-bottom: 200px;
  }
</style>
