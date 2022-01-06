import ExerciseList from './components/ExerciseList'
import useFetch from './useFetch'

const Exercises = () => {
  const {
    data: exerciseCategories,
    isLoading,
    error,
  } = useFetch('https://mark-r-5388.github.io/exercise-database/categories')

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {exerciseCategories && (
        <ExerciseList
          title='Exercise Categories'
          exerciseCategories={exerciseCategories}
        />
      )}
    </div>
  )
}

export default Exercises
