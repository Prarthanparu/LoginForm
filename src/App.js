import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {auth} from './firebase';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';



function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //user is logged in\
                dispatch(login({
                    email:userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoUrl,
                }));
            } else {
                //user is logged out
                dispatch(logout());
            }
        });
    }, []);

    return ( 
        <div className = "app">
            {!user ? (<Login/>) : ( <Dashboard/>)}
        </div>
    );
}

export default App;