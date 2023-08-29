import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useContext } from 'react';
import { UserConext } from '../ContextApi/ContextApi';
import Toast from 'react-bootstrap/Toast';
import Toasts from '../Toast/Toasts';

const Login = () => {

    const { user, login } = useContext(UserConext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

                navigate(from, { replace: true });
            })

    }
    if(user){
        <Toasts></Toasts>
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <h2 className='name'>Login.!</h2>
                <div className="login-info">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <button type="submit" className='btn-login'>Login</button>
                    <p className='link'><small>New to Amazon?<Link to='/signup'> Create an Account.!</Link></small></p>
                </div>
            </form>
            <div className='login-popup'>
                <button type="submit" className='btn-google'><span className='icon'><BsGoogle /></span> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;