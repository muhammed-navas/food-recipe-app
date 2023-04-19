import React, { useState, useEffect } from 'react'
import Loding from './Loding'
export const MenuContext = React.createContext()



export function ContextFn(props) {
    const [menu, setMenu] = useState([])
    const [loding, setLoding] = useState(true)
    async function setData() {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
        const json = await data.json();
        setMenu(json.meals)
        setLoding(false)
    }
    useEffect(() => {
        setData()
    }, [])
   

return (
    <>
            <MenuContext.Provider value={ menu }>
                {!loding ? props.children : <Loding/>}
            </MenuContext.Provider>
        </>
    )
}
