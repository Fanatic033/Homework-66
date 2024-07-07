import './App.css';
import Header from './Components/Header/Header.tsx';
import {Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.tsx';
import NewPage from './Pages/NewPage/NewPage.tsx';
import EditPage from './Pages/EditPage/EditPage.tsx';

const App = () => (
  <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/meals/new'} element={<NewPage/>}/>
      <Route path={'/meals/edit/:id'} element={<EditPage/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
  </>
);

export default App;
