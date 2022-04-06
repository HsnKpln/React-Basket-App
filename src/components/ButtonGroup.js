import React from 'react'

function ButtonGroup(props) {
  return (
    <div className='buttonGroup'>
        <button onClick={props.detailClick}>Detail</button>
        <button onClick={props.basketClick}>Add Chart</button>
    </div>
  )
}

export default ButtonGroup