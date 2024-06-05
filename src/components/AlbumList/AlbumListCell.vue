<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { Notify } from '../Alert/Notify.ts';
  import { Album }  from '../../repositories/Album.ts';
  import { useAlbumPermitStore } from './AlbumPermitStore.ts';
  const store = useAlbumPermitStore();

  const router = useRouter();
  const props = defineProps({
    album: {
      type: [Object as PropType<Album>, null],
      required: true
    },
    idx: {
      type: Number,
      required: true
    } 
  });
  function goToAlbum()
  {
    if (!props.album.isPublic) {
      const inputPwd = (document.getElementById(`ablumpwd${props.album.id}`) as HTMLInputElement)?.value;
      if (props.album.password !== inputPwd) {
        Notify.Warn('密碼錯誤');
        store.add(props.album.id, props.idx, false);
        return;
      }
    }
    store.add(props.album.id, props.idx, true);
    router.push('/albumdetail/' + props.album.id + '/' + props.idx);
  }
</script>

<template>
  <div class="album-list-cell w:100% h:190px position:relative bg:black/.3 border-radius:15px overflow:hidden">
    <div class="img" v-if="!props.album.isPublic"><div>私人相簿</div></div>
    <img v-if="props.album.isPublic" :src="props.album.cover"/>
    <div class="ablum-name position:absolute w:100% h:30px overflow:hidden top:0 bg:black/.3 "><div> {{ props.album.name }} </div></div>
    <div class="ablum-password" v-if="!props.album.isPublic">
      <i class="fa fa-key bg:white/.5"></i>
      <input type="password" class="album-password-input" :id="'ablumpwd' + props.album.id" />
      <a class="btn" @click="goToAlbum">進入相簿</a>
    </div>
    <div class="ablum-enter" v-if="props.album.isPublic">
      <a class="btn" @click="goToAlbum">進入相簿</a>
    </div>
  </div>
</template>

<style scoped>
  .album-list-cell {
  }
  .album-list-cell > .ablum-name > div {
    white-space: nowrap;
    text-align:center;
  }
  .album-list-cell > img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    object-position: center;
  }
  .ablum-enter {
      text-align: center;
      bottom: 1px;
      position: absolute;
      left: calc(50% - 42px);
  }
  .album-list-cell > .img {
    width: 100%;
    height: 160px;
    background-color: darkred;
  }
  .album-list-cell > .img > div {
    padding-top: 72px;
    font-size: 30px;
    letter-spacing: 15px;
    display: block;
    padding-left: 30px;
  }
  .ablum-password {
    margin: 0;
    display: inline-block;
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
    padding: 0;
    border: 1px solid #FFF;
  }
  .ablum-password > .fa {
    line-height: 17px;
    position: absolute;
    margin-top: 0px;
    margin-left: 0px;
    border-right: 1px solid #FFF;
    border-bottom-left-radius: 18px;
    color: yellow;
    -webkit-text-stroke: 1px black;
  }
  .ablum-password > input {
    width: 114px;
    background: transparent;
    border: none;
    font-size: 14px;
    vertical-align: bottom;
    margin-left: 20px;
    color: #FFF;
    line-height: 25px;
    padding: 0 10px 0 7px;
  }
  .ablum-password > input:focus{
    outline: none;
  }
  .ablum-password > .btn {
    border-style: none;
    border-radius: 0;
    border-bottom-right-radius: 14px;
    line-height: 25px;
    position: absolute;
    right: 0.5px;
  }

  .ablum-enter {
    text-align: center;
  }
  .btn {
    margin: 0 auto;
    display: inline-block;
    padding: 0px 12px;
    text-align: center;
    color: #fff;
    background-color: cadetblue;
    border-radius: 6px;
  }
  .btn:hover {
    cursor: pointer;
  }
</style>