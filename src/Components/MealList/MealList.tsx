import {Meal} from '../../types.ts';
import {FC} from 'react';
import MealItem from '../MealItem/MealItem.tsx';

interface Props {
  meals: Meal[];
}

const MealList: FC<Props> = ({meals}) => {
  return (
    <div>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal}/>
      ))}
    </div>
  );
};

export default MealList;