import Questionbox from './Questionbox';
import React, { useEffect, useState } from 'react';
import Survey_header from './Survey_header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Result from './Result';
import TravelPage from './TravelPage/TravelPage';
import axios from 'axios';



function App() {
  const [region, setregion] = useState("aewol");
  var tmpregion = "aewol"
  

  

  return (
    <div className="App">
     <Router>
     <Switch>
          <Route path="/plan">
          <TravelPage region = {tmpregion}/>
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
