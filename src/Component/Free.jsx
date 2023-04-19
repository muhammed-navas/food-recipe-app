
import React from 'react'

function Free() {
const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];






  return (
    <div>
  {recipes.map((item)=>{
    return(
<div className='text-align'>

  <h2>{item.name}</h2>
  <ul >
    {item.ingredients.map((more)=>{ 
    return(
    <li>$  {more}</li>
    )})}

  </ul>
</div>
    )

}
  
  )
  }
    </div>
  )
}

export default Free
