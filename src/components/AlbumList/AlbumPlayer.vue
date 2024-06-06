<script setup lang="ts">
  import { ref, nextTick  } from 'vue'
  import { Album, getPhotosAsync }  from '../../repositories/Album.ts';
  import { common }  from '../../helper/common.ts';

  const emit = defineEmits(['click:Close','on:Loaded']);
  const divPlayerBox = ref<HTMLDivElement>(null);

  const divPhoto = ref<HTMLDivElement>(null);
  const imgPhoto = ref<HTMLImageElement>(null);
  const photos = ref<Album[]>([]);
  const ablumName = ref<string>('');
  const photoIndex = ref<number>(0);
  const isFirstImageLoaded = ref<boolean>(true);
  const isLoaded = ref(false);
  const Open = (name: string, albumIdx: number, idx: number) => {
    const max = common.RandomNum(5, 60);
    photoIndex.value = idx;
    getPhotosAsync(albumIdx, max).then((response: Album[]) => {
      photos.value = response;
      ablumName.value = name;
      divPlayerBox.value.style.display = 'block';
      isFirstImageLoaded.value = true;
      loadImage();
      emit('on:Loaded');
    });
  };
  
  const Close = (idx: number) => {
    photos.value = [];
    divPlayerBox.value.style.display = 'none';
  };
  defineExpose({ Open, Close });

  function close()
  {
    emit('click:Close');
  }

  function loadImage() {
    imgPhoto.value.onload = async () => {
      await nextTick();
      imgPhoto.value.style.paddingLeft = '0px';
      imgPhoto.value.style.paddingTop = '0px';
      imgPhoto.value.style.visibility = 'hidden';

      setTimeout(() => {
        console.log(divPhoto.value);
        const boxW = divPhoto.value.offsetWidth;
        if(boxW == 0)
        {
          loadImage()
          return;
        }
        const boxH = divPhoto.value.offsetHeight;
        const divAspectRatio = boxW / boxH;
        console.log(boxW, boxH, divAspectRatio);
        
        const imgW = imgPhoto.value.naturalWidth;
        const imgH = imgPhoto.value.naturalHeight;
        const imgAspectRatio = imgW / imgH;
        const fixW = imgW * boxH / imgH;
        const fixH = imgH * boxW / imgW;

        console.log(imgW, imgH, imgAspectRatio);
        
        if (imgW > imgH) {
          imgPhoto.value.style.paddingLeft = '0px';
          imgPhoto.value.style.width = '100%';
          imgPhoto.value.style.height = 'auto';
          imgPhoto.value.style.paddingTop = `${(boxH - fixH ) / 2}px`;
          console.log('paddingTop', (boxH - fixH) / 2);
        } else {
          imgPhoto.value.style.width = 'auto';
          imgPhoto.value.style.height = '100%';
          imgPhoto.value.style.paddingLeft = `${(boxW - fixW) / 2}px`;
          console.log('paddingLeft', (boxW - fixW) / 2);
          imgPhoto.value.style.paddingTop = '0px';
        }
        imgPhoto.value.style.visibility = 'visible';
      }, 300);
    }
    imgPhoto.value.src = photos.value[photoIndex.value].image;
  }


  function doPrev() {
    photoIndex.value = (photoIndex.value === 0) ? photos.value.length - 1 : photoIndex.value - 1;
    loadImage();
  }
  function doNext() {
    photoIndex.value = (photoIndex.value === photos.value.length - 1) ? 0 : photoIndex.value + 1;
    loadImage();
  }
</script>

<template>
  <div ref="divPlayerBox" class="album-player abs z-999 none w:100% h:100% top:0 left:0 bg:black/1 overflow:hidden">
    <div class="header z-10 pl:12px bb:1px|solid|white/.3 bg:white/.3">
      <h3 class="name"> {{ `${ablumName} - ${photoIndex+1} / ${photos.length}`  }} </h3>
      <div class="close abs top:0 right:0 p:3px w:25px h:28px bg:red-60 bg:fade-60:hover" @click="close"></div>
    </div>
    <a class="prev abs z-9 top:29px font:80px font-color:transparent font-color:white:hover pt:25% pl:65px" @click="doPrev"></a>
    <div ref="divPhoto" class="photo rel block w:100% h:100%"><img ref="imgPhoto" /></div>
    <a class="next abs z-9 top:29px right:0 font:80px font-color:transparent font-color:white:hover pt:25% pl:65px" @click="doNext"></a>
  </div>
</template>

<style scoped>
  .z-999 { z-index: 999; }
  .z-10 { z-index: 10; }
  .z-9 { z-index: 9; }
  .z-8 { z-index: 8; }
  .prev,
  .next {
    width: calc(100% / 6);
    height: calc(100% - 29px);
    cursor: pointer;
  }

  .prev:before {
    content: '◀';
  }
  .next:before {
    content: '▶';
  }
  
  .close   {
    cursor: pointer;
  }
  .close:before, .close:after {
      position: absolute;
      left: 11px;
      content: ' ';
      height: 22px;
      width: 3px;
      background-color: #FFF;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
</style>