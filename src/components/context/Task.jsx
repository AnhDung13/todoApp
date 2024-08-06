import { useContext, createContext, useState } from "react";

export const worksContext = createContext()

function TaskContext({children}){
    
    const [works, setWorks] = useState([]);
    
    const updateWorks = (value)=>{
        setWorks(value)
    }
  
    return (
        <worksContext.Provider value={ {works, updateWorks}}>
          {children}
        </worksContext.Provider>
    );
}
function useTask(){
    return useContext(worksContext)
}
export {TaskContext, useTask}