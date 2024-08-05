import React from "react"
import { useTask } from "./context/Task";
import "bootstrap/dist/css/bootstrap.css"

function TodoList(){
 const {  handleAction, editingIndex, workArr, handleEditChange, handleEditSave, editValue } = useTask()

 return(
  <div className="todo-list" onClick={handleAction}>
      {workArr.map(({name}, index)=>
           index === editingIndex ? (
            <div key={index} className="d-flex justify-content-between align-items-center gap-2 my-3 border px-2 py-2">
              <input type="text" className="form-control" value={editValue[index]} onInput={(e)=>handleEditChange(e, index)} />
              <button className="btn btn-primary" onClick={handleEditSave}>Change</button>
          </div>
            ) : (
              <div key={index} className="d-flex justify-content-between align-items-center my-3 border px-2 py-2" data-index={index}>
                <span className="fs-5">{name}</span>
                <div className="action d-flex gap-2">
                  <button className="btn btn-primary change-btn" data-type='change'>Change</button>
                  <button className="btn btn-danger delete-btn" data-type='delete'>Del</button>
                </div>
              </div>
            )
      )}
  </div>
);
}

export default TodoList