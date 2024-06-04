<script setup lang="ts">

  import { ref, onMounted, nextTick } from 'vue';
  const props = defineProps({
    imgs: {
      type: Array as PropType<string[]>,
      required: true
    }
  })

    let slideIndex = ref(0);
    const slides = ref<Element[]>([]);

    function showSlides() {
      slides.value[slideIndex.value].classList.remove('slideshow', 'slidehide');
      slides.value[slideIndex.value].classList.add('slidehide');
      slideIndex.value = (slideIndex.value == slides.value.length-1) ? 0 : slideIndex.value + 1;
      slides.value[slideIndex.value].classList.remove('slideshow', 'slidehide');
      slides.value[slideIndex.value].classList.add('slideshow');
      setTimeout(showSlides, 5000);
    }


    onMounted(() => {
      nextTick(() => {
        slides.value = Array.from(document.getElementsByClassName('slides')) as Element[];
        slides.value[0].style.opacity = 1;
        setTimeout(showSlides, 2500);
      });
    });
</script>

<template>
    <div class="slideshow-container" :onmouseenter="mouseEnter" :onmouseleave="mouseLeave">
      <img class="slides" v-for="(imgsrc, index) in imgs" :key="index" :src="imgsrc" />
    </div>
</template>

<style scoped>
  #whocome {
    position: relative;
    display: inline-block;
    padding: 0px 120px;
  } 
  #whocome img {
    position: relative;
    display: inline-block;
    width: 80px;
    cursor: pointer;
    z-index: 990;
    padding: 0 3px;
  }
    /* 照片轮播墙 */
    .slideshow-container {
      position: relative;
      overflow: hidden;
      display: inline-block;
      left: 0;
      width: 500px;
      height: 260px;
      padding: 0;
      margin-left: -40px;
      margin-right: 40px;
    }
    .slides {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
    }
    @keyframes slideshow {
        0% {
          transform: translateX(100%);
          opacity: 1;
        }
        100% {
          transform: translateX(0%);
          opacity: 1;
        }
    }
    @keyframes slidehide {
        0% {
          transform: translateX(0%);
          opacity: 1;
        }
        100% {
          transform: translateX(-100%);
          opacity: 0;
        }
    }
    .slides.slideshow {
      animation: slideshow 5s alternate forwards;
    }
    .slides.slidehide {
      animation: slidehide 5s alternate forwards;
    }
</style>