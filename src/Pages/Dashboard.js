import React from 'react';
import {useDispatch} from 'react-redux';
import { logout } from '../features/userSlice';
import {auth} from '../firebase';
import styled from 'styled-components';

function Dashboard() {
    const dispatch = useDispatch();    
    const logoutOfApp =() => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <TitleCard>
            <h1>This is the Dashboard</h1>
            <button type='submit' onClick={logoutOfApp}>Log Out</button>
        </TitleCard>
    )
}

export default Dashboard;

const TitleCard = styled.div`
display: flex;
flex-direction:column;
margin-top:200px;
align-items: center;
>button{
    width: 350px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    align-items: center;
    margin-top: 10px;
}
>h1{
    align-items: center;
     font-family: 'Noto Sans JP', sans-serif;
    font-weight:400;
    font-size:80px;
    margin-top:20px;
    
}
>button:hover{
    background-color: black;
    color: white;
}

`;


