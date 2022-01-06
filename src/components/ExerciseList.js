import { Link } from 'react-router-dom'

const ExerciseList = ({ exerciseCategories, title }) => {
  return (
    <main className='container'>
      <h2 className='title'>{title}</h2>
      <div className='exercise-categories_container'>
        {exerciseCategories &&
          exerciseCategories.map((category) => (
            <Link
              to={`/exercises/${category.id}`}
              className='exercise-category_container-link'
              key={category.id}
            >
              <h3 className='subtitle'>{category.name}</h3>
            </Link>
          ))}
      </div>
    </main>
  )
}

export default ExerciseList
