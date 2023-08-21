import React,{useState} from 'react';
function Toggle(){
    const[status,setStatus]=useState(true)
    return(
        <>
        {
            status? <h1>hello word</h1>:null
        }
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
        </>
    )
}
export default Toggle;