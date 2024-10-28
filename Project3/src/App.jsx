import { useState } from 'react'
import './App.css'
import LogoutBtn from './component/LogoutBtn'
import LoginBtn from './component/LoginBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)

   return(
    <div>
        <h1>Welcome to my channel</h1>
        {isLoggedIn && <LogoutBtn/>}
    </div>
   )

// if(isLoggedIn){
//   return (
// <LogoutBtn/>
//   )
// }
// else{
// return(
//   <LoginBtn/>
// )
// }
// return(
//   <>
//    {isLoggedIn?<LogoutBtn/>:<LoginBtn/>}
//   </>
// )
}

export default App
