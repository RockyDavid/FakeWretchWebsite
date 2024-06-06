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
  const pageEnd = ref<number>(27); 
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


  const divPostList = ref<HTMLDivElement>(null);
  const Show = () => {
    divPostList.value.style.display = "block";
  };
  const Hide = () => {
    divPostList.value.style.display = "none";
  };
  defineExpose({ Show, Hide });
</script>

<template>
  <div ref="divPostList" class="post-list none w:100% h:415px m:0|auto bc:transparent p:0|8px|0|0">
    <PostListRow :recipe="recipe" v-for="recipe in recipes" :key="recipe.id" @click="goToRecipe(recipe.id - showId, showId + 1)" />
  </div>
  <Pagination :pageCurrent="pageCurrent" :pageCount="pageCount" @update:pageCurrent="updatePageCurrent" :pageEnd="pageEnd" />
</template>

<style scoped>
  .post-list {
    position: relative;
    overflow-y: scroll;
  }
</style>