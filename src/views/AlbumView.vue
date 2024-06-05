<script setup lang="ts">
  import AlbumList from '../components/AlbumList/AlbumList.vue';
  import { Banner }  from '../components/Banner/Banner.ts';
  Banner.Show();
</script>

<template>
  <main class="main">
    <AlbumList />
  </main>
</template>

<style>
  .main {
    position: relative;
    display: block;
    margin-bottom: 200px
  }
</style>
