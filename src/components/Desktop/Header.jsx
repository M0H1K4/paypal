import React from 'react'
import Logo from '../../payapi-multi-page-website/starter-code/assets/shared/desktop/logo.svg'


export default function Header() {
  return (
    <header  className='header'>
        <img className='logo' src={Logo} alt="" />
      <nav>
        <a className='linki' href='#'>Pricing</a>
        <a  className='linki' href='#'>About</a>
        <a className='linki' href='#'>Contact</a>
      </nav>
      <button className='Headerbutton'>Schedule a Demo</button>
    </header>
  )
}
