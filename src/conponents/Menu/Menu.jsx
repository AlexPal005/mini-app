import { Link } from 'react-router-dom'
import './menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
      <Link to="/page1" className = 'menu__item'>Page 1 </Link>
      <Link to="/page2" className = 'menu__item'>Page 2 </Link>
      <Link to="/page3" className = 'menu__item'>Page 3 </Link>
      <Link to="/page4" className = 'menu__item'>Page 4 </Link>
      <Link to="/page1" className = 'menu__item'>Page 5 </Link>
    </div>
  )
}

export const Page1 = () => {
  return <div></div>
}
