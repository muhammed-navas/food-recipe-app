import React, { useState , useContext} from 'react'
import { MenuContext } from './Context'
import AddtoCartCart from './AddtoCartCart'

function AddtoCart(props) {
  
  const menu = useContext(MenuContext)

let imageNameAndImage=props.itemName.map((items)=>{
  return( <>
  <li>
<AddtoCartCart items={items} />
  </li>
  <hr/>
      </>
  )
})


  return (
    <div className='main'>
      <h1>ADD CART LIST ITEMS</h1>
      <div className="addcart">

      <ul>
        {imageNameAndImage}
       
      </ul>
      </div>
      <h1 className='total'>TOTAL : <span> $100</span></h1>
      
    </div>
  )
}

export default AddtoCart



