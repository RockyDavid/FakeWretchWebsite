

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  number: {
    type: String,
    required: true
  }
});

const flipper = ref(null);

const flip = (newNumber) => {
  const el = flipper.value;

  const top = el.querySelector('.top');
  const bottom = el.querySelector('.bottom');
  const newTop = top.cloneNode(true);
  const newBottom = bottom.cloneNode(true);
  newTop.classList.add("new");
  newBottom.classList.add("new");
  newBottom.querySelector(".text").textContent = newNumber;
  el.querySelector(".top").insertAdjacentElement('afterend', newTop);
  newTop.appendChild(newBottom);
  el.classList.add("flipping");
  top.querySelector(".text").textContent = newNumber;

  setTimeout(function () {
    bottom.querySelector(".text").textContent = newNumber;
    newTop.remove();
  }, 500);
};

watch(() => props.number, (newNumber) => {
  flip(newNumber);
});

defineExpose({ flip });
</script>

<template>
  <div class="flipper" ref="flipper">
    <div class="gear"></div>
    <div class="gear"></div>
    <div class="top">
      <div class="text">{{ number }}</div>
    </div>
    <div class="bottom">
      <div class="text">{{ number }}</div>
    </div>
  </div>
</template>

<style scoped>
/* Your existing styles for the flipper */
.flipper {
  position: relative;
  width: 100%;
  min-width: 35px;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 1600px;
}
.gear {
  position: absolute;
  top: 5px;
  width: 3px;
  height: 18px;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #666666 17%,
    #7f7f7f 52%,
    #7f7f7f 52%,
    #0c0c0c 53%,
    #595959 87%,
    #131313 100%
  );
  outline: 3px solid #000;
  z-index: 99;
  transform-style: preserve-3d;
  transform: translateZ(10px);
  perspective: 0;
}
.gear:nth-child(2) {
  left: calc(100% - 4px);
}
.top,
.bottom {
  box-shadow: 0 6px 6px 1px rgba(0, 0, 0, 0.5),
    0 2px 2px 1px rgba(255, 255, 255, 0.15);
  border-top: 2px solid rgb(102, 103, 110);
  border-bottom: 2px solid #000;
}
.top {
  position: relative;
  width: 100%;
  height: calc(50% - 2px);
  background-image: linear-gradient(rgb(48, 49, 53) 0%, rgb(56, 57, 62) 100%);
  border-top-left-radius: calc(var(--radius) * 0.65);
  border-top-right-radius: calc(var(--radius) * 0.65);
}
.bottom {
  position: relative;
  width: 100%;
  height: calc(50% - 2px);
  margin-top: -5px !important;
  background-image: linear-gradient(rgb(57, 58, 63) 0%, rgb(65, 65, 71) 100%);
  border-bottom-left-radius: calc(var(--radius) * 0.65);
  border-bottom-right-radius: calc(var(--radius) * 0.65);
}
.text {
  font-size: 18px;
  display: block;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  line-height: 25px;
  text-align: center;
}
.bottom .text {
  line-height: 0;
}
.top.new,
.bottom.new {
  position: absolute;
  left: 0;
  z-index: 12;
}
.top.new {
  top: 0;
  z-index: 1;
}
.top.new .text {
  backface-visibility: hidden;
}
.bottom.new {
  position: absolute;
  top: 0;
  height: 100%;
  transform: rotateX(0.5turn);
  z-index: 1;
  opacity: 0;
}
.flipper.flipping .top.new {
  transform-origin: bottom center;
  animation: flippertop var(--rotationtime) 1 ease-in-out forwards;
}
.flipper.flipping .bottom.new {
  animation: flipperbottom var(--rotationtime) 1 ease-in-out forwards;
}
@keyframes flipperbottom {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  75% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flippertop {
  0% {
    transform: rotateX(0) translateY(0px);
  }
  25% {
    transform: rotateX(-45deg) translateY(2.5px);
  }
  50% {
    transform: rotateX(-90deg) translateY(5px);
  }
  75% {
    transform: rotateX(-135deg) translateY(7.5px);
  }
  100% {
    transform: rotateX(-180deg) translateY(10px);
  }
}
</style>