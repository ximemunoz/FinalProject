import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/444/446/desktop-wallpaper-satoru-gojo-icon-anime-anime-icons-jujutsu-1438x1440-for-your-mobile-tablet.jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Ximena"/>
                <label>Email</label>
                <input type="email" placeholder="ximena@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
