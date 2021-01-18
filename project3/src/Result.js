import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import './result.css'
import axios from 'axios'
import { BrowserRouter,Route } from 'react-router-dom';


function Result(){
    const [q1,setQ1] = useState("one")
    const [q2,setQ2] = useState("one")
    //const [q3,setQ3] = useState("one")
    //const [q4,setQ4] = useState("one")
    var data = null;
    const Data=axios.get('http://192.249.18.235:3000/surveyresult').then((response)=>{
        data = response.data.mySurveyresult;
    setQ1(data.q1);
    setQ2(data.q2);
});

    return(
        q1==="two"?<div>하이</div>:<div>바이</div>
    )
}

 export default Result;