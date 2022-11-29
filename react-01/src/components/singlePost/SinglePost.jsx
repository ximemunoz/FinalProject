import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" 
            alt="" 
            className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Ximena</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veniam voluptates fuga dignissimos recusandae quisquam quod, asperiores quis quos omnis pariatur labore corrupti ipsa dicta debitis itaque ullam iusto doloremque?</p>
      </div>
    </div>
  )
}
