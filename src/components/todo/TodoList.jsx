import React, {useState, useEffect} from "react"
import { useTaskContext } from "../context/Task";
import "bootstrap/dist/css/bootstrap.min.css"
function TodoList(){
 const { works, updateWorks} = useTaskContext()
 const [ edittingWorks, setEdittingWorks] = useState([])
 const handleDelete = (deleteId)=>{
    const newWorks = works.filter(({id})=> id !== deleteId)
    updateWorks(newWorks)
 }
 const handleSetEdittingWorks = (id, name)=>{
    const editedWork = {id: id, name: name}
    setEdittingWorks([...edittingWorks, editedWork])  
 }
 
 const handleChange = (value, id) =>{
    setEdittingWorks(edittingWorks.map(work => work.id === id ? {...work, name:value}: work))
 }

 const handleSave = (e, id)=>{
    e.preventDefault()
    const updatedWork = edittingWorks.find(editingWork => editingWork.id === id)
    updateWorks(works.map(work=> work.id === updatedWork.id ? {...work, name: updatedWork.name}: work))
    setEdittingWorks(edittingWorks.filter(editedWork=> editedWork.id !== id))
 }

 return(
  <div className="todo-list">
      {works.map(({id,name}, index)=>{
        const editedWork = edittingWorks.find(work => work.id===id)
        return editedWork ?
          (
            <form key={index} onSubmit={(e)=> handleSave(e, id)} className="d-flex justify-content-between align-items-center gap-2 my-3 border px-2 py-2">
              <input type="text" value={editedWork.name} onChange={(e)=>handleChange(e.target.value, id)} className="form-control"/>
              <button className="btn btn-primary">Change</button>
            </form>
          )
          : 
          (
            <div key={index} className="d-flex justify-content-between align-items-center my-3 border px-2 py-2" data-index={index}>
                  <span className="fs-5">{name}</span>
                  <div className="action d-flex gap-2">
                    <button className="btn btn-primary change-btn"onClick={()=>handleSetEdittingWorks(id, name)}>Change</button>
                    <button className="btn btn-danger delete-btn" onClick={()=>handleDelete(id)}>Del</button>
                  </div>
            </div>
          )
        })}
  </div>
);
}

export default TodoList