<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import AlbumDetail from '../components/AlbumDetail/AlbumDetail.vue';
  import { Banner }  from '../components/Banner/Banner.ts';
  Banner.Hide();
  const route = useRoute();
  const albumId = route.params.id;
  const albumIdx = route.params.idx;
</script>

<template>
  <main class="main">
    <AlbumDetail :albumId="albumId" :albumIdx="albumIdx" />
  </main>
</template>

<style>
  .main {
    position: relative;
    display: block;
    margin-bottom: 200px
  }
</style>
