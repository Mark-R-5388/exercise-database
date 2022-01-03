import Navbar from "./components/Navbar";
import ExerciseCategories from "./ExerciseCategories";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ExerciseCategories title="Exercise Categories" />
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
