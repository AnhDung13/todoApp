import React, {useState, useEffect} from "react"
import { useTask } from "./context/Task";
import "bootstrap/dist/css/bootstrap.css"

function TodoList(){
 const { workArr, updateWorkArr} = useTask()
 const [editingIndex, setEditingIndex] = useState(null);
 const [editValue, setEditValue] = useState(workArr.map(({name})=>name));

 useEffect(()=>{
  setEditValue(workArr.map(({name})=>name))
},[workArr])

 const handleDelete = (index)=>{
  const newWorks = workArr.filter((_,i)=> i !== index)
  updateWorkArr(newWorks)
}

const handleSave = (newValue)=>{  
  const newWorks = newValue.map(value=>({name:value}))
  updateWorkArr(newWorks)
  setEditingIndex(null)
}

const handleEditChange = (e,index) => {
  const newValue = [...editValue]
  const value = e.target.value.trim()
  newValue[index] = value
  setEditValue(newValue)
};
 return(
  <div className="todo-list">
      {workArr.map(({name}, index)=>
           index === editingIndex ? (
            <div key={index} className="d-flex justify-content-between align-items-center gap-2 my-3 border px-2 py-2">
              <input type="text" className="form-control" value={editValue[index]} onInput={(e)=>handleEditChange(e, index)} />
              <button className="btn btn-primary" onClick={()=>handleSave(editValue)}>Change</button>
          </div>
            ) : (
              <div key={index} className="d-flex justify-content-between align-items-center my-3 border px-2 py-2" data-index={index}>
                <span className="fs-5">{name}</span>
                <div className="action d-flex gap-2">
                  <button className="btn btn-primary change-btn"onClick={()=>setEditingIndex(index)}>Change</button>
                  <button className="btn btn-danger delete-btn" onClick={()=>handleDelete(index)}>Del</button>
                </div>
              </div>
            )
      )}
  </div>
);
}

export default TodoList