<script setup lang="ts">
      import { onMounted } from 'vue'
      onMounted(() => {
          let cursor = document.getElementById("myCursor");
          window.addEventListener("mousemove",function(e){
            let x = e.clientX;
            let y = e.clientY;
            cursor.style.left = x-25+"px"; 
            cursor.style.top = y-25+"px";
          })
      });
</script>

<template>
  <div class="#myCursor">
    <img id="myCursor" src="@/assets/cursor.webp" />
  </div>
</template>

<style scoped>
    html,body {
      cursor: none;
    }
    #myCursor {
      width: 30px;
      height: 30px;
      position: absolute;
    }
  #myCursor > img {
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
  }
</style>