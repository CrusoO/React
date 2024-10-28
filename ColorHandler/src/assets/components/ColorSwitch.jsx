import React from 'react'

const ColorSwitch = (props) => {
  return (
<button onClick={
    e=> {
    e.stopPropagation();
    props.onChangeColor()}}>Change Color</button>
  )
}

export default ColorSwitch
