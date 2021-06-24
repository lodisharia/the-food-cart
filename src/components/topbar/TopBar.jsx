import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
  const user = false
  return (
    <div className = 'top'>
      <div className = 'topLeft'></div>
      <div className = 'topCenter'>
        <ul className = 'topList'>
          <li className = 'topListItem'><Link to = '/' className = 'link'>Home</Link></li>
          <li className = 'topListItem'><Link to = '/' className = 'link'>About</Link></li>
          <li className = 'topListItem'><Link to = '/' className = 'link'>Contact</Link></li>
          <li className = 'topListItem'><Link to = '/write' className = 'link'>Write</Link></li>
          <li className = 'topListItem'>
            {user && 'Log Out'}
          </li>
        </ul>
      </div>
      <div className = 'topRight'>
        {
          user ? (
          <img className = 'profilePicture' src = 'https://i.pinimg.com/originals/4f/03/36/4f03369c65e80bc0a920a0362d745125.jpg'></img>
          ) : (
            <ul className = 'topList'>
              <li className = 'topListItem'>
              <Link to = '/login' className = 'link'>Log In</Link>
              </li>
              <li className = 'topListItem'>
              <Link to = '/register' className = 'link'>Sign Up</Link>
              </li>
            </ul>
          )
        }
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
