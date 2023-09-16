import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { UserConext } from '../ContextApi/ContextApi';
import Toast from 'react-bootstrap/Toast';


const Signup = () => {
    const [error, setError] = useState('');
    const [nameError, setNameError] = useState('');


    const { createUser } = useContext(UserConext);
    console.log(createUser);

    const handeSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);


        if (name > 5) {
            setNameError("Character should be atleast 5 or more.!");
            return;
        }

        else if (password !== confirm) {
            setError('Password does not match.!');
            return;
        }
        else if (password > 6) {
            setError('Password must be at least 6 characters or more.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>

            })
            .catch(error => console.error(error));
    }



    return (
        <div id="body">
            <form className='login-container' onSubmit={handeSubmit}>
                <h2 className='name'>Sign Up.!</h2>
                <div className="login-info">
                    <div className="form-control">
                        <label htmlFor="text">Name</label>
                        <input type="text" name='name' required />
                    </div>
                    <p className='warning'>{nameError}</p>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <p className='warning'>{error}</p>
                    <button type="submit" className='btn-login'>SignUp</button>
                    <p className='link'><small>Already have an account?<Link to='/login'> Login!</Link></small></p>
                    <button type="submit" className='btn-google'><span className='icon'><BsGoogle /></span> Continue With Google</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;