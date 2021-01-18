import Questionbox from './Questionbox';
import Survey_header from './Survey_header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Result from './Result';
import TravelPage from './TravelPage/TravelPage';




function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
          <Route path="/plan">
          <TravelPage />
          </Route>

          <Route path= "/">
          <Survey_header/>
          <Questionbox/>
          </Route>

        </Switch>
     </Router>
    </div>

  );
}

export default App;
