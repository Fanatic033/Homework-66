import MealItem from '../../Components/MealItem/MealItem.tsx';

const HomePage = () => {
  return (
    <>
    <div className={' mt-5'}>
      <h3 className={'text-center'}>Total Calories</h3>
      <MealItem/>
    </div>
    </>
  );
};

export default HomePage;