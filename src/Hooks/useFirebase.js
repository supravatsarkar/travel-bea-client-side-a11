import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";


firebaseAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    // SIGN IN USING GOOGLE 
    const signInUsingGoogle = () => {
        console.log('Clicked google sing in');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log('From Google SignIn', result);
                setUser(result.user);
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential;
                // console.log(token);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    //SIGN OUT
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setError('');
                alert('Log Out Success');
                // Sign-out successful.
            }).
            catch((error) => {
                setError(error.message);
                // An error happened.
            });
    }



    return {
        signInUsingGoogle,
        logOut,
        error,
        user
    }
}

export default useFirebase;