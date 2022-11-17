import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

function LoginPage({ isLoading, isLoggedIn, setIsLoggedIn, setUserInformation }) {
    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn && !isLoading) return navigate('/'); //Home
    }, [isLoggedIn, isLoading])
    
    return (
        <>
            <Header setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
            <div className="PageWrapper">
                <h1>Login</h1>
                <LoginForm/>
            </div>
        </>
    );
}

export default LoginPage;