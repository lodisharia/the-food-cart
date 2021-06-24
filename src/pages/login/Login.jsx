import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className = 'login'>
            <span className = 'loginTitle'>Log In</span>
            <form className = 'loginForm'>
                <label>Email</label>
                <input type = 'text' className = 'loginInput'></input>
                <label>Password</label>
                <input type = 'password' className = 'loginInput'></input>
                <button className = 'loginButton'>Log In</button>
            </form>
            <button className = 'loginRegisterButton'><Link className = 'link' to = '/register'>Sign Up</Link></button>
        </div>
    )
}
