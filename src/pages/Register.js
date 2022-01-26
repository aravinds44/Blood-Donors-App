import React from 'react'
import Copyright from '../components/Copyright/Copyright'
import NavBar from '../components/NavBar/NavBar'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import { useEffect } from 'react'


function Register() {

    useEffect(() => {
        window.scrollTo(0,0)
        
        }, []);

    return (
        <div>
            <NavBar/>
            <RegisterForm/>
            <Copyright/>
        </div>
    )
}

export default Register
