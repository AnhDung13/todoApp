import React, { createContext} from "react"
import ReactDOM from "react-dom/client"
import {  TaskContext } from "./components/context/Task";
import TodoForm from "./components/TodoForm";

function App() { 
  return (
    <TaskContext>
       <div className="container py-3">    
         <TodoForm/>
       </div> 
    </TaskContext>
     
  );
}

export default App