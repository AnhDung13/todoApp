import { useContext, createContext, useRef, useState , useEffect} from "react";

export const worksContext = createContext()

function TaskContext({children}){
    
    const [workArr, setWorkArr] = useState([]);
    
    const updateWorkArr = (value)=>{
        setWorkArr(value)
    }
  
    return (
        <worksContext.Provider value={ {workArr, updateWorkArr}}>
          {children}
        </worksContext.Provider>
    );
}
function useTask(){
    return useContext(worksContext)
}
export {TaskContext, useTask}