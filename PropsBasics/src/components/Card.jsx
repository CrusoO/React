import React from 'react'
import './Card.css'
import Goku1 from '../assets/Goku1.gif'

const Card = (props) => {
  return (
    <div className='User'>
      <h1>Hi my name is {props.name}</h1>
      <img id='userRole' src={Goku1} alt="person1" desc='Fighter'/>
       <p>Description</p>
    </div>
  )
}

export default Card
