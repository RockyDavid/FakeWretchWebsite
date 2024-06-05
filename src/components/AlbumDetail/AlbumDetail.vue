<script setup lang="ts">
  import { ref } from 'vue'
  import { Album, getPhotosAsync }  from '../../repositories/Album.ts';
  import { useAlbumPermitStore } from '../AlbumList/AlbumPermitStore.ts';
  import AlbumPlayer from '../AlbumList/AlbumPlayer.vue';
  import { Banner }  from '../Banner/Banner.ts';
  import { Loading }  from '../Global/Loading.ts';
  const store = useAlbumPermitStore();
    
  const props = defineProps({
    albumId: {
      type: Number,
      required: true
    },
    albumIdx: {
      type: Number,
      required: true
    }
  })

  const ablumPlayerContent = ref<HTMLDivElement>(null);
  const ablumContent = ref<HTMLDivElement>(null);
  
  const alblumPlayer = ref<AlbumPlayer>(null);
  const noPermit = !store.check(props.albumId);
  const idx = store.getIdx(props.albumId);
  var photos = ref<Album[]>([]);
  if (!noPermit) {
    getPhotosAsync(idx, 30).then((response: Album[]) => {
      photos.value = response;
    });
  }
  function onAlbumPlayerLoaded()
  {
    Loading.HideAsync();
  }
  function openAlbumPlayer(idx: number)
  {
    ablumPlayerContent.value.style.display = 'block';
    ablumContent.value.style.display = 'none';
    Loading.ShowAsync(() => {
      alblumPlayer.value.Open(name, props.albumIdx, idx);
    });
  }
  function clickCloseAlbumPlayer()
  {
    ablumPlayerContent.value.style.display = 'none';
    ablumContent.value.style.display = 'block';
    Loading.ShowAsync(() => {
      alblumPlayer.value.Close();
      Loading.HideDelayAsync();
    });
  }
</script>

<template>
    <div ref="ablumPlayerContent" class="ablum-player-content">
      <AlbumPlayer ref="alblumPlayer" @click:Close="clickCloseAlbumPlayer" @on:Loaded="onAlbumPlayerLoaded" />
    </div>
    <div v-if="!noPermit" ref="ablumContent" class="ablum-content bg:white/.3 text-align:center">
      <div class="masonry">
        <div class="photo-box w:100% r:10 b:1;solid;white/.1 bg:black overflow:hidden  font-size:12px z-index:19" v-for="(photo, idx) in photos" :key="photo.id" @click="openAlbumPlayer(idx)">
          <h2 class="photo-name position:absolute w:100% h:30px overflow:hidden left:0 top:0 bg:black/.3 z-index:10"> {{ photo.name }} </h2>
          <img class="photo-img" :src="photo.image" />
          <div class="clear-both"></div>
        </div>
      </div>
    </div>
    <h2 v-if="noPermit" class="color:red bg:black/.8 w:100% text-align:center"> 沒有密碼無法訪問 </h2>
</template>

<style  scoped>
  .ablum-player-content {
    position: relative;
    display: none;
    width: 100%;
    height: 775px;
  }
  .ablum-content {
    width: 100%;
    overflow-y: scroll;
    height: 775px;
  }
  .masonry {
    width: 100%;
    height: max-content;
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
    column-gap: 6px;
  }
  .photo-box {
    width: 100%;
    position: relative;
    margin-bottom: 2%;
    padding: 5px;
    box-sizing: border-box;
    margin: 0 auto 5px;
    break-inside: avoid;
    cursor: pointer;
  }
  div.photo-box::before {
    counter-increment: items;
    content: counter(items);
  }

  /* Re-order items into 3 rows */
  .photo-box:nth-of-type(5n+1) { order: 1; }
  .photo-box:nth-of-type(5n+2) { order: 2; }
  .photo-box:nth-of-type(5n+3) { order: 3; }
  .photo-box:nth-of-type(5n+4) { order: 4; }
  .photo-box:nth-of-type(5n)   { order: 5; }

  .break {
    flex-basis: 100%;
    width: 0;
    border: 1px solid #ddd;
    margin: 0;
    content: "";
    padding: 0;
  }

  .photo-box > .photo-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: 0;
    position: relative;
    display: block;
  }
</style>