<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import AlbumList from '../components/AlbumList/AlbumList.vue';
  import { Banner }  from '../components/Banner/Banner.ts';
  import { Loading }  from '../components/Global/Loading.ts';
  
  const comAlbumList = ref<AlbumList>(null);
  onMounted(() => {
    Loading.ShowAsync(() => {
      const divMain = document.getElementById('divMain');
      divMain.style.display = 'block';
      Banner.Show();
      comAlbumList.value.Show();
      Loading.HideAsync();
    });
  });
</script>

<template>
  <main id="divMain" class="main">
    <AlbumList ref="comAlbumList" />
  </main>
</template>

<style>
  .main {
    position: relative;
    display: none;
    margin-bottom: 200px
  }
</style>
