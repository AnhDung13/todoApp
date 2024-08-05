import React, { createContext} from "react"
import ReactDOM from "react-dom/client"
import { Task } from "./components/context/Task";
import TodoForm from "./components/TodoForm";

function App() { 
  return (
    <Task>
       <div className="container py-3">    
         <TodoForm/>
       </div> 
    </Task>
     
  );
}

export default App