<script setup lang="ts">

    const props = defineProps({
        welcome: {
          type: String,
          required: true
        }
    })
</script>

<template>
  <div class="marquee">(╯✧∇✧)╯{{ props.welcome }}(╯✧∇✧)╯</div>
</template>

<style scoped>
  .marquee {
      width: 1024px;
      overflow: hidden;
      white-space: nowrap;
      box-sizing: border-box;
      animation: marquee-2480862e 3s linear infinite;
      padding: 10px 0;
      color: #FFF;
      text-align: center;
      position: absolute !important;
      top: 0;
      left: 0;
      z-index: 9999;
      font-size: 30px;
  }
  @keyframes marquee {
      0% { transform: translateX(23%); }
      50% { transform: translateX(43%); }
      100% { transform: translateX(23%); }
  }

</style>