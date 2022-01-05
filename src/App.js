import Navbar from "./components/Navbar";
import Home from "./Home";
import Exercises from "./Exercises";
import About from "./About";
import ExerciseDetails from "./ExerciseDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/exercises">
              <Exercises />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/exercises/:id">
              <ExerciseDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
