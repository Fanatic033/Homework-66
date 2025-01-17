export interface Meal {
  id: string;
  eating: string;
  food: string;
  calories: number;
  date: string;
}

export type ApiMeal = Omit<Meal, 'id'>

export interface ApiMeals {
  [id: string]: ApiMeal;
}


export interface MealMutation {
  eating: string;
  food: string;
  calories: string;
  date: string;
}