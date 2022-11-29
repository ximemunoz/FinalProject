import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://i.blogs.es/3fd5a4/jumpstory-download20220511-143520/840_560.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem ea, molestias voluptates error quae nulla natus nostrum reiciendis accusamus,</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="topIcon fa-brands fa-square-facebook"> </i> 
            <i className=" topIcon fa-brands fa-square-twitter"> </i> 
            <i className="topIcon fa-brands fa-square-pinterest"> </i> 
            <i className="topIcon fa-brands fa-square-instagram"> </i> 
        </div>
      </div>
    </div>
  )
}
