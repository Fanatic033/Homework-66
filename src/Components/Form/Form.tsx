import React, {useState} from 'react';
import {ApiMeal, MealMutation} from '../../types.ts';

interface Props {
  onSubmit: (meal: ApiMeal) => void;
}

const emptyState: MealMutation = {
  eating: '',
  food: '',
  calories: '',
};
const Form: React.FC<Props> = ({onSubmit}) => {

  const [form, setForm] = useState(emptyState);

  const changeMeal = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };


  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...form,
      calories: parseFloat(form.calories)
    });
  };


  return (
    <>
      <form className="container" onSubmit={onFormSubmit}>
        <h2 className="text-center mt-5">Add new Meal</h2>
        <div className="input-group">
          <label className="mt-5 w-100">
            Meal
            <select
              name="eating"
              className="form-select form-select mt-1"
              onChange={changeMeal}
              value={form.eating}
            >
              <option value="" disabled>Choose a Meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Snack">Snack</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </label>
        </div>
        <div className="input-group">
          <label className="mt-5">
            Meal Description
            <input
              className="w-100"
              type="text"
              name="food"
              value={form.food}
              onChange={changeMeal}
              placeholder="Enter description"
            />
          </label>
        </div>
        <div className="input-group">
          <label className="mt-5">
            Calories
            <input
              className="w-100"
              type={'number'}
              name="calories"
              value={form.calories}
              onChange={changeMeal}
              placeholder="Enter calories"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3 px-5">Save</button>
      </form>
    </>

  );
};

export default Form;