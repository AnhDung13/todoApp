import React, { useEffect } from "react";
import { useNavigate, useLocation, replace } from "react-router-dom";
import { useAuth } from "../context/Auth";

const RouteGuard = ({children})=>{
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(()=>{
        if(!user){
            navigate('/', {replace:true})
        }
    })
    return children
}

export default RouteGuard