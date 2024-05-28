<script setup lang="ts">
    import { ref } from 'vue'
    import Welcome  from './Welcome.vue'
    import { Banner, getBanner }  from '../../repositories/Banner.ts'
    import { Like, getLike }  from '../../repositories/Like.ts'


    var banner = ref<Banner>(new Banner(-1, '', ''));
    var like = ref<Like>(new Like(-1, '', ''));
    
    getBanner().then( response => { 
        banner.value = response 
    })
    getLike().then( response => { 
        like.value = response 
    })
    
</script>

<template>
  <div id="banner">
    <Welcome :key="banner.id" :banner="banner" :like="like" />
    <Menu />
  </div>
</template>

<style scoped>
#banner {
  height: 310px;
  background: #2D3250;
  position: relative;
  display: inline-block;
  padding: 1.5rem;
  border: 3px solid #7E8EF1;
  border-radius: 20px;
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
    transform: rotate(30deg) scale(2);
  }
}


</style>