import React from 'react'

function Pagination(props) {
let array=[]
 for( let i=1;i<=Math.ceil(props.filterd.length/props.pages)  ;i++){
    array.push(i)
}
function nextClickData(e){
    let happy= e.target.id
    props.setCurrent(happy)
}

let one= array.map((item)=>{
    return (
        <li id={item} onClick={nextClickData}>
            {item}
        </li>
    )
})
// console.log(array);
  return (
   <>
   <section>

   <ul className="pagination flex" >
{one}
   </ul>
   </section>
   </>
  )
}

export default Pagination
