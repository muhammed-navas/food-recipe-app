import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <div className="logo">LOGO</div>
        <nav>
          <Link to='/' >Home </Link>
          <Link to='/addcart'>Add to cart</Link> 
        </nav>
      </header>
    </div>
  )
}
export default Header
