import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='container not-found_container'>
      <h2 className='title'>404 Not Found</h2>
      <p className='paragraph'>That page cannot be found</p>
      <Link className='not-found_link' to='/'>
        Back to homepage
      </Link>
    </main>
  )
}

export default NotFound
