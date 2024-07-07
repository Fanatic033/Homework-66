import MealList from '../../Components/MealList/MealList.tsx';
import {useCallback, useEffect, useState} from 'react';
import {ApiMeals, Meal} from '../../types.ts';
import axiosApi from '../../axiosApi.ts';

const HomePage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const fetchMeals = useCallback(async () => {
    try {
      const {data: meals} = await axiosApi.get<ApiMeals | null>('/meals.json');

      if (!meals) {
        setMeals([]);
      } else {
        const newMeal = Object.keys(meals).map((id) => ({
          ...meals[id],
          id,
        }));
        setMeals(newMeal);
      }
    } finally {

    }
  }, []);

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);

  const total = meals.reduce((sum, meal) => {
    return sum + meal.calories;
  }, 0);

  return (
    <>
      <div className={' mt-5'}>
        <h3 className={'text-center'}>Total Calories {total}</h3>
        <MealList meals={meals}/>
      </div>
    </>
  );
};

export default HomePage;