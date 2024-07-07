import Form from '../../Components/Form/Form.tsx';
import {ApiMeal,} from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import {useNavigate} from 'react-router-dom';

const NewPage = () => {
  const navigate = useNavigate();

  const addMeal = async (meal: ApiMeal) => {
    try {
      await axiosApi.post('/meals.json', meal);
    } finally {
      navigate('/');
    }
  };

  return (
    <div className={'row mt-2'}>
      <div className={'col'}>
        <Form onSubmit={addMeal}/>
      </div>
    </div>
  );
};

export default NewPage;