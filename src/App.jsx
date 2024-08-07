import React, { createContext} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client"
import Todo from "./components/todo/Todo";
import Login from "./components/Login";
import { AuthProvider } from "./components/context/Auth";
import RouteGuard from "./components/router/RouteGuard";


function App() { 
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/todo" element={<RouteGuard><Todo/></RouteGuard>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App