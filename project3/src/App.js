import './App.css';
import TravelPage from './TravelPage/TravelPage';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
          <Route path="/plan">
          <TravelPage />
          </Route>

          <Route path= "/">
          <Home /> 
          </Route>

        </Switch>
     </Router>
    </div>
  );
}

export default App;
