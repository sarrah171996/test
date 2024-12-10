import './App.css'

import MasterLayOut from './components/NavBar/NavBar.jsx'
 import Header from './components/Header/header.jsx'
import AllCars from './components/AllCars/AllCars.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element:<MasterLayOut/>,
    children:[
      {index : "true" , element : <Header/>},
      {index : "/allcars" , element : <AllCars/>},

    ]
  }])

  return (
    

    <>

<RouterProvider router={routes}></RouterProvider>


{/* <MasterLayOut/> */}
{/* <Header/>
<AllCars/> */}


    </>
  )
}

export default App
