import React from "react";
function func(props){
return(
    <>
    {/* <button onClick={()=>props.data()}>click</button> */}
    <button onClick={props.data}>click</button>
    </>
)
}
export default func;