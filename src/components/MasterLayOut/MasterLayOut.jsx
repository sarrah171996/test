import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'


export default function MasterLayOut() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    
    </>
  )
}
