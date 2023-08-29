import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const UserConext = createContext();

const ContextApi = ({children}) => {

    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser  => {
            console.log('onAuthStateChanged', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    }, []);


    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    


    const authInfo = {user, loading, createUser, login, logout};


    return (
        <UserConext.Provider value={authInfo}>
            {children}
        </UserConext.Provider>
    );
};

export default ContextApi;