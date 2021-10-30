import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
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
                console.log('You are Logged In');
                // setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
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

    // AUTH OBSERVE
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
        });
    }, [])


    return {
        signInUsingGoogle,
        logOut,
        error,
        user
    }
}

export default useFirebase;