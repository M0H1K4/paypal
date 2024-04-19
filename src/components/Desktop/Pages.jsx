import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Pricing from '../../components/Desktop/Pricing'
import App from '../../App'
import About from './AboutPage'
import ContactPage from './ContactPage'

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/paypal/' element={<App />} />
        <Route path='/price' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

