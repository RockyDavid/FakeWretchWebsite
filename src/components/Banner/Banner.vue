<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import Welcome  from './Welcome.vue'
  import WhoCome  from './WhoCome.vue'
  import Marquee  from './Marquee.vue'
  import Slide  from './Slide.vue'
  import { Banner, getBannerAsync }  from '../../repositories/Banner.ts'
  import { Like, getLikeAsync }  from '../../repositories/Like.ts'
  import { Album, getPhotosWithQueryAsync }  from '../../repositories/Album.ts';


  var bannerUI = ref<HTMLElement>(null);
  var banner = ref<Banner>(new Banner(-1, '', ''));
  var like = ref<Like>(new Like(-1, '', ''));
  var imgs = ref<String[]>([]);
  
  getPhotosWithQueryAsync('Barbecue', 5).then( response => { 
    imgs.value = response 
  })
  getBannerAsync().then( response => { 
    banner.value = response 
  })
  getLikeAsync().then( response => { 
    like.value = response 
  })

  const handleBannerShow = (event: CustomEvent) => {
    bannerUI.value.style.display = 'flex';
  };
  const handleBannerHide = (event: CustomEvent) => {
    bannerUI.value.style.display = 'none';
  };

  onMounted(() => {
    bannerUI.value = document.getElementById('banner') as HTMLElement;
    window.addEventListener('bannershow', handleBannerShow as EventListener);
    window.addEventListener('bannerhide', handleBannerHide as EventListener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('bannershow', handleBannerShow as EventListener);
    window.removeEventListener('bannerhide', handleBannerHide as EventListener);
  });
    
</script>

<template>
  <div id="banner" class="d:flex px:12 r:10 bd:blur(3) b:1;solid;white/.1 bg:black/.3" ref="">
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