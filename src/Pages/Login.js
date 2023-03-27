import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate()
    return (
        <div className="registeration-outer">
            <div className="registration-inner">

                <div className="font-22px">Login</div>
                <p><b>Remote Patient Monitoring System</b></p>

                <input placeholder="Enter email"
                    name="email"
                    type="text" 
                    className='emailinput'/>
                <input placeholder="Enter password"
                    name="email"
                    type="password" 
                    className='passinput'
                    />
                    <div className='passinput btnn'>
                        <b>Login</b>
                    </div>

                <div>
                    <p className="bold">
                        Forgot Password? <Link className='link' to={""}><b>SignUp</b></Link>
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Login