import './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
    return (
        <div className = 'register'>
            <span className = 'registerTitle'>Sign Up</span>
            <form className = 'registerForm'>
                <label>Username</label>
                <input type = 'text' className = 'registerInput'></input>
                <label>Email</label>
                <input type = 'text' className = 'registerInput'></input>
                <label>Password</label>
                <input type = 'password' className = 'registerInput'></input>
                <button className = 'registerButton'>Sign Up</button>
            </form>
            <button className = 'registerLoginButton'><Link className = 'link' to = '/login'>Log In</Link></button>
        </div>
    )
}
