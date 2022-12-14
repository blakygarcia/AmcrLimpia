import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from '../src/components/navbar/Nav'
import Contact from './components/Contactus/Contact'
import { Footer } from './components/Footer/Footer'
import  Gallery  from './components/Gallery/Gallery'
import Home from './components/Home/Home'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Nav />
     <Home/>
     <Gallery />
     <Contact />
    <Footer />
    
   
  </React.StrictMode>
)
