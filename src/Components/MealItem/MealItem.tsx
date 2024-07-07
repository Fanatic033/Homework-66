import React from "react";
import {Meal} from '../../types.ts';

interface Props{
  meal: Meal;
}
const PostItem: React.FC<Props> = ({meal}) => {
  return (
    <>
      <div className="card container mb-3">
        <div className="card-header">
          {meal.calories} kcal
        </div>
        <div className="card-body">
          <h5 className="card-text"><small className={'text-body-secondary'}>{meal.eating}</small></h5>
          <p className="card-text fs-5">{meal.food}</p>
          <a href="#" className="btn btn-warning me-4 pe-3">Edit</a>
          <a href="#" className="btn btn-danger">Delete</a>
        </div>
      </div>
    </>
  );
};

export default PostItem;