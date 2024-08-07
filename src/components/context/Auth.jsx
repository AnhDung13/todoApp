import React, {useContext, createContext, useState, Children} from "react";

const authContext = createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

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

const useAuth = ()=>{
    return useContext(authContext)
}
export {AuthProvider, useAuth};