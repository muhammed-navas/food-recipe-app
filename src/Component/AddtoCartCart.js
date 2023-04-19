import React, { useState } from 'react'

function AddtoCartCart({items}) {
    const [incri,setIncri]=useState(1)
    // const [data,setData]=useState()
    
    function plusBtn(item){
        return setIncri(incri+1)
      }
      function delet(){

      }

    function maines(){
        if(incri>1){
             setIncri(incri-1)
          }else{
         }}
  return (
    <div>
      <img src={items.image} alt="" />
      <h4>{items.name}</h4>
      <div className='plus'> 
        <button onClick={()=>{plusBtn(items.name)}}>+</button> 
        <h3>qty:<span>{incri}</span></h3>
        <button onClick={maines}>-</button>
        <button className='btn' onClick={delet} >Delete</button>
      <h4>price:<span>$10</span></h4>
        </div>  
    </div>
  )
}

export default AddtoCartCart
