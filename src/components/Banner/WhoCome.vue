<script setup lang="ts">
  import { User }  from '../../repositories/User.ts'
  const props = defineProps({
      whocome: {
        type: [Object as PropType<User>, null],
        required: true
      },
  })
</script>

<template>
  <div id="whocome">
      <img v-for="child in props.whocome" src="@/assets/noimg.webp" />
  </div>
</template>

<style scoped>
    #whocome {
      position: fixed;
      display: inline-block;
      width: 60px;
      z-index: 9999;
      top: 112px;
      left: 20px;
      text-align: center;
    } 
    #whocome img {
      position: relative;
      display: inline-block;
      width: 50px;
      border-radius: 50px;
      margin-left: 5px;
      border: 3px #000 solid;
      animation: whocomeimgmove 3s linear infinite;
    } 
  .logo:hover {
    animation: none;
    cursor: pointer;
  }
  @keyframes whocomeimgmove {
    0%{
      transform: rotate3d(0, 1, 0, 0deg);
    }
    100%{
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
</style>