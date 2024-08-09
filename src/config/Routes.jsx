import Todo from "../components/todo/Todo";
import Login from "../components/Login";
import Error from "../components/err/Err";
const routes = [
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/todo',
        element: <Todo/>,
        role: [1]
    },
    {
        path: '/404',
        element: <Error/>,
        role: [0]
    }
]

export default routes