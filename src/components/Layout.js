import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../contexts/Basket';
import {BasketIcons} from '../constants/icons';

function Layout({children}) {
    const {basketList} = useBasket();

    const [productCount,setProductCount] = useState(0)
    
    useEffect(()=>{
        let sayi =0;
        basketList&& basketList.map(item =>{
            sayi += item.count
            
        })
        setProductCount(sayi)
        
    },[basketList])

  return (
      <>
       <div className='Layout'>
           <Link to='/'><span>Home</span></Link>
           <Link to='/about'><span>About</span></Link>
           <Link to='/basketPage'>
               <strong>
               <BasketIcons color='#ffffff' size={24} />
               <b>{productCount}</b> 
               </strong>
            </Link>
       </div>
       {children}
      </>
  )
}

export default Layout