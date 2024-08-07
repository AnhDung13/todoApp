import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../context/Auth'
const Error = ()=>{
    const {logout} = useAuth()
    return(
        <div className='p-4 text-white text-center'>
            <h1 style={{fontSize: 10+'rem'}}>404</h1>
            <p>Page not found</p>
            <a href="/" className='btn btn-success' onClick={logout}>Return</a>
        </div>
    )
}

export default Error