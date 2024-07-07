import React from "react";



const PostItem: React.FC = () => {
  return (
    <>
      <div className="card container mb-3">
        <div className="card-header">
          600 kcal
        </div>
        <div className="card-body">
          <h5 className="card-text"><small className={'text-body-secondary'}>Breakfast</small></h5>
          <p className="card-text fs-5">Egg, Toast</p>
          <a href="#" className="btn btn-warning me-4 pe-3">Edit</a>
          <a href="#" className="btn btn-danger">Delete</a>
        </div>
      </div>
    </>
  );
};

export default PostItem;