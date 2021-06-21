import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import {login} from '../features/userSlice';
import {auth} from '../firebase';



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();


    const loginToApp =(e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,

            }));
        })
        .catch((error) => alert(error));

    };

      const register =() => {
        if (!name){
            //return alert("Please enter the full Name!");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => 
        {
            
            userAuth.user.updateProfile({
                displayName: name,
                
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                }));
            });
        })
        .catch((error) => alert(error));

    };

     const checkValidation = (e)=>{
         const confPass = e.target.value;
         setConfirmPassword(confPass);
        if(password !== confPass){
           setError("Password Does Not Match !");
            
            }
        else{
            setError(" ");
        }    
    };


    

    return (
        <div className="login">
            <h6 style={{color:"red"}}>{error}</h6>
            <h5>If you have an account Just Enter Email and Password</h5>

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" type="text"/>
              
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>

                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>

                <input value={confirmPassword} onChange={(e) => checkValidation(e)} placeholder="Confirm Password" type="password"/>

                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" type="phonenumber"/>

                <button type="submit" onClick={loginToApp}>Log In</button>

            </form>
                <p>
                    If you are not a member fill the form and click <span>
                    <button className="btn-small" type="submit" onClick={register}>Sign Up</button>
                    </span>
                    
                </p>
                

        </div>
    );
}

export default Login;
