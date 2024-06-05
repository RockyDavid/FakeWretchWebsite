<script setup lang="ts">
  import PostList from '../components/PostList/PostList.vue';
  import { Banner }  from '../components/Banner/Banner.ts';
  Banner.Show();
</script>

<template>
  <main class="main">
    <PostList />
  </main>
</template>

<style scoped>
  .main {
    position: relative;
    display: block;
    margin-bottom: 200px
  }
</style>
