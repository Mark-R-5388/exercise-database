const ExerciseExamples = ({ category }) => {
  const exerciseArray = category.exercises

  return (
    <ul className='container'>
      <h3>Exercise Examples</h3>
      {exerciseArray.map((exercise) => (
        <li className='exercise-example' key={exercise.id}>
          {exercise.name}
        </li>
      ))}
    </ul>
  )
}

export default ExerciseExamples
