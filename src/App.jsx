import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
// const router= createBrowserRouter([
//   {
//     path:"/",
//     element:<><Navbar/><Home/></>
//   },
//   {
//     path:"/about",
//     element:<><Navbar/><About/></>
//   }
//   ,
//   {
//     path:"/services",
//     element:<><Navbar/><Services/></>
//   }
//   ,
//   {
//     path:"/projects",
//     element:<><Navbar/><Projects/></>
//   }
//   ,
//   {
//     path:"/contact",
//     element:<><Navbar/><Contact/></>
//   }
// ])

  return (
    <>
    <div className='main'>
    
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
        
       
    </>
  )
}

export default App
