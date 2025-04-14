import "./App.css";
import "./index.css";
import Header from "./Header";
import Start from "./Start";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Fitness-Goal-Tracker">
          <Header />
        </Route>

        <Route path="/start">
        <Start />

        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
