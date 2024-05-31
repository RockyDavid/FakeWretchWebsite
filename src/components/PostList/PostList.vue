<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import PostListRow from './PostListRow.vue';
  import Pagination from './Pagination.vue';
  import { Recipe, getRecipesAsync }  from '../../repositories/Recipe.ts';

  const router = useRouter();
  const recipes = ref<Recipe[]>([]);
  const pageCurrent = ref<number>(1); 
  const pageCount = ref<number>(10); 
  
  function updatePageCurrent(page: number)
  {
    pageCurrent.value = page;
    getRecipesAsync(pageCurrent.value, pageCount.value).then(response => { 
      recipes.value = response 
    })
  }

  function goToRecipe(recipeId: number)
  {
    router.push('/post/' + recipeId);
  }
</script>

<template>
  <div class="post-list">
    <PostListRow :recipe="recipe" v-for="recipe in recipes" :key="recipe.id" @click="goToRecipe(recipe.id)" />
    <Pagination :pageCurrent="pageCurrent" :pageCount="pageCount" @update:pageCurrent="updatePageCurrent" />
  </div>
</template>

<style scoped>
  .post-list {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
    background-color: transparent;
    padding: 0px;
    overflow: hidden;
  }
</style>