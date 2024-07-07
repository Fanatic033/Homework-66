import Form from '../../Components/Form/Form.tsx';
import {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi.ts';
import {useNavigate, useParams} from 'react-router-dom';
import {ApiMeal} from '../../types.ts';
import Spinner from '../../Components/Spinner/Spinner.tsx';

const EditPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const fetchOneMeal = useCallback(async () => {
    try {
      setEditLoading(true);
      const {data: meal} = await axiosApi.get(`/meals/${id}.json`);
      setMeal(meal);
    } finally {
      setEditLoading(false);
    }

  }, [id]);
  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);

  const changeMeal = async (meal: ApiMeal) => {
    try {
      setIsUpdating(true);
      await axiosApi.put(`/meals/${id}.json`, meal);
      navigate('/');
    } finally {
      setIsUpdating(false);
    }
  };


  return (
    <>
      {editLoading ? <div className={'mt-5 text-center'}><Spinner/></div>
        : <div className="row mt-2">
          <div className="col">
            {meal && <Form onSubmit={changeMeal} existingMeal={meal} isLoading={isUpdating}/>}
          </div>
        </div>
      }
    </>
  );
};

export default EditPage;