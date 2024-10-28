import { useState } from 'react'
import './App.css'
import ColorSwitch from './assets/components/ColorSwitch'

function App() {
  const [count, setCount] = useState(0)

  function handleClicksOutside(){
    setCount(count+1)

  }
  function getRandomColor(){
    let r = 150 + Math.round(100*Math.random());
    let g = 150 + Math.round(100*Math.random());
    let b = 150 + Math.round(100*Math.random());
    return `rgb(${r},${g},${b})`
  }
  function handleColorChanger(){
   let bodyback = document.body.style;
   console.log(bodyback)
   bodyback.backgroundColor = getRandomColor()
  }
  
  return (
    <>
         <div className="box" onClick={handleClicksOutside}>
          <ColorSwitch onChangeColor={handleColorChanger}/>
         </div>
         <h3>Clicks on the page :{count}</h3>
  
    </>
  )
}

export default App
