import React,{useState} from 'react'
import './questionbox.css'
import axios from 'axios'
import Radio from '@material-ui/core/Radio';



function Questionbox(){
    const [q1,setQ1] = useState("one")
    const [q2,setQ2] = useState("one")
    const axios=require('axios');
    const q1checked=(e)=>
    {
        setQ1(e.target.value)
        console.log("q1checked")
    }
    const q2checked=(e)=>
    { 
        setQ2(e.target.value)
        console.log("q2checked")
    }
    const json={
        q1:q1,
        q2:q2
    }
    function Submit(){
        alert("하이");
        axios.post(
            'http://192.249.18.235:3000/surveyresult',
            json,
            {
                headers:{'Content-Type':'application/json'}
            }
        ).then((res)=>{
            console.log(res);
        }).catch(error=>{
            console.log(error);
        });
        //alert(axios.get('http://192.249.18.235:3000/surveyresult'));

    }
    return(
        <div>
        <div className='questionbox'>
            <h1>질문1</h1>
            <div>
                <span>후보1</span>
                <Radio 
                value="one"
                checked={q1==="one"} 
                color="primary" 
                onChange={q1checked}
                />
                </div>

                <div>
                <span>후보2</span>
                <Radio 
                value="two" 
                checked={q1==="two"} 
                color="primary" 
                onChange={q1checked}
                />
                </div>

                <div>
                <span>후보3</span>
                <Radio 
                value="three" 
                checked={q1==="three"} 
                color="primary" 
                onChange={q1checked}
                />
            </div>

            <h1>질문2</h1>
                <div>
                <span>후보1</span>
                <Radio 
                value="one" 
                checked={q2==="one"} 
                color="primary" 
                onChange={q2checked}
                />
                </div>

                <div>
                <span>후보2</span>
                <Radio 
                value="two" 
                checked={q2==="two"} 
                color="primary" 
                onChange={q2checked}
                />
                </div>

                <div>
                <span>후보3</span>
                <Radio 
                value="three" 
                checked={q2==="three"} 
                color="primary" 
                onChange={q2checked}
                />
                </div>
        </div>
        <div>
            <button onClick={Submit}>제출</button>
        </div>
</div>
        
    );
    
}

export default Questionbox;