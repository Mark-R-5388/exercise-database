import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar_background'>
      <div className='navbar_container'>
        <p className='navbar_logo'>Exercise Database</p>
        <ul className='navbar_links-container'>
          <li>
            <Link className='navbar_link navbar_first-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='navbar_link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='navbar_link navbar_last-link' to='/exercises'>
              Exercises
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
