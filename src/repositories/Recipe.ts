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
}

export async function getRecipeByIdAsync(postId: number): Promise<Recipe> {
  return common.getDataAsync<Recipe>(`https://dummyjson.com/recipe/${postId}`);
}
