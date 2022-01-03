import { useState, useEffect } from "react";
import ExerciseList from "./components/ExerciseList";

const ExerciseCategories = ({ title }) => {
  const [exerciseCategories, setExerciseCategories] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setExerciseCategories(data));
  }, []);

  return (
    <div>
      <h2 className="exercise-category-title">{title}</h2>
      {exerciseCategories && (
        <ExerciseList exerciseCategories={exerciseCategories} />
      )}
    </div>
  );
};

export default ExerciseCategories;
