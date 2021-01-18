import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import './result.css'
import axios from 'axios'
import { BrowserRouter,Route } from 'react-router-dom';


function Result(){
    const [q1,setQ1] = useState("one")
    const [q2,setQ2] = useState("one")
    const [q3,setQ3] = useState("one")
    const [q4,setQ4] = useState("one")
    var data = null;
    const Data=axios.get('http://192.249.18.235:3000/surveyresult').then((response)=>{
        data = response.data.mySurveyresult;
        console.log(data);
    setQ1(data.q1);
    setQ2(data.q2);
    setQ3(data.q3);
    setQ4(data.q4);
    });

    switch(q1){
        case "one":
            switch(q2){
                case "one":
                    switch(q3){
                        case "one":
                            switch(q4){
                                case "one":  return(<div>1111</div>);
                                case "two": return(<div>1112</div>);
                            }
                        case "two":
                            switch(q4){
                                case "one":  return(<div>1121</div>);
                                case "two": return(<div>1122</div>);
                            }
                    }
                case "two":
                    switch(q3){
                        case "one":
                            switch(q4){
                                case "one":  return(<div>1211</div>);
                                case "two": return(<div>1212</div>);
                            }
                        case "two":
                            switch(q4){
                                case "one":  return(<div>1221</div>);
                                case "two": return(<div>1222</div>);
                            }
                    }
            }
        case "two":
            switch(q2){
                case "one":
                    switch(q3){
                        case "one":
                            switch(q4){
                                case "one":  return(<div>2111</div>);
                                case "two": return(<div>2112</div>);
                            }
                        case "two":
                            switch(q4){
                                case "one":  return(<div>2121</div>);
                                case "two": return(<div>2122</div>);
                            }
                    }
                case "two":
                    switch(q3){
                        case "one":
                            switch(q4){
                                case "one":  return(<div>2211</div>);
                                case "two": return(<div>2212</div>);
                            }
                        case "two":
                            switch(q4){
                                case "one":  return(<div>2221</div>);
                                case "two": return(<div>2222</div>);
                            }
                    }
            }
    }
}

/*

    if(q1==="one"&&q2==="one"&&q3==="one"&&q4==="one")
    {return(<div>당신에게 어울리는 제주의 여행지는 애월읍입니다.</div>)}
    else{
    return(
        /*q1==="one"&&q2==="one"&&q3==="one"&&q4==="one"?<div>당신에게 어울리는 제주의 여행지는 애월읍입니다.</div><div>대표적인 여행지는..</div>:<div></div>
        q1==="one"&&q2==="one"&&q3==="one"&&q4==="two"?<div>당신에게 어울리는 제주의 여행지는 서귀포시입니다.</div>:<div></div>
        q1==="one"&&q2==="one"&&q3==="two"&&q4==="one"?<div>당신에게 어울리는 제주의 여행지는 표선면입니다.</div>:<div></div>
        q1==="one"&&q2==="one"&&q3==="two"&&q4==="two"?<div>당신에게 어울리는 제주의 여행지는 조천읍입니다.</div>:<div></div>
        q1==="two"&&q2==="two"&&q3==="one"&&q4==="one"?<div>당신에게 어울리는 제주의 여행지는 월정리입니다.</div>:<div></div>
        q1==="two"&&q2==="two"&&q3==="one"&&q4==="two"?<div>당신에게 어울리는 제주의 여행지는 한림읍입니다.</div>:<div></div>
        q1==="two"&&q2==="two"&&q3==="two"&&q4==="one"?<div>당신에게 어울리는 제주의 여행지는 우도입니다.</div>:<div></div>
        q1==="two"&&q2==="two"&&q3==="two"&&q4==="two"?<div>당신에게 어울리는 제주의 여행지는 제주시입니다.</div>:<div></div>
    )}
}
*/
 export default Result;