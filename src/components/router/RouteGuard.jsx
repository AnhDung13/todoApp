import React, { useEffect, useLayoutEffect } from "react";
import { useNavigate ,useLocation} from "react-router-dom";
import { useAuth } from "../context/Auth";

const RouteGuard = ({children})=>{
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        if(!user){
            navigate('/', {replace:true})
        }
        if(user && user.role === 1){
            navigate('/todo', {replace:true})
        }else{
            navigate('/404', {replace:true})
        }
    },[])
    return children
}

export default RouteGuard