import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function Login(props) {
    // How can we log in? What do we need to do?
    const [login, setLogin ] = useState({
        username: '',
        password: ''
    })
    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('login', login)
            .then(res => {
                console.log('res login',res)
                window.localStorage.setItem('token', res.data.payload)
                history.push('/creatures')
            })
            .catch(err => console.log('error login in', err))
    }

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <h2>I can't show you more until you log in. Please build out a login.</h2>


            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    label="username"
                    value={login.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                    className="input"
                />                    
                <input 
                    type="password"
                    name="password"
                    label="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="Enter Username"
                    className="input"
                />
                <button>Login</button>
            </form>
        </div>
    )
}