import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import { useBasket } from '../contexts/Basket';

function About() {
  const {basketList} = useBasket()
  return (
    <>
        <div>About</div>
        <Link to='/'>Home</Link>
        {
          basketList && basketList.map((item,index)=>
             <div key={index}>{item.title}</div>
          )
        }
    </>

  )
}

export default About