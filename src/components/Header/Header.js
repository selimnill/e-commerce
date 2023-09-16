import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import { UserConext } from '../ContextApi/ContextApi';

const Header = () => {

    const { user, logout } = useContext(UserConext);



    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <Link to='/'><h3 id='amazon'>Amazon</h3></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                        <button className='logout' onClick={logout}><Link to='/'>LogOut</Link></button>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                }
                <Link>{user?.email}</Link>

            </div>
        </nav>
    );
};

export default Header;