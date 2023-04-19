
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import Chooseit from './Chooseit';
import { ContextFn } from './Context';
import Header from './Header';
import Hero from './Hero';
import Special from './Special';

function ApiCall() {
const[itemName,setItemName] =useState([])




  function HandleClick(item,image){
   
    setItemName([
        ...itemName,
        {
        name:item,
        image:image
      }
    ])
     
  
  
}


  return (<>
    <Router>   
        <Header />
      <Routes>
        <Route exact path="/" element={
          <ContextFn >
            <Hero />
            <Special HandleClick={HandleClick}  />
            <Chooseit HandleClick={HandleClick} />
          </ContextFn>
         } />  
        <Route path="/addcart" element={
           <ContextFn>
          <AddtoCart itemName={itemName}  />
          </ContextFn>
        } />
      </Routes>
    </Router>
  </>)
}
export default ApiCall
