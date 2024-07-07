import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
              <NavLink to={'/'} className={'text-decoration-none'}>
                <strong className="navbar-brand text-light ms-5" >Calorie Tracker</strong>
              </NavLink>
              <NavLink to={'/meals/new'}>
                <button className={'btn text-white'}>Add new Meal</button>
              </NavLink>
            </div>
        </nav>
    );
};

export default Header;
