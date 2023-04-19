import React, { useContext, useState, useEffect } from 'react'
import CartBox from './CartBox'
import Pagination from './Pagination'
import { MenuContext } from './Context'
import Popup from './Popup'



function Chooseit(props) {
    const oneMenu = useContext(MenuContext)

  

    const [filterd, setFilterd] = useState([])
    const [activeDish, setActiveDish] = useState('Beef')
    const [current, setCurrent] = useState(1)
    const [pages, setPages] = useState(4)
    const [poptwo, setPoptwo] = useState(false)
    const [massage, setMassage] = useState('')
    const [cata, setCata] = useState([])
    const [beef, setBeef] = useState([])

    let firstData = current * pages;
    let lastData = firstData - pages;
    let showAllData = filterd.slice(lastData, firstData)

    async function setCatagoryData() {
        const dataa = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const catagoryData = await dataa.json();
        setCata(catagoryData.categories)
    }
    async function BeefData() {
        const datas = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
        const singile = await datas.json();
        setBeef(singile.meals)
    }
    useEffect(() => {
        setCatagoryData()
        BeefData()
    }, [])

    let zero = beef.map((itmsMenu, index) => {
        if (index < 4) {
            return (
                <CartBox itmsMenu={itmsMenu}  />
            )
        }
    })

    function popupmassage(cartPopup) {
        setPoptwo(true)
        setMassage(cartPopup)
    }

    function resultDeshes(allData) {
        setBeef([])
        setActiveDish(allData)
        let total = oneMenu.filter((product) => {
            return (
                product.strCategory === allData
            )
        }).map((someValue) => {
            // console.log('what is this ', someValue)
            return (
                <li  >
                    <img src={someValue.strMealThumb} className='br' alt="" />
                    <h2 className="icon"><i onClick={()=>{props.HandleClick(someValue.strMeal, someValue.strMealThumb)}} 
                class="fa fa-heart-o"></i></h2>
                    <p>{someValue.strMeal}</p>
                    <i className='i' onClick={() => popupmassage(someValue.strMeal)} >  View More - </i>
                <hr/>  
                </li>
            )
        })
        setFilterd(total)
    }
    let Allcategory = cata.map((items) => {
        return (<div>
            <li className={items.strCategory == activeDish ? 'active' : ''}
                onClick={() => { resultDeshes(items.strCategory) }}>{items.strCategory}</li>
        </div>
        )
    })
    return (
        <div className='fliterd-dishes'>
            {poptwo && <Popup closeBtn={setPoptwo} click={massage} />}
            <div className="container">
                <div className="text-align">
                    <h2>choose your deshes</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dicta hic deserunt libero expedita, optio accusamus sequi veritatis officiis, vitae omnis officia ea voluptatibus in nam obcaecati cupiditate vel perspiciatis!</p>
                </div>
                <div className="filterd-deshes">
                    <ul>
                        {Allcategory}
                        
                    </ul>
                </div>
                <div className="special-menu">
                    <ul className='flex flex-wrap gap-30'>
                        {zero}
                        {zero != 0 || filterd.length != 0 ? showAllData :
                            <div className='not'>
                                <h2>items is not found</h2>
                            </div>}
                    </ul>
                </div>
                <Pagination filterd={filterd} pages={pages} setCurrent={setCurrent} />
            </div>
        </div>
    )
}
export default Chooseit
