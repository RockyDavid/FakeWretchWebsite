<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { Notify } from '../Alert/Notify.ts';
  import AlbumListCell from './AlbumListCell.vue';
  import AlbumPlayer from './AlbumPlayer.vue';
  import { Album, getAlbumAsync }  from '../../repositories/Album.ts';
  import Pagination from '../PostList/Pagination.vue';
  import { Banner }  from '../Banner/Banner.ts';
  Banner.Show();

  const divAlbumList = ref<HTMLElement>(null);
  const alblumPlayer = ref<AlbumPlayer>(null);
  const pagination = ref<Pagination>(null);
  const albums = ref<Album[]>([]);
  const pageCurrent = ref<number>(1); 
  const pageCount = ref<number>(10); 
  const pageEnd = ref<number>(3); 

  function updatePageCurrent(page: number)
  {
    pageCurrent.value = page;
    getAlbumAsync(page, pageCount.value).then((response: Album[]) => { 
      albums.value = response;
    });
  }

  const Show = () => {
    divAlbumList.value.style.display = "grid";
  };
  const Hide = () => {
    divAlbumList.value.style.display = "none";
  };
  defineExpose({ Show, Hide });
</script>

<template>
  <div ref="divAlbumList" class="album-list none w:100% h:415px p:12px r:10 bd:blur(3) b:1;solid;white/.1 bg:black/.3">
    <AlbumListCell v-for="(album, idx) in albums" :album="album" :idx="idx"  />
  </div>
  <Pagination ref="pagination" :pageCurrent="pageCurrent" :pageCount="pageCount" @update:pageCurrent="updatePageCurrent" :pageEnd="pageEnd" />
</template>

<style scoped>
  .album-list {
    position: relative;;
    overflow-y: scroll;
    grid-template-columns: calc(20% - 2.4px) calc(20% - 2.4px) calc(20% - 2.4px) calc(20% - 2.4px) calc(20% - 2.4px);
    gap: 3px;
    grid-auto-rows: minmax(100px, auto);
  }
</style>