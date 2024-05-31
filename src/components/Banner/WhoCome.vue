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
      position: relative;
      display: inline-block;
      width: 500px;
      padding: 0px 120px;
      
    } 
    #whocome img {
      position: relative;
      display: inline-block;
      width: 82px;
    } 
</style>