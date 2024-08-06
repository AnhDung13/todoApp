import TodoForm from "./TodoForm";
import { TaskContext } from "../context/Task";
function Todo(){
    return(
    <TaskContext>
        <div className="container py-3">    
          <TodoForm/>
        </div> 
    </TaskContext>
    )
}
export default Todo