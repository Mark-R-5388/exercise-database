import { useState, useEffect } from "react";

const ExerciseCategories = ({ title }) => {
  const [exerciseCategories, setExerciseCategories] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setExerciseCategories(data));
  }, []);

  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="exercise-categories-container">
        {exerciseCategories &&
          exerciseCategories.map((category) => (
            <div className="exercise-category-container" key={category.id}>
              <h2>{category.name}</h2>
              <p>{category.exercises}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExerciseCategories;
