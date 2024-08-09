import React, {useRef, useState} from "react"
import { useTaskContext } from "../context/Task";
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./TodoList";
function TodoForm(){
  const inputRef = useRef()
  const {updateWorks} = useTaskContext();
  const [value, setValue] = useState('')
  const [id, setId] = useState(1)
  const handleAdd = (e)=>{
    e.preventDefault();
    if(!value.trim()){
      setValue('')
      return
    }
    updateWorks(prev=>[...prev, {id: id, name: value}])
    setValue('')
    setId(id+1)
    inputRef.current.focus()
  }
    return(
      <div className="row">
        <div className="col-8 offset-2 col-xl-6 offset-xl-3 bg-white p-4 ">
          <form className="add-form d-flex gap-2 mb-4" onSubmit={handleAdd}>
              <input ref={inputRef} value={value} type="text" className="form-control border border-primary" onChange={(e)=>setValue(e.target.value)}/>
              <button type="submit" className="btn btn-success px-4 py-2" >Add</button>
          </form>
          <TodoList/>
       </div>
      </div>
    );
  }
  
export default TodoForm
