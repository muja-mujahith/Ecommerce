import { Outlet } from 'react-router-dom'
import './App.css'
import  NavItem  from './components/NavItems'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <NavItem />
      
      <Outlet />
      <Footer />
    </>
  )
}

export default App
