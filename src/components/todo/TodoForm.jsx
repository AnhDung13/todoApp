import React, {useRef} from "react"
import { useTask } from "../context/Task";
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./TodoList";
function TodoForm(){
  const {updateWorks} = useTask();

  const inputRef = useRef(null);
  
  const handleAdd = (e)=>{
    e.preventDefault();
    const value = inputRef.current.value.trim()
    if(!value){
        return
    }
    updateWorks(prev=>[...prev, {name: value}])
    inputRef.current.value = "";
    inputRef.current.focus();
  }
    return(
      <div className="w-50 mx-auto bg-white p-4 ">
        <form className="add-form d-flex gap-2 mb-4" onSubmit={handleAdd}>
            <input ref={inputRef} type="text" className="form-control border border-primary"/>
            <button type="submit" className="btn btn-success px-4 py-2" >Add</button>
        </form>
        <TodoList/>
      </div>
    );
  }
  
export default TodoForm
