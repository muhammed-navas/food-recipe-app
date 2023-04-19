import React, { useContext, useState } from 'react'
import CartBox from './CartBox'
import Popup from './Popup'
import { MenuContext } from './Context'

function Special(props) {
    const menu = useContext(MenuContext)
 const [popup, setPopup] = useState(false)
    const [click, setClick] = useState('')
     
    function clickHandleCart(itemsName) {
        // e.preventDefault()
        setPopup(true)
        setClick(itemsName)
    }
 
    let imagesAll = menu.map((itmsMenu, index) => {
        if (index < 8) {

            return (
                <CartBox itmsMenu={itmsMenu} 
                 HandleClick={props.HandleClick}
                  clickHandleCart={clickHandleCart}
                   />
            )
        }
    })
    return (<>
        < section className="special-deshes">
            {popup && <Popup closeBtn={setPopup} click={click} />}
            <div className='container'>
                <div className="special-deshesh-content text-align">
                    <h2>Our Special Deshes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vero laudantium rem illum, ipsa temporibus, animi eius veniam nemo impedit architecto sapiente asperiores? Ipsa, velit?</p>
                </div>
                <div className="special-menu">
                    <ul className='flex flex-wrap gap-30'>
                        {imagesAll}
                    </ul>
                </div>
            </div>
        </section>
    </>
    )
}

export default Special
