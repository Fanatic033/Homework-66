import MealList from '../../Components/MealList/MealList.tsx';
import {useCallback, useEffect, useState} from 'react';
import {ApiMeals, Meal} from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import Spinner from '../../Components/Spinner/Spinner.tsx';
import {isToday} from 'date-fns';

const HomePage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [isBtnLoader, setIsBtnLoader] = useState<string | null>(null);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const {data: meals} = await axiosApi.get<ApiMeals | null>('/meals.json?orderBy="date"');
      if (!meals) {
        setMeals([]);
      } else {
        const newMeal = Object.keys(meals).map((id) => ({
          ...meals[id],
          id,
        })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setMeals(newMeal);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);

  const todayMeals = meals.filter((meal) => isToday(new Date(meal.date)));
  const total = todayMeals.reduce((sum, meal) => {
    return sum + meal.calories;
  }, 0);

  const deleteMeal = async (id: string) => {
    setIsBtnLoader(id);
    try {
      if (window.confirm('Are you sure?')) {
        await axiosApi.delete(`/meals/${id}.json`);
        await fetchMeals();
      }
    } finally {
      setIsBtnLoader(null);
    }
  };

  return (
    <>
      {loading ? <div className={'text-center mt-5'}><Spinner/></div>
        : <div className={' mt-5'}>
          <h3 className={'text-center mb-3'}>Total Calories: {total}</h3>
          <MealList meals={meals} deleteMeal={deleteMeal} loader={isBtnLoader}/>
        </div>
      }

    </>
  );
};

export default HomePage;