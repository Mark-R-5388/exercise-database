import { useState, useEffect } from "react";
import ExerciseList from "./components/ExerciseList";
import useFetch from "./useFetch";

const ExerciseCategories = () => {
  const {
    data: exerciseCategories,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/categories");

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {exerciseCategories && (
        <ExerciseList
          title="Exercise Categories"
          exerciseCategories={exerciseCategories}
        />
      )}
    </div>
  );
};

export default ExerciseCategories;
