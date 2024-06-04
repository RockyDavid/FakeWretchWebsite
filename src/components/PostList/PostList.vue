<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router';
  import PostListRow from './PostListRow.vue';
  import Pagination from './Pagination.vue';
  import { Recipe, getRecipesAsync }  from '../../repositories/Recipe.ts';

  const router = useRouter();
  const recipes = ref<Recipe[]>([]);
  const pageCurrent = ref<number>(1); 
  const pageCount = ref<number>(10); 
  const showId = ref<number>(0); 
  const PostListRows = ref<Array>([]);
  
  
  function updatePageCurrent(page: number)
  {
    pageCurrent.value = page
    var arrIdx = page - 1;
    var cycle  = 5;
    showId.value = Math.floor(arrIdx / cycle) * pageCount.value * cycle;
    var pageCycle = arrIdx % 5 + 1;
    getRecipesAsync(pageCycle, pageCount.value).then((response: Recipe[]) => { 
      recipes.value = response.map((recipe: Recipe) => {
        return new Recipe(
          recipe.id + showId.value,
          recipe.name,
          recipe.ingredients,
          recipe.instructions,
          recipe.prepTimeMinutes,
          recipe.cookTimeMinutes,
          recipe.servings,
          recipe.difficulty,
          recipe.cuisine,
          recipe.caloriesPerServing,
          recipe.tags,
          recipe.userId,
          recipe.image,
          recipe.rating,
          recipe.reviewCount,
          recipe.mealType,
        );
      });
      
    });
  }

  function goToRecipe(recipeId: number, showId: number)
  {
    router.push('/post/' + recipeId + '/' + showId);
  }

</script>

<template>
  <div class="post-list">
    <PostListRow :recipe="recipe" v-for="recipe in recipes" :key="recipe.id" @click="goToRecipe(recipe.id - showId, showId + 1)" />
  </div>
  <Pagination :pageCurrent="pageCurrent" :pageCount="pageCount" @update:pageCurrent="updatePageCurrent" />
</template>

<style scoped>
  .post-list {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
    background-color: transparent;
    padding: 0px 8px 0px 0px;
    overflow-y: scroll;
    height: 415px;
  }
</style>