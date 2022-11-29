import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = false; 
  return (
    <div className="top">
      <div className="topLeft"><i className="topIcon fa-brands fa-square-facebook"></i> <i className=" topIcon fa-brands fa-square-twitter"></i> <i className="topIcon fa-brands fa-square-pinterest"></i><i className="topIcon fa-brands fa-square-instagram"></i></div>
      <div className="topCenter"> <ul className="topList"> <li className="topListItem"> <Link to="/" className="link">HOME</Link> </li> <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li> <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li> <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li> <li className="topListItem">{user && "LOGOUT"}</li></ul> </div>
      <div className="topRight">{user ? (<img className="topImg" src="https://e1.pxfuel.com/desktop-wallpaper/444/446/desktop-wallpaper-satoru-gojo-icon-anime-anime-icons-jujutsu-1438x1440-for-your-mobile-tablet.jpg" alt="" />):(<ul className="topList">  <li className="topListItem"> <Link to="/login" className="link">LOGIN</Link> </li> <li className="topListItem"><Link to="/register" className="link">REGISTER</Link></li> </ul>)} <i className="topSearchIcon fa-solid fa-magnifying-glass"></i></div>
    </div>
  )
}
