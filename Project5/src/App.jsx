import { useState,createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')

  return (

     <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='box' style={{backgroundColor:theme==='light'?'pink':'red'}}>
      <ChildA/>
      </div>
   
      </ThemeContext.Provider>

  )
}

export default App
export {ThemeContext}
