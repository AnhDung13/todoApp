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
        role: ['admin']
    },
    {
        path: '/404',
        element: <Error/>,
    }
]

export default routes