import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className = 'settings'>
            <div className = 'settingsWrapper'>
                <div className = 'settingsTitle'>
                    <span className = 'settingsUpdateTitle'>Update Your Account</span>
                    <span className = 'settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className = 'settingsForm'>
                    <label>Profile Picture</label>
                    <div className = 'settingsProfilePic'>
                        <img
                        src = 'https://i.pinimg.com/originals/3c/0d/e3/3c0de32d72c39d002c3ff6bc5ae0a7c5.jpg'>

                        </img>
                        <label htmlFor = 'fileInput'>
                        <i class=" settingsProfilePicIcon fas fa-user-circle"></i>
                        </label>
                        <input type = 'file' id = 'fileInput' style = {{display: 'none'}}></input>
                    </div>
                    <label>Username</label>
                    <input type = 'text' placeholder = 'LiziO'></input>
                    <label>Email</label>
                    <input type = 'text' placeholder = 'liziodishari@gmail.com'></input>
                    <label>Password</label>
                    <input type = 'password'></input>
                    <button class = 'settingsSubmit'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
