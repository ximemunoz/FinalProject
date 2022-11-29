import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="http://lemonbin.com/wp-content/uploads/2020/06/airplane-june112020.jpg" alt=""/>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius vel soluta consequatur modi culpa reiciendis qui amet itaque quis distinctio, illo quia tempore nostrum odio quaerat similique ea nam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius vel soluta consequatur modi culpa reiciendis qui amet itaque quis distinctio, illo quia tempore nostrum odio quaerat similique ea nam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius vel soluta consequatur modi culpa reiciendis qui amet itaque quis distinctio, illo quia tempore nostrum odio quaerat similique ea nam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius vel soluta consequatur modi culpa reiciendis qui amet itaque quis distinctio, illo quia tempore nostrum odio quaerat similique ea nam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius vel soluta consequatur modi culpa reiciendis qui amet itaque quis distinctio, illo quia tempore nostrum odio quaerat similique ea nam?</p>
    </div>
  )
}
