import './App.css';
import Header from './Components/Header/Header.tsx';
import {Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.tsx';
import NewPage from './Pages/NewPage/NewPage.tsx';

const App = () => (
  <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/meals/new'} element={<NewPage/>}/>
    </Routes>
  </>
);

export default App;
