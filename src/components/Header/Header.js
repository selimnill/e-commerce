import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import { UserConext } from '../ContextApi/ContextApi';

const Header = () => {

    const { user, logout } = useContext(UserConext);


    const handleLogOut = () => {
        logout();
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/inventory'>Inventory</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className="btn btn-success">Logout</button>
                                :
                                <>
                                    <button className="btn btn-outline btn-success w-32">Login</button>
                                    <button className="btn  btn-success w-32">Sign Up</button>
                                </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'>Amar Dukan</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li><Link to='/inventory'>Inventory</Link></li>
                    <li><Link to='/about'>About</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleLogOut} className="btn btn-success">Logout</button>
                        :
                        <>
                            <button className="btn btn-outline btn-success w-28 mx-2 font-bold">Login</button>
                            <button className="btn  btn-success w-28 font-bold">Sign Up</button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;