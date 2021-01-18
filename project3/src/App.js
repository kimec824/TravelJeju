
import Questionbox from './Questionbox';
import Survey_header from './Survey_header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Result from './Result';

function App() {
  return (
          <div>
            <Survey_header/>
            <Questionbox/>
          </div>
  );
}

export default App;
