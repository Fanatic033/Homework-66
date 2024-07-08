import React, {useState} from 'react';
import {ApiMeal, MealMutation} from '../../types.ts';
import ButtonSpinner from '../Spinner/ButtonSpinner.tsx';
import DatePicker from 'react-datepicker';

interface Props {
  onSubmit: (meal: ApiMeal) => void;
  existingMeal?: ApiMeal;
  isLoading: boolean;
}

const emptyState: MealMutation = {
  eating: '',
  food: '',
  calories: '',
  date: new Date().toISOString().split('T')[0],
};
const Form: React.FC<Props> = ({onSubmit, existingMeal, isLoading = false}) => {
  const initialState: MealMutation = existingMeal
    ? {...existingMeal, calories: existingMeal.calories.toString()}
    : emptyState;

  const [form, setForm] = useState(initialState);

  const changeMeal = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const getDate = (date: Date | null) => {
    if (date) {
      setForm((prev) => ({
        ...prev,
        date: date.toISOString().split('T')[0],
      }));
    }
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
        <h2 className="text-center mt-5">{existingMeal ? 'Edit Meal' : 'Add New Meal'}</h2>
        <div className="input-group">
          <label className="mt-5 w-100">
            <strong>Meal</strong>
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
            <strong>Meal Description</strong>
            <input
              className="w-100 form-control"
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
            <strong>Calories</strong>
            <input
              className="w-100 form-control"
              type={'number'}
              name="calories"
              value={form.calories}
              onChange={changeMeal}
              placeholder="Enter calories"
            />
          </label>
        </div>
        <div className="input-group">
          <label className="mt-5">
            <strong className={'d-block'}>Date</strong>
            <DatePicker
              selected={new Date(form.date)}
              onChange={getDate}
              className="form-control mt-1 w-100"
              dateFormat="yyyy-MM-dd"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4 px-5"
          disabled={isLoading}>
          {isLoading && <ButtonSpinner/>}
          {existingMeal ? 'Change' : 'Create'}
        </button>
      </form>
    </>

  );
};

export default Form;