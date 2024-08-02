import React, { useEffect, useState, useCallback, useRef} from "react"
function TodoListComponent({works, handleAction, editingIndex, handleSave}){

const [editValue, setEditValue] = useState(works.map(({name})=>name));

useEffect(()=>{
  setEditValue(works.map(({name})=>name))
},[works])


const handleEditChange = (e,index) => {
  const newValue = [...editValue]
  const value = e.target.value.trim()
  newValue[index] = value
  setEditValue(newValue)
};

const handleEditSave = () => {
  handleSave(editValue);
};
    return(
        <div className="todo-list" onClick={handleAction}>
            {works.map(({name}, index)=>
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

export default TodoListComponent


