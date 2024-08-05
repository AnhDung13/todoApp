import React, { useState, useRef, useContext} from "react"
import {worksContext} from "../App";
import TodoListComponent from "./TodoList";
import "bootstrap/dist/css/bootstrap.css"
function TodoComponent(){
    const works = useContext(worksContext)
    const inputRef = useRef(null);
    const [workArr, addWorks] = useState(works);
    const [editingIndex, setEditingIndex] = useState(null);
    const handleAdd = (e)=>{
      e.preventDefault();
      const value = inputRef.current.value.trim()
     if(!value){
        return
     }
     const newWorks = [...workArr, {name:value}]
     addWorks(newWorks)
     inputRef.current.value = "";
     inputRef.current.focus();
    }

    const handleDelete = (index)=>{
        const newWorks = workArr.filter((_,i)=> i !== index)
        addWorks(newWorks)
    }

    const handleChange = (index) => {
        setEditingIndex(index)
    };

    const handleSave = (newValue)=>{
        const newWorks = newValue.map(value=>({name:value}))
        addWorks(newWorks)
        setEditingIndex(null)
    }

    const handleAction =(e)=>{
        const index = Number(e.target.parentElement.parentElement.dataset.index);
        if(e.target.classList.contains('change-btn')){
            handleChange(index)
        }else if (e.target.classList.contains('delete-btn')){
            handleDelete(index)          
        }
    }
    return(
      <div className="w-50 mx-auto bg-white p-4 ">
        <form className="add-form d-flex gap-2 mb-4" onSubmit={handleAdd}>
            <input ref={inputRef} type="text" className="form-control border border-primary"/>
            <button type="submit" className="btn btn-success px-4 py-2" >Add</button>
        </form>
        <TodoListComponent works={workArr} handleAction={handleAction} editingIndex={editingIndex} handleSave={handleSave}/>
      </div>
    );
  }
  
export default TodoComponent