<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import Banner from './components/Banner/Banner.vue';
  import Alert from './components/Alert/Alert.vue';
  import { Notify } from './components/Alert/Notify.ts';
  import MenuList from './components/MenuList/MenuList.vue';
  import MusicPlayer from './components/MusicPlayer/Player.vue';
  import Clock from './components/Clock/Clock.vue';
  import WhoCome from './components/Banner/WhoCome.vue';
  import { User, getWhoComes9Async }  from './repositories/User.ts'

  var whocome = ref<User[]>([new User(-1, '')]);
    getWhoComes9Async().then( response => { 
        whocome.value = response 
    })
  onMounted(() => {
      //Notify.Info('Test');
  });
</script>

<template>
  <img class="abs block w:full h:full left:0 top:0 object:cover pointer-events:none" src="https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
  <div class="abs block w:full h:full left:0 top:0 bg:radial-gradient(circle,rgba(0,0,0,.6)0%,rgba(0,0,0,0)100%)"></div>
  <div class="abs inset:0 m:auto font:white rel max-width:1260 d:flex flex:col gap:10 p:50">
    <Alert />
    <MouseImage />
    <MusicPlayer />
    <Clock />
    <WhoCome :whocome="whocome" />
    <header>
      <img alt="Wretch" class="logo" src="@/assets/logo.jpg" />
      <Banner />
      <MenuList />
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
  header {
    line-height: 1.5;
    text-align: center;
  }
  .logo {
    display: block;
    margin: 0 auto 2rem;
    border-radius: 50%;
    border: 5px #fff solid;
    height: 95px;
    position: fixed;
    z-index: 999;
    top: 6px;
    left: 6px;
    animation: logomove 3s linear infinite;
  }
  .logo:hover {
    animation: none;
    cursor: pointer;
  }
  @keyframes logomove {
    0%{
      transform: rotate3d(0, 1, 0, 0deg);
    }
    100%{
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
</style>
