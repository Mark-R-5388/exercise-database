import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <h3>Exercise Database</h3>
        <ul>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/exercises'>Exercises</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
