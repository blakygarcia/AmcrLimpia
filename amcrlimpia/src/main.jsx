import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from '../src/components/navbar/Nav'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Mailer } from './components/Mailer/mailer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Home/>
    <Mailer/>
    <Footer/>
  </React.StrictMode>
)
