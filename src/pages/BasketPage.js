import React, { useEffect, useState } from 'react'
import "../App.css";
import { DeleteIcons } from '../constants/icons';
import { useBasket } from '../contexts/Basket';

function BasketPage() {
    const { basketList, deleteProduct } = useBasket()
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        let sayi = 0;
        let price = 0;

        basketList && basketList.map(item => {
            sayi += item.count
            price += item.count * item.price
        })
        setTotalCount(sayi)
        setTotalPrice(price)

    }, [basketList])

    const deleteProductBasket = item =>{
      deleteProduct(item)
    }
    return (
        <>
             {
                 basketList.length>0 ? 
                 <>
                  <div className="basketProductListHeader">
                <span>Ürün Adı</span>
                <span>Ürün Adedi</span>
                <span>Ürün Birim Fiyatı</span>
                <strong>Ürün Toplam Fiyat</strong>
            </div>
            {
                basketList && basketList.map((item, index) =>
                    <div key={index} className="basketProductList">
                        <span>{item.title}</span>
                        <span>{item.count}</span>
                        <span>${item.price}</span>
                        <strong>${item.price * item.count}</strong>
                        <button onClick={()=>deleteProductBasket(item)}>
                            <DeleteIcons size={24} color='#ffffff'/>
                        </button>
                    </div>
                )
            }
            <div className="basketProductList">
                <span>Toplam</span>
                <span>{totalCount}</span>
                <span></span>
                <strong>${totalPrice.toFixed(2)}</strong>
            </div>
                 </>
                 :
                 <div className='noProduct'>There are no products in the chart.</div>
             }
        </>

    )
}

export default BasketPage