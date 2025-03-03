import React from 'react';
import LogoWl from '/logo-wl.png';
import './Header.css';


const Header = () => {
  return (
    <div className='header'>
        <nav className='navegacao'>
            <div className='link-wl'>
              <a href='#'>
                <img className='logo-wl' src={LogoWl} alt='Logo WL'></img>
              </a>
            </div>
            <div className='indices'>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                <a href='#'>Sobre</a>
                </li>
                <li>
                <a href='#'>Projetos</a>
                </li>
                <li>
                <a href='#'>Contato</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
  )
}

export default Header