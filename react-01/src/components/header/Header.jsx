import "./header.css"


export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSn">The freedom to fly</span>
        <span className="headerTitleLg">Travel Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://photographylife.com/wp-content/uploads/2018/02/Photographing-Airplanes-4.jpg"
        alt=""
      />
    </div>
  )
}
