import React from "react";
import {Meal} from '../../types.ts';
import {Link} from 'react-router-dom';

interface Props{
  meal: Meal;
  onDelete: VoidFunction;
}
const PostItem: React.FC<Props> = ({meal,onDelete}) => {
  return (
    <>
      <div className="card container mb-3">
        <div className="card-header">
          {meal.calories} kcal
        </div>
        <div className="card-body">
          <h5 className="card-text"><small className={'text-body-secondary'}>{meal.eating}</small></h5>
          <p className="card-text fs-5">{meal.food}</p>
          <Link to={`/meals/edit/${meal.id}`} className="btn btn-warning me-4 pe-3">Edit</Link>
          <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default PostItem;