import { Outlet } from 'react-router-dom'
import './App.css'
import  NavItem  from './components/NavItems'

function App() {
  

  return (
    <>
      <NavItem />
      <Outlet />
    </>
  )
}

export default App
