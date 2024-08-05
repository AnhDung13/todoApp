import React, { createContext} from "react"
import ReactDOM from "react-dom/client"
import TodoComponent from "./components/Todo";

export const worksContext = createContext()

function App() { 
  return (
   <worksContext.Provider value={[]}>
     <div className="container py-3">    
       <TodoComponent/>
    </div>  
   </worksContext.Provider>
  );
}

export default App

