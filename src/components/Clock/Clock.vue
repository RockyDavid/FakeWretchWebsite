<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Flipper from './Flipper.vue';

  const hour = ref('00');
  const minute = ref('00');
  const second = ref('00');

  const hourFlipper = ref(null);
  const minuteFlipper = ref(null);
  const secondFlipper = ref(null);
  const setTime = () => {
    const date = new Date();
    const newHour = String(date.getHours()).padStart(2, '0');
    const newMinute = String(date.getMinutes()).padStart(2, '0');
    const newSecond = String(date.getSeconds()).padStart(2, '0');

    if (hour.value !== newHour) {
      hour.value = newHour;
      hourFlipper.value.flip(newHour);
    }
    if (minute.value !== newMinute) {
      minute.value = newMinute;
      minuteFlipper.value.flip(newMinute);
    }
    if (second.value !== newSecond) {
      second.value = newSecond;
      secondFlipper.value.flip(newSecond);
    }
    setTimeout(setTime, 1000);
  };

  onMounted(() => {
    setTime();
  });
</script>

<template>
  <div class="clock-box">
  <div class="clock-html"><div class="clock-body">
    <div class="clock">
      <Flipper :number="hour" ref="hourFlipper" />
      <Flipper :number="minute" ref="minuteFlipper" />
      <Flipper :number="second" ref="secondFlipper" />
    </div>
  </div></div>
  </div>
</template>

<style scoped>
  .clock-box {
    position: fixed;
    top: 6px;
    right: 6px;
    width: 128px;
    height: 33px;
    z-index: 999;
    cursor:default;
  }
  .clock-html {
    box-sizing: border-box;
  }
  

  .clock-html *,
  .clock-html *::before,
  .clock-html *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  .clock-body {
    margin: 0;
    display: flex;
    color: #fff;
    font-family: "Saira Extra Condensed", sans-serif;
  }
  .clock {
    display: grid;
    padding: 0 12px;
    grid-template-columns: 35px 35px 35px;
    grid-column-gap: 3px;
    min-width: 5px;
    height: 40px;
    background-image: transparent;
  }
</style>