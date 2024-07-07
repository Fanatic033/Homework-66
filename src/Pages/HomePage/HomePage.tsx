import MealList from '../../Components/MealList/MealList.tsx';
import {useCallback, useEffect, useState} from 'react';
import {ApiMeals, Meal} from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import Spinner from '../../Components/Spinner/Spinner.tsx';

const HomePage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);

  const total = meals.reduce((sum, meal) => {
    return sum + meal.calories;
  }, 0);

  const deleteMeal = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      await axiosApi.delete(`/meals/${id}.json`);
      await fetchMeals();
    }
  };

  return (
    <>
      {loading ? <div className={'d-flex justify-content-center align-items-center mt-5'}><Spinner/></div>
        : <div className={' mt-5'}>
          <h3 className={'text-center mb-3'}>Total Calories {total}</h3>
          <MealList meals={meals} deleteMeal={deleteMeal}/>
        </div>
      }

    </>
  );
};

export default HomePage;