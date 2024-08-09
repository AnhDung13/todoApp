import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/Auth";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
    {
        role: 'admin',
        username: 'admin',
        password: '1'
    },
    {
        role: 'user',
        username: 'user',
        password: '0'
    }
]

function Login(){
    const {login} = useAuthContext();
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault()
        const {username, password} = Object.fromEntries([...new FormData(e.target)])
        const user = users.find(u => (u.username === username && u.password === password))
        if(user){
            login(user)
            navigate('/todo')
        }
    }

    return(
        <div className="container">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <form onSubmit={handleLogin} className="bg-white p-3 login-form rounded" style={{width: 400+'px', height: 350+'px'}}>
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