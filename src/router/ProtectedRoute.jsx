import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/context/Auth";

const ProtectedRoute = ({children, role})=>{
    const {user} = useAuthContext();
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user){
            navigate('/')
        }
        if(user && role[0] !== 1){
            navigate('/404', {replace:true})
        }
    },[user])
    return children
}

export default ProtectedRoute