import { useContext, createContext, useState } from "react";

export const taskContext = createContext()

function TaskProvider({children}){
    
    const [works, setWorks] = useState([]);
    
    const updateWorks = (value)=>{
        setWorks(value)
    }
  
    return (
        <taskContext.Provider value={ {works, updateWorks}}>
          {children}
        </taskContext.Provider>
    );
}
function useTask(){
    return useContext(taskContext)
}
export {TaskProvider, useTask}