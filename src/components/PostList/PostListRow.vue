<script setup lang="ts">
  import { common } from "../../helper/common.ts";
  import { Post, PostReactions }  from '../../repositories/Post.ts'
  const props = defineProps({
      post: {
        type: [Object as PropType<Post>, null],
        required: true
      },
  })
</script>

<template>
  <div class="post-list-row">
      <h1 class="post-list-row-title"> {{ props.post.id + '. ' + props.post.title }} </h1>
      <div class="post-list-row-body"> 
          <img class="post-list-row-img" :src="props.post.imgSrc" />
          <p>{{ props.post.body }} </p>
      </div>
      <div class="pull-right post-num-group">
           <div class="post-num date ">
               <span class="date"> {{ common.dateFormatter(new Date(props.post.firstTimeOfCreate), 'zh-tw') }}</span>
           </div>
         <div class="post-num views ">
             <span class="text">瀏覽</span> 
             <span class="amount"> ({{ common.numFormatter(props.post.views, 2) }})</span>
         </div>
          <div class="post-num replay">
              <span class="text">回應</span> 
                <span class="amount">({{ common.numFormatter(props.post.reactions.likes, 2) }})</span> 
          </div>
          <div class="post-num trackback">
              <span class="text">引用</span> 
              <span class="amount">({{ common.numFormatter(props.post.reactions.dislikes, 2) }})</span> 
          </div>
      </div>
  </div>
</template>

<style scoped>
  .post-list-row  {
      color: #7A7A7A;
      cursor: pointer;
      position: relative;
      display: block;
      background: rgb(245 254 255 / 50%);
      border-radius: 12px;
      margin-top: 10px;
      margin-bottom: 30px;
      padding: 6px;
      border-bottom: 4px transparent solid;
      line-height: 30px;
      min-height: 250px;
  }
      .post-list-row:hover  {
          border-bottom: 4px #7F7F7F solid;
      }
      .post-list-row > div {
        padding: 0px 12px;
        line-height: 30px;
      }
      .post-list-row-img {
          max-width: 150px;
          max-height: 175px;
          display: inline-block;
          float: left;
          margin-right: 6px;
      }
      .post-list-row > .post-list-row-title {
          border-bottom: 4px #7F7F7F solid;
          padding: 0px 12px;
          margin: 0px -6px;
      }
      .post-list-row > .post-list-row-body {
          min-height: 150px;
      }
          .post-list-row > .post-list-row-body > p {
              padding: 6px;
              text-indent: 1em;
          }

    .post-num-group {
        display: block;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 5px;
    }
    .pull-right > div.post-num {
        display: inline-block;
        position: absolute;
    }
        .pull-right > div.post-num.views {
            right: 210px;
        }
        .pull-right > div.post-num.replay {
            right: 110px;
        }
        .pull-right > div.post-num.trackback {
            right: 10px;
        }
    .pull-right > div.post-num > span {
        margin-left: 6px;
    }
</style>