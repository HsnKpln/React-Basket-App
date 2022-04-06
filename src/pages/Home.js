import React, { useEffect, useState } from 'react'
import Urun from '../components/Urun';
import { useBasket } from '../contexts/Basket';
import { getAllProducts } from '../services/productServices'

function Home() {
    const [list , setList] = useState();
    /*Alternative way */
    //const {basketList,addBasket} = useContext(BasketContext)
    const {addBasket} = useBasket();
    

    useEffect(()=>{
       getData()
    },[])

    const getData = async () => {
        const data = await getAllProducts()
        setList(data.products)
    }
  return (
    <div className='productContainer'>
    {
        list && list.map((item,index)=>
                <Urun item={item} key={index} onClick={()=> addBasket(item)}/>
        )
    }
    </div>
   
  )
}

export default Home