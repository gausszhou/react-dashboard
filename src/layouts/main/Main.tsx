
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
import Navbar from '../../components/navbar/Navbar'

const LayoutMain = () => {
  return (
    <div className='main'>
      <Navbar></Navbar>
      <div className="container">
        <div className="menuContainer">
          <Menu></Menu>
        </div>
        <div className="contentContainer">
            <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LayoutMain