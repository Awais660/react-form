import React,{useState} from 'react';
function Box(){
    const[data,setData]=useState(null)
  const[print,getPrint]=useState(false)

  function getData(val){
    console.log(val.target.value)
    setData(val.target.value)
    getPrint(false)
  }
    return(
        <>
<h1>{data}</h1>
      <input type='text' onChange={getData}/>
      <br></br>
      <br></br>

      {
        print?
        <h1>{data}</h1>
        :null
      }
      <button onClick={()=>getPrint(true)}>Print Data</button>
        </>
    )
}
export default Box;