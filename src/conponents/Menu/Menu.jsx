import { Link } from 'react-router-dom'
import './menu.css'
import { FaImages } from 'react-icons/fa'

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/page1" className="menu__item">
        <FaImages />
        <span>Page 1</span>
      </Link>
      <Link to="/page2" className="menu__item">
        <FaImages />
        <span>Page 2</span>
      </Link>
      <Link to="/page3" className="menu__item">
        <FaImages />
        <span>Page 3</span>
      </Link>
      <Link to="/page4" className="menu__item">
        <FaImages />
        <span>Page 4</span>
      </Link>
      <Link to="/page1" className="menu__item">
        <FaImages />
        <span>Page 5</span>
      </Link>
    </div>
  )
}
