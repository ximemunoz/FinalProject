import "./header.css"


export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSn"> React & Node</span>
        <span className="headerTitleLg"> Blog </span>
      </div>
      <img
        className="headerImg"
        src="https://bptfotografia.com/wp-content/uploads/2021/07/foto-de-un-paisaje-1024x683.jpg"
        alt=""
      />
    </div>
  )
}
