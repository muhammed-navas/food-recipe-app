import React, { useContext } from 'react'
import { MenuContext } from './Context'

function Popup({closeBtn,click }) {
const allMenu=useContext(MenuContext)

  function closeHandle(){
    return closeBtn(false)
  }

let cartItems=allMenu.filter((dishes)=>{
  return(
    dishes.strMeal==click 
  )
}).map((item)=>{
  return(
    <div className="popup-contetn-data">
      <div className="popup-img">
        <img src={item.strMealThumb} alt="" />
      <p>{item.strInstructions}</p>
      </div>
      <h2>{click}  </h2>
      <span className='price'>PRICE: $10</span>
      {/* <span className='span'> FOOD AREA :  {item.strArea}</span> 
        <span>{item.strCategory}</span>  */}
      <ul>
        <li> {item.strIngredient1} </li>
        <li> {item.strIngredient2} </li>
        <li> {item.strIngredient3} </li>
        <li> {item.strIngredient4} </li>
        <li> {item.strIngredient5} </li>
        <li> {item.strIngredient6} </li> 
      </ul>
      <button className='btnn'>Add to cart</button>
        <h3 onClick={closeHandle} className='close'>Close</h3>
    </div>
  )
})
  
  return (
    <div className='popup'>
      <div className="popup-content">
        {cartItems}
      </div>
    </div>
  )
}
export default Popup
