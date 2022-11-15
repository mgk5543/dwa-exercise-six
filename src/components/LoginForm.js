import React from 'react';

function LoginForm() {
    return (
        <form className="FormElement">
            <label for="userName">User Name</label>
            <input type="text" name="userName"/>

            <label for="userPassword">Password</label>
            <input type="password" name="userPassword"/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;