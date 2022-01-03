const ExerciseExamples = ({ category }) => {
  const exerciseArray = category.exercises;

  return (
    <ul className="exercise-list">
      {exerciseArray.map((exercise) => (
        <li className="exercise-example" key={exercise.id}>
          {exercise.name}
        </li>
      ))}
    </ul>
  );
};

export default ExerciseExamples;
