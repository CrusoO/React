import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state)=>state.counter.value)
  const [amount,setAmount]=useState(0)

  const dispatch = useDispatch();

  function handleIncrement(){
     dispatch(increment())
  }
  function handleDecrement(){
     dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset())
 }
 function handleInc(){
  dispatch(incrementByAmount(amount))
}


  return (
    <>
    <button onClick={handleIncrement}>+</button>
    <p>Count:{count}</p>
    <button onClick={handleDecrement}>-</button><br /><br />
    <button onClick={handleReset}>Reset</button><br /><br />

    <input  type='Number' value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}/>
    <br /><br />
    <button onClick={handleInc}>Inc by Amount</button>
    </>
  )
}

export default App
