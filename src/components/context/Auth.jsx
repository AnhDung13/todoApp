import React, {useContext, createContext, useState, Children, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    const navigate = useNavigate()
    useEffect(()=>{
        if(user){
            if(user.role === 'admin'){
                navigate('/todo')
            }else{
                navigate('/404')
            }
        }else{
            navigate('/')
        }
    },[])
    const login = (user) =>{
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }
    const logout = () =>{
        setUser(null)
        localStorage.removeItem('user')
    }
    return (
        <authContext.Provider value={{user, login, logout}} >
            {children}
        </authContext.Provider>
    )
}

const useAuthContext = ()=>{
    return useContext(authContext)
}
export {AuthProvider, useAuthContext};