import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const ExerciseDetails = () => {
  const { id } = useParams()
  const {
    data: category,
    error,
    isLoading,
  } = useFetch('http://localhost:8000/categories/' + id)

  return (
    <main className='container'>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {category && (
        <article className='exercise-details_container'>
          <h2 className='title exercise-details_title'>{category.name}</h2>
          <ul className='exercise-details_list-container'>
            {category.exercises.map((exercise) => (
              <li className='exercise-details_list-item' key={exercise.id}>
                {exercise.name}
              </li>
            ))}
          </ul>
        </article>
      )}
    </main>
  )
}

export default ExerciseDetails
