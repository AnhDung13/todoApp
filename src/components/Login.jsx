import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
    {
        role: 1,
        username: 'admin',
        password: '1'
    },
    {
        role: 0,
        username: 'user',
        password: 0
    }
]

function Login(){

    const handleLogin = (e)=>{
        
    }

    return(
        <div className="container">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <form onSubmit={handleLogin} className="bg-white p-3 login-form" style={{width: 400+'px', height: 400+'px'}}>
                    <h1 className="text-center">Login</h1>
                    <div className="form-input d-flex flex-column gap-2 mb-3">
                        <label className="fw-bold">User Name</label>
                        <input className="form-control" type="text" name="username" placeholder="User name..."/>
                    </div>
                    <div className="form-input d-flex flex-column gap-2 mb-3">
                        <label className="fw-bold">Password</label>
                        <input className="form-control" type="password" name="password" placeholder="Password..."/>
                    </div>
                    <button type="submit" className="btn btn-primary px-4 py-2">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login