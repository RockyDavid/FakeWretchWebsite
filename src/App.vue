<script setup lang="ts">
  import { onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import Banner from './components/Banner/Banner.vue'
  import Alert from './components/Alert/Alert.vue';
  import MenuList from './components/MenuList/MenuList.vue';
  import MusicPlayer from './components/MusicPlayer/Player.vue';
  import Curosr from './components/Curosr/Curosr.vue';

  onMounted(() => {
      window.dispatchEvent(new CustomEvent('alertinfo', { detail: { message: 'AAAAA' }}));
  });
</script>

<template>
  <Alert />
  <Curosr />
  <!-- MusicPlayer /-->
  <header>
    <img alt="Wretch" class="logo" src="@/assets/wretch.png" />
    <Banner />
    <MenuList />
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    line-height: 1.5;
    text-align: center;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
</style>
