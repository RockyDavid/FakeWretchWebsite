<script setup lang="ts">
  import { common } from "../../helper/common.ts";
  import { Recipe }  from '../../repositories/Recipe.ts';
  import { MouseImageEvent }  from '../MouseImage/MouseImageEvent.ts'
  const props = defineProps({
      recipe: {
        type: [Object as PropType<Recipe>, null],
        required: true
      },
  })
</script>

<template>
  <div class="post-list-row" :id="'PostListRow$' + props.recipe.id" :ref="MouseImageEvent.bindCustomElement">
      <h1 class="post-list-row-title"> {{ props.recipe.id + '. ' + props.recipe.name }} </h1>
      <div class="post-list-row-body">
          <img class="post-list-row-img" :src="props.recipe.image" />
          <ul>
            <li class="instructions" v-for="text in props.recipe.instructions"> {{ text }} </li> 
          </ul>
      </div>
      <div class="post-list-row-footer">
           <div class="post-info date">
               <span class="date"> {{ common.dateFormatter(new Date(props.recipe.firstTimeOfCreate), 'en') }}</span>
           </div>
            <div class="post-num trackback">
                <span class="text">引用</span> 
                <span class="amount">({{ common.numFormatter(props.recipe.trackback, 2) }})</span> 
            </div>
            <div class="post-num reply">
                <span class="text">回應</span> 
                  <span class="amount">({{ common.numFormatter(props.recipe.reply, 2) }})</span> 
            </div>
           <div class="post-num views ">
               <span class="text">瀏覽</span> 
               <span class="amount"> ({{ common.numFormatter(props.recipe.views, 2) }})</span>
           </div>
      </div>
  </div>
</template>

<style scoped>
  .post-list-row  {
      color: #000;
      cursor: none;
      position: relative;
      display: block;
      background-color: #f8f8f8;
      margin-bottom: 6px;
      padding: 0 6px;
      border-bottom: 4px transparent solid;
  }
      .post-list-row:hover  {
        border-bottom: 4px #7F7F7F solid;
      }
      .post-list-row-img {
          max-width: 150px;
          max-height: 175px;
          display: inline-block;
          float: left;
          margin-right: 30px;
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
          .post-list-row > .post-list-row-body > ul > li {
              line-height: 22px;
              margin: 0;
              padding: 0;
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