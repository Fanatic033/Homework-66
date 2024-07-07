import Form from '../../Components/Form/Form.tsx';
import {ApiMeal,} from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const NewPage = () => {
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);

  const addMeal = async (meal: ApiMeal) => {
    try {
      setIsLoader(true);
      await axiosApi.post('/meals.json', meal);
    } finally {
      setIsLoader(false);
      navigate('/');
    }
  };

  return (
    <div className={'row mt-2'}>
      <div className={'col'}>
        <Form onSubmit={addMeal} isLoading={isLoader}/>
      </div>
    </div>
  );
};

export default NewPage;