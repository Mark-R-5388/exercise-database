import { Link } from "react-router-dom";
// import ExerciseExamples from "./ExerciseExamples.js";

const ExerciseList = ({ exerciseCategories, title }) => {
  return (
    <>
      <h2 className="exercise-category-title">{title}</h2>
      <div className="exercise-categories-container">
        {exerciseCategories &&
          exerciseCategories.map((category) => (
            <div className="exercise-category-container" key={category.id}>
              <Link to={`/exercises/${category.id}`}>
                <h2 className="category-name">{category.name}</h2>
                {/* <ExerciseExamples category={category} /> */}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default ExerciseList;
