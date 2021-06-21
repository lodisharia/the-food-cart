import './topbar.css'

export default function TopBar() {
  return (
    <div className = 'top'>
      <div className = 'topLeft'></div>
      <div className = 'topCenter'>
        <ul className = 'topList'>
          <li className = 'topListItem'>Home</li>
          <li className = 'topListItem'>About</li>
          <li className = 'topListItem'>Contact</li>
          <li className = 'topListItem'>Write</li>
          <li className = 'topListItem'>Log Out</li>
        </ul>
      </div>
      <div className = 'topRight'>
        <img className = 'profilePicture' src = 'https://i.pinimg.com/originals/4f/03/36/4f03369c65e80bc0a920a0362d745125.jpg'></img>
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
