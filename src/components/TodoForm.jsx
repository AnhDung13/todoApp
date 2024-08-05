import React, { useState, useRef, useContext} from "react"
import { useTask } from "./context/Task";
import "bootstrap/dist/css/bootstrap.css"
import TodoList from "./TodoList";

function TodoForm(){
    const { handleAdd, inputRef } = useTask();
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
