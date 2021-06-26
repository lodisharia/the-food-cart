import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className = 'top'>
      <div className = 'topLeft'></div>
      <div className = 'topCenter'>
        <ul className = 'topList'>
          <li className = 'topListItem'><Link to = '/' className = 'link'>Home</Link></li>
          <li className = 'topListItem'><Link to = '/' className = 'link'>About</Link></li>
          <li className = 'topListItem'><Link to = '/' className = 'link'>Contact</Link></li>
          <li className = 'topListItem'><Link to = '/write' className = 'link'>Write</Link></li>
          <li className = 'topListItem' onClick={handleLogout}>
            {user && 'Log Out'}
          </li>
        </ul>
      </div>
      <div className = 'topRight'>
        {
          user ? (
          <img className = 'profilePicture' src = {user.profilePic}></img>
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
