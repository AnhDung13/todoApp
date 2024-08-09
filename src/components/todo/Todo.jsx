import TodoForm from "./TodoForm";
import { TaskProvider } from "../context/Task";
import { useAuthContext } from "../context/Auth";
function Todo(){
  const {logout} = useAuthContext()
    return(    
    <TaskProvider>
        <div className="container my-3 position-relative">    
          <TodoForm/>
          <a href="/" onClick={logout} className="btn btn-danger position-absolute end-0 top-0">Logout</a>
        </div> 
    </TaskProvider>
    )
}
export default Todo