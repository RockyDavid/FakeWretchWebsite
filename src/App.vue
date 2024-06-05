<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
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
  });


  var divMain = ref<HTMLDivElement>(null);
  var divLoading = ref<HTMLDivElement>(null);
  
  const handleGlobalLoading = (event: CustomEvent) => {
    if(event.detail.Loading)
    {
      divMain.value.classList.remove('div-global-show');
      divMain.value.classList.add('div-global-hide');
      setTimeout(function(){
        divLoading.value.style.display = 'block';
        divLoading.value.classList.remove('div-global-hide');
        divLoading.value.classList.add('div-global-show');
      }, 500);
    }
    else
    {
      divLoading.value.classList.remove('div-global-show');
      divLoading.value.classList.add('div-global-hide');
      setTimeout(function(){
        divLoading.value.style.display = 'none';
        divMain.value.classList.remove('div-global-hide');
        divMain.value.classList.add('div-global-show');
      }, 500);
    }
  };

  onMounted(() => {
    window.addEventListener('GlobalLoading', handleGlobalLoading as EventListener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('GlobalLoading', handleGlobalLoading as EventListener);
  });
</script>

<template>
  <img class="abs block w:full h:full left:0 top:0 object:cover pointer-events:none" src="https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
  <div class="abs block w:full h:full left:0 top:0 bg:radial-gradient(circle,rgba(0,0,0,.6)0%,rgba(0,0,0,0)100%)"></div>
  <div ref="divMain" class="abs inset:0 m:auto font:white rel max-width:1260 d:flex flex:col gap:10 p:50">
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
  <div ref="divLoading" class="div-loading text-align:center">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
  .div-loading { display: none; }
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
  @keyframes divGlobalShow {
    0%   { display: block; opacity: 0.0; }
    100% { display: block; opacity: 1.0; }
  }
  @keyframes divGlobalHide {
    0%   { display: block; opacity: 1.0; }
    99%  { display: block; opacity: 0.0; }
    100% { display: none;  opacity: 0.0; }
  }
  div.div-global-show {
    animation: divGlobalShow 0.5s forwards;
    -webkit-animation: divGlobalShow 0.5s forwards;
  }
  div.div-global-hide {
    animation: divGlobalHide 0.5s forwards;
    -webkit-animation: divGlobalHide 0.5s forwards;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    font-weight: bold;
    font-family: monospace;
    display: inline-grid;
    font-size: 100px;
    margin: 0 auto;
    margin-top: calc(50% - 300px);
  }
  .loader:before,
  .loader:after {
    content:"Loading...";
    grid-area: 1/1;
    -webkit-mask-size: 1.5ch 100%,100% 100%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-composite: xor;
            mask-composite:exclude;
    animation: l36-1 1s infinite;
  }
  .loader:before {
    -webkit-mask-image:
      linear-gradient(#000 0 0),
      linear-gradient(#000 0 0);
  }
  .loader:after {
    -webkit-mask-image:linear-gradient(#000 0 0);
    animation:
      l36-1  1s infinite,
      l36-2 .2s infinite cubic-bezier(0.5,200,0.5,-200);
  }

  @keyframes l36-1{
    0%   {-webkit-mask-position:0     0,0 0}
    20%  {-webkit-mask-position:.5ch  0,0 0}
    40%  {-webkit-mask-position:100%  0,0 0}
    60%  {-webkit-mask-position:4.5ch 0,0 0}
    80%  {-webkit-mask-position:6.5ch 0,0 0}
    100% {-webkit-mask-position:2.5ch 0,0 0}
  }
  @keyframes l36-2{
    100% {transform:translateY(0.2px)} 
  }
</style>
