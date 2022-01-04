import Navbar from "./components/Navbar";
import ExerciseCategories from "./ExerciseCategories";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ExerciseCategories />
      </div>
    </div>
  );
}

export default App;
