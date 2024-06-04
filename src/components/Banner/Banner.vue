<script setup lang="ts">
  import { ref } from 'vue'
  import Welcome  from './Welcome.vue'
  import WhoCome  from './WhoCome.vue'
  import Marquee  from './Marquee.vue'
  import Slide  from './Slide.vue'
  import { Banner, getBannerAsync }  from '../../repositories/Banner.ts'
  import { Like, getLikeAsync }  from '../../repositories/Like.ts'


  var banner = ref<Banner>(new Banner(-1, '', ''));
  var like = ref<Like>(new Like(-1, '', ''));
  var imgs = ref<String[]>([
    "https://media.istockphoto.com/id/473082752/photo/fresh-flowers-in-ice-cream-cone-still-life.jpg?s=2048x2048&w=is&k=20&c=Go9d6_6jR2Ti8W23c50jMhji82dY30Z1sUvQJRS233I=",
    "https://media.istockphoto.com/id/1154103408/photo/bicycle-delivery-guy.jpg?s=2048x2048&w=is&k=20&c=iYxN5Xedb41TpqERwVi87XvTPHTlG1b4RnT7lWidUws=",
    "https://media.istockphoto.com/id/1159164272/photo/cake-preparing.jpg?s=2048x2048&w=is&k=20&c=o1ZfnrVo7JskblMO5zCATrD7qM1XNjtOUztIGHjN0BI="
  ]);
    
    getBannerAsync().then( response => { 
        banner.value = response 
    })
    getLikeAsync().then( response => { 
        like.value = response 
    })

    
</script>

<template>
  <div id="banner" class="d:flex px:12 r:10 bd:blur(3) b:1;solid;white/.1 bg:black/.3 blend:hard-light">
    <Marquee :welcome="banner.title"/>
    <Slide :imgs="imgs" />
    <Welcome :key="banner.id" :banner="banner" :like="like" />
  </div>
</template>

<style scoped>
#banner {
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 1.5rem;
  overflow: hidden;
}



</style>