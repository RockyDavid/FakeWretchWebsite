<script setup lang="ts">
  import { ref } from 'vue'
  import Welcome  from './Welcome.vue'
  import WhoCome  from './WhoCome.vue'
  import Marquee  from './Marquee.vue'
  import Slide  from './Slide.vue'
  import { Banner, getBannerAsync }  from '../../repositories/Banner.ts'
  import { Like, getLikeAsync }  from '../../repositories/Like.ts'
  import { User, getWhoComes9Async }  from '../../repositories/User.ts'


  var banner = ref<Banner>(new Banner(-1, '', ''));
  var like = ref<Like>(new Like(-1, '', ''));
  var whocome = ref<User[]>([new User(-1, '')]);
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
    getWhoComes9Async().then( response => { 
        whocome.value = response 
    })

    
</script>

<template>
  <div id="banner">
    <Marquee :welcome="banner.title"/>
    <Slide :imgs="imgs" />
    <WhoCome :whocome="whocome" />
    <Welcome :key="banner.id" :banner="banner" :like="like" />
  </div>
</template>

<style scoped>
#banner {
  width: 100%;
  height: 610px;
  background: #b5b2ff;
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
    transform: rotate(30deg) scale(5);
  }
}


</style>