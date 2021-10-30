import Button from '@restart/ui/esm/Button';
import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const SignIn = () => {
    const { signInUsingGoogle, logOut, error, user } = useFirebase();
    return (
        <div>
            <h1 className="my-5">Please Sign In</h1>
            <Button onClick={signInUsingGoogle} variant="outline-warning">Sign In Using Google</Button>
        </div>
    );
};

export default SignIn;