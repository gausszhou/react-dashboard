import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="Search" className="icon" />
        <img src="/app.svg" alt="Application" className="icon" />
        <img src="/expand.svg" alt="Expand" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="Notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img className='img' src="https://apps.gausszhou.top/todos/static/img/avatar.b1307b40.jpg" alt="User" />
          <span>Gauss</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar