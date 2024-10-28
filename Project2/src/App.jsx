import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [active,setActive] = useState(0)

  return (
    <>
      <h3>Leopard</h3>
      <Card title='Description' isActive={active===0} onShow={()=>setActive(0)}>
        I am a Leopard
      </Card>

      <h3>Tiger</h3>
      <Card title='Description' isActive={active===1} onShow={()=>setActive(1)}>
        I am a Tiger
      </Card>

       
       
      
    </>
  )
}

export default App
