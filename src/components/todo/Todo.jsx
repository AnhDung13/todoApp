import TodoForm from "./TodoForm";
import { TaskProvider } from "../context/Task";
function Todo(){
    return(
    <TaskProvider>
        <div className="container py-3">    
          <TodoForm/>
        </div> 
    </TaskProvider>
    )
}
export default Todo