<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import PostListRow from './PostListRow.vue';
  import Pagination from './Pagination.vue';
  import { Post, PostReactions, getPostsAsync }  from '../../repositories/Post.ts';

  const router = useRouter();
  const posts = ref<Post[]>([]);
  const pageCurrent = ref<number>(1); 
  const pageCount = ref<number>(10); 
  
  function updatePageCurrent(page: number)
  {
    pageCurrent.value = page;
    getPostsAsync(pageCurrent.value, pageCount.value).then(response => { 
      posts.value = response 
    })
  }

  function goToPost(postId: number)
  {
    router.push('/post/' + postId);
  }
</script>

<template>
  <div class="post-list">
    <PostListRow :post="post" v-for="post in posts" :key="post.id" @click="goToPost(post.id)" />
    <Pagination :pageCurrent="pageCurrent" :pageCount="pageCount" @update:pageCurrent="updatePageCurrent" />
  </div>
</template>

<style scoped>
  .post-list {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
    background: #b5b2ff;
    border-radius: 15px;
    padding: 5px 20px;
    overflow: hidden;

    > * {
      position: relative;
    }

    &::before {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: " ";
      background-image: linear-gradient(90deg, transparent 20px, #dee2e6 5px);
      background-size: 25px 100%;
      background-repeat: repeat;
      transform: rotate(30deg) scale(5);
    }
  }
</style>