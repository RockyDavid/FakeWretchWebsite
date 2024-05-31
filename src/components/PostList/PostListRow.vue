<script setup lang="ts">
  import { common } from "../../helper/common.ts";
  import { Recipe }  from '../../repositories/Recipe.ts';
  const props = defineProps({
      recipe: {
        type: [Object as PropType<Recipe>, null],
        required: true
      },
  })
</script>

<template>
  <div class="post-list-row">
      <h1 class="post-list-row-title"> {{ props.recipe.id + '. ' + props.recipe.name }} </h1>
      <div class="post-list-row-body"> 
          <img class="post-list-row-img" :src="props.recipe.image" />
          <p class="instructions" v-for="text in props.recipe.instructions"> {{ text }} </p> 
      </div>
      <div class="pull-right post-num-group">
           <div class="post-num date ">
               <span class="date"> {{ common.dateFormatter(new Date(props.recipe.firstTimeOfCreate), 'zh-tw') }}</span>
           </div>
         <div class="post-num views ">
             <span class="text">瀏覽</span> 
             <span class="amount"> ({{ common.numFormatter(props.recipe.views, 2) }})</span>
         </div>
          <div class="post-num reply">
              <span class="text">回應</span> 
                <span class="amount">({{ common.numFormatter(props.recipe.reply, 2) }})</span> 
          </div>
          <div class="post-num trackback">
              <span class="text">引用</span> 
              <span class="amount">({{ common.numFormatter(props.recipe.trackback, 2) }})</span> 
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
              text-indent: 1em;
              line-height: 22px;
              margin: 0;
              padding: 0;
          }

    .post-num-group {
        display: block;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: -8px;
    }
    .pull-right > div.post-num {
        display: inline-block;
        position: absolute;
    }
        .pull-right > div.post-num.views {
            right: 210px;
        }
        .pull-right > div.post-num.reply {
            right: 110px;
        }
        .pull-right > div.post-num.trackback {
            right: 10px;
        }
    .pull-right > div.post-num > span {
        margin-left: 6px;
    }
</style>