<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const cursor = ref<HTMLElement>(null)
    const handleCursorChange = (event: CustomEvent) => {
      switch(event.detail.type)
      {
        default:
          cursor.value.style.backgroundImage = 'url(src/assets/cursor.webp)';
          break;
        case 'pointer':
          cursor.value.style.backgroundImage = 'url(src/assets/pointer.png)';
          break;
      }
    };
    onMounted(() => {
        cursor.value = document.getElementById("myCursor");
        window.addEventListener("mousemove",function(e){
          let x = e.clientX;
          let y = e.clientY;
          cursor.value.style.left = x-25+"px"; 
          cursor.value.style.top = y-25+"px";
        });
        window.addEventListener('cursorChange', handleCursorChange as EventListener);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('cursorChange', handleCursorChange as EventListener);
    });
</script>

<template>
  <div id="myCursor"></div>
</template>

<style scoped>
  #myCursor {
    width: 30px;
    height: 30px;
    position: fixed;
    background-image: url('src/assets/cursor.webp');
    background-size: cover;
    z-index: 999;
    transform: translate(15px, 15px) rotateY(180deg);
    pointer-events: none;
  }
</style>