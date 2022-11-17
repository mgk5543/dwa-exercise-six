import React from 'react';
import { getAuth, signOut } from 'firebase/auth'

function Header( setIsLoggedIn, setUserInformation) {
    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    return (
        <header>
            <nav>
                <a href="/"><p>Home</p></a>
                <a href="/login"><p>Login</p></a>
                <a href="/create"><p>Create User</p></a>
                <p onClick={() => logout()}>Log Out</p>
            </nav>
        </header>
    );
}

export default Header;