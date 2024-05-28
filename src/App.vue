<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Banner from './components/Banner/Banner.vue'
import Alert from './components/Alert/Alert.vue';
import Menu from './components/Menu/Menu.vue';

onMounted(() => {
    window.dispatchEvent(new CustomEvent('alertinfo', { detail: { message: 'AAAAA' }}));
});
</script>

<template>
  <Alert />
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <Banner />
    <Menu />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

</style>
