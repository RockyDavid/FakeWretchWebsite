<script setup lang="ts">
  import { ref } from 'vue'
  import { common } from "../../helper/common.ts";
  import { Post }  from '../../repositories/Post.ts';
  const props = defineProps({
      post: {
        type: [Object as PropType<Post>, null],
        required: true
      }
  });
</script>

<template>
  <div class="post-list-row r:10 bd:blur(3) b:1;solid;white/.1 bg:black/.3 blend:hard-light" :id="'PostListRow$' + props.post.id">
      <h1 class="post-list-row-title"> {{ props.post.showId + '. ' + props.post.title }} </h1>
      <div class="post-list-row-body">
          <img class="post-list-row-img" :src="props.post.imgSrc" />
          <div class="post-list-row-body-text" v-html="common.hidImageFromHtml(props.post.body)"></div>
      </div>
      <div class="post-list-row-footer">
           <div class="post-info date">
               <span class="date"> {{ common.dateFormatter(props.post.createTime, 'zh-tw') }}</span>
           </div>
            <div class="post-num trackback">
                <span class="text">引用</span> 
                <span class="amount">({{ common.numFormatter(props.post.trackback, 2) }})</span> 
            </div>
            <div class="post-num reply">
                <span class="text">回應</span> 
                  <span class="amount">({{ common.numFormatter(props.post.reply, 2) }})</span> 
            </div>
           <div class="post-num views ">
               <span class="text">瀏覽</span> 
               <span class="amount"> ({{ common.numFormatter(props.post.views, 2) }})</span>
           </div>
      </div>
  </div>
</template>

<style scoped>
  .post-list-row  {
      color: #fff;
      cursor: pointer;
      position: relative;
      display: block;
      margin-bottom: 6px;
      padding: 0 6px;
      border-bottom: 4px transparent solid;
  }
      .post-list-row:hover  {
        border-bottom: 4px #7F7F7F solid;
      }
      .post-list-row-img {
          max-width: 100%;
          max-height: 175px;
          display: inline-block;
          float: left;
          margin-right: 8px;
      }
      .post-list-row > .post-list-row-title {
          border-bottom: 4px #000 solid;
          padding: 0px 12px;
          margin: 0px -6px;
          width: calc(100% + 12px);
      }
      .post-list-row > .post-list-row-body {
          display: table;
          width: 100%;
          padding: 0px 6px;
      }
          .post-list-row > .post-list-row-body > .post-list-row-body-text { 
            height: 148px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            text-overflow: ellipsis;
            text-indent: 2em;
          }

    .post-list-row-footer {
        display: table;
        position: relative;
        width: 100%;
        padding: 0px 12px;
        margin: 0px -6px;
        border-top: 4px #000 solid;
        width: calc(100% + 12px);
    }
    .post-list-row-footer > div.post-num {
        display: inline-block;
        position: relative;
        float: right;
        margin-left: 12px;
    }
    .post-list-row-footer > div.post-info {
        float: left;
        margin-right: 12px;
    }
</style>