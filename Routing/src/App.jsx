
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'
import ParamComponent from './components/ParamComponent'

const router = createBrowserRouter([
  {
    path:'/',
    element:
    <div><Navbar/>
           <Home/>
    </div>
  },
  {
    path:'/about',
    element:    <div><Navbar/>
    <About/>
</div>

  },
  {
    path:'/help',
    element: <div><Navbar/>
    <Help/>
</div>

  },
  {
    path:'/student/:id', 
    element: <div><Navbar/>
    <ParamComponent/>
</div>

  }
]
)
function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
