import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import routes from '../config/Routes';
import { AuthProvider } from '../components/context/Auth';
export default function Routing() {
  return (
    <BrowserRouter>
       <AuthProvider>
       <Routes>
          {routes.map((route, index)=>{
            if(!route.role){
                return (<Route key={index} path={route.path} element={route.element}/>)
            }
            return <Route key={index} path={route.path} element={<ProtectedRoute role={route.role}>{route.element}</ProtectedRoute>}/>
          })}
        </Routes>
       </AuthProvider>
    </BrowserRouter>
  )
}
