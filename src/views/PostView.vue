<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import PostContent from '../components/PostContent/PostContent.vue'
  const route = useRoute();
  const postId = route.params.id;
  
</script>

<template>
  <div class="post">
    <PostContent :postId="postId" />
  </div>
</template>

<style scoped>
  .post {
    position: relative;
    display: block;
    margin-bottom: 200px;
  }
</style>
