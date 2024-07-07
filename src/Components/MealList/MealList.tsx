import {Meal} from '../../types.ts';
import {FC} from 'react';
import MealItem from '../MealItem/MealItem.tsx';

interface Props {
  meals: Meal[];
  deleteMeal: (id: string) => void;
  loader: string | null;
}

const MealList: FC<Props> = ({meals, deleteMeal, loader}) => {
  return (
    <div>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} onDelete={() => deleteMeal(meal.id)} btnLoader={loader === meal.id}/>
      ))}
    </div>
  );
};

export default MealList;