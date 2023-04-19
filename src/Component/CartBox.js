import { useState } from "react"



function CartBox(props) {
//   const [color,setColor] = useState('one')
// function changeColor(){
// if(color==setColor){
//   return 'one'
// }else{
//   return 'two'
// }

// }
  return (
    <li >
      <img src={props.itmsMenu.strMealThumb} className='br' alt="" />

      <h2 className='icon ' ><i onClick={() => { props.HandleClick(props.itmsMenu.strMeal, props.itmsMenu.strMealThumb) }}
        className='fa fa-heart-o'  ></i></h2>

      <p>{props.itmsMenu.strMeal}</p>

      <i className='i' onClick={() => { props.clickHandleCart(props.itmsMenu.strMeal) }}>  View More - </i>
      <hr />
    </li>
  )
}

export default CartBox
