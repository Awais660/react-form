import React, { useState } from 'react';
function Form(){
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [intrest,setIntrest]=useState("");

    function getFormData(e){
        console.log(name,intrest,tnc);
        e.preventDefault()
    }
    return(
        <>
        <h1>Handle Form in react</h1>
        <form onSubmit={getFormData}>
            <input type='text' onChange={(e)=>setName(e.target.value)}/>
                <br></br>
                <select onChange={(e)=>setIntrest(e.target.value)}>
                    <option>select Opetion</option>
                    <option>marvel</option>
                    <option>dc</option>
                </select>
                <br></br>
                <input type='checkbox' onChange={(e)=>setTnc(e.target.value)}/>
                <br></br>
                <button type='submit'>submit</button>
        </form>
        </>
    )
}
export default Form;