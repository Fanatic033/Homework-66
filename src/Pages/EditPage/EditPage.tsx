import Form from '../../Components/Form/Form.tsx';
import {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi.ts';
import {useNavigate, useParams} from 'react-router-dom';
import {ApiMeal} from '../../types.ts';

const EditPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<ApiMeal | null>(null);

  const fetchOneMeal = useCallback(async () => {
    const {data: meal} = await axiosApi.get(`/meals/${id}.json`);
    setMeal(meal);


  }, [id]);
  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);

  const changeMeal = async (meal: ApiMeal) => {
    try {
      await axiosApi.put(`/meals/${id}.json`, meal);
      navigate('/')
    }finally {

    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {meal && <Form onSubmit={changeMeal} existingMeal={meal}/>}
      </div>
    </div>
  );
};

export default EditPage;