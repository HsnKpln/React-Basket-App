import React from 'react'
import ButtonGroup from './ButtonGroup'

function Urun({ item, onClick }) {
    return (
        <div className='products'>
            <div className='imageContainer'>
                <img src={item.thumbnail} />
            </div>
            <h2>{item.title}</h2>
            <span>${item.price}</span>
            <ButtonGroup detailClick={onClick} basketClick={onClick}/>
        </div>
    )
}

export default Urun