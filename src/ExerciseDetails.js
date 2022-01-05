import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ExerciseDetails = () => {
  const { id } = useParams();
  const {
    data: category,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/categories/" + id);

  return (
    <div className="exercise-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {category && (
        <article>
          <h2>{category.name}</h2>
          <ul>
            {category.exercises.map((exercise) => (
              <li key={exercise.id}>{exercise.name}</li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
};

export default ExerciseDetails;
