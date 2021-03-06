import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { signInUsingGoogle, error, setError } = useAuth();

    // AFTER LOGIN REDIRECT 
    const location = useLocation();
    console.log('location', location);
    const redirect_url = location?.state?.from || '/';
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log('From Google SignIn', result);
                console.log('You are Logged In');
                history.push(redirect_url);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Login</h1>
            {/* Login Using Google  */}
            <h5 className="custom-orange">Login with Google</h5>
            <Button onClick={handleGoogleSignIn} variant="outline-secondary"><FontAwesomeIcon className="fs-3 custom-orange" icon={faGoogle} />oogle</Button>
            <p className="text-danger">{error}</p>

            {/* Login Using email id and password */}
            <h5 className="custom-orange my-2">Login with Email & Password</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="" {...register("example")} disabled />
                <input {...register("exampleRequired", { required: true })} disabled />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Login" disabled />
            </form>
        </div>
    );
};

export default Login;