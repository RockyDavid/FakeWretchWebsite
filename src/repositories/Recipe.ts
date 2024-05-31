import { common } from "../helper/common";

export class Recipe {
  constructor(
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[],
  ) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.prepTimeMinutes = prepTimeMinutes;
    this.cookTimeMinutes = cookTimeMinutes;
    this.servings = servings;
    this.difficulty = difficulty;
    this.cuisine = cuisine;
    this.caloriesPerServing = caloriesPerServing;
    this.tags = tags;
    this.userId = userId;
    this.image = image;
    this.rating = rating;
    this.reviewCount = reviewCount;
    this.mealType = mealType;
    this.firstTimeOfCreate = common.RandomDate(
      new Date(2020, 0, 1).getTime(),
      new Date().getTime(),
      0,
      23,
    );
    this.views = common.RandomNum(10, 100);
    this.reply = common.RandomNum(5, this.views);
    this.trackback = common.RandomNum(5, this.views);
  }

  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
  firstTimeOfCreate: Date;
  views: number;
  reply: number;
  trackback: number;
}

interface PostApiResponse {
  recipes: Recipe[];
}
export async function getRecipesAsync(
  pageIndex: number,
  countOfPage: number,
): Promise<Recipe[]> {
  var skip = (pageIndex - 1) * countOfPage;
  var resp = await common.getDataAsync<PostApiResponse>(
    `https://dummyjson.com/recipe?limit=${countOfPage}&skip=${skip}`,
  );
  // 使用 Promise.all
  return Promise.all(
    resp.recipes.map((recipe) => {
      return new Recipe(
        recipe.id,
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
    }),
  );
}

export async function getRecipeByIdAsync(recipeId: number): Promise<Recipe> {
  var recipe = await common.getDataAsync<Recipe>(
    `https://dummyjson.com/recipe/${recipeId}`,
  );
  return new Recipe(
    recipe.id,
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
}
