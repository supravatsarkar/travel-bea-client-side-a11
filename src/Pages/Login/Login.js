import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import useFirebase from '../../Hooks/useFirebase.js';


const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { signInUsingGoogle, logOut, error, user } = useFirebase();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Login</h1>
            {/* Login Using Google  */}
            <h5 className="custom-orange">Login with Google</h5>
            <p className="text-danger">{error}</p>
            <Button onClick={signInUsingGoogle} variant="outline-secondary"><FontAwesomeIcon className="fs-3 custom-orange" icon={faGoogle} />oogle</Button>
            {/* <div className="btn btn-outline"></div> */}

            {/* Login Using email id and password */}
            <h5 className="custom-orange my-2">Login with Email & Password</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="" {...register("example")} disabled />
                <input {...register("exampleRequired", { required: true })} disabled />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Login" disabled />
            </form>

            {
                user.email && <Button onClick={logOut} variant="danger">Log Out</Button>
            }
        </div>
    );
};

export default Login;