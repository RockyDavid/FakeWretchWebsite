<script setup lang="ts">

    import { ref, onMounted, watchEffect } from 'vue';
    const props = defineProps({
        imgs: {
          type: Array as PropType<string[]>,
          required: true
        }
    })

    let slideIndex = ref(0);
    const slides = ref<Element[]>([]);

    function showSlides() {
      slides.value[slideIndex.value].classList.remove('show', 'hide');
      slides.value[slideIndex.value].classList.add('hide');
      slideIndex.value = (slideIndex.value == slides.value.length-1) ? 0 : slideIndex.value + 1;
      slides.value[slideIndex.value].classList.remove('show', 'hide');
      slides.value[slideIndex.value].classList.add('show');
      setTimeout(showSlides, 5000);
    }

    onMounted(() => {
      slides.value = Array.from(document.getElementsByClassName('slides')) as Element[];
      slides.value[0].style.opacity = 1;
      setTimeout(showSlides, 5000);
    });
</script>

<template>
    <div class="slideshow-container">
      <img class="slides fade" v-for="(imgsrc, index) in imgs" :key="index" :src="imgsrc" />
    </div>
</template>

<style scoped>
    /* 照片轮播墙 */
    .slideshow-container {
      max-width: 500px;
      height: 300px;
      position: relative;
      margin: auto;
      overflow: hidden;
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
    .slides.show {
      animation: slideshow 5s alternate forwards;
    }
    .slides.hide {
      animation: slidehide 5s alternate forwards;
    }
</style>