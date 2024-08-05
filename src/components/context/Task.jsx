import { useContext, createContext, useRef, useState , useEffect} from "react";

export const worksContext = createContext()

function Task({children}){
    const inputRef = useRef(null);
    const [workArr, addWorks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState(workArr.map(({name})=>name));

    useEffect(()=>{
        setEditValue(workArr.map(({name})=>name))
        inputRef.current.value = "";
        inputRef.current.focus();
    },[workArr])

    const handleAdd = (e)=>{
        e.preventDefault();
        const value = inputRef.current.value.trim()
        if(!value){
            return
        }
        const newWorks = [...workArr, {name:value}]
        addWorks(newWorks)
    }

    const handleDelete = (index)=>{
        const newWorks = workArr.filter((_,i)=> i !== index)
        addWorks(newWorks)
    }

    const handleSave = (newValue)=>{  
        const newWorks = newValue.map(value=>({name:value}))
        addWorks(newWorks)
        setEditingIndex(null)
    }

    const handleAction =(e)=>{
        const index = Number(e.target.parentElement.parentElement.dataset.index);
        if(e.target.classList.contains('change-btn')){
            setEditingIndex(index)
        }else if (e.target.classList.contains('delete-btn')){
            handleDelete(index)          
        }
    }
    const handleEditChange = (e,index) => {
        const newValue = [...editValue]
        const value = e.target.value.trim()
        newValue[index] = value
        setEditValue(newValue)
    };

    return (
        <worksContext.Provider value={{handleAdd, handleDelete, handleSave, handleAction, handleEditChange, editingIndex, workArr, inputRef, editValue}}>
          {children}
        </worksContext.Provider>
      );
}
function useTask(){
    return useContext(worksContext)
}
export {Task, useTask}