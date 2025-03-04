import React from 'react';
import LogoWl from '/logo-wl.png';
import { Link } from 'react-scroll';
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
                  <Link className='links' to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                  <Link className='links' to="sobre" smooth={true} duration={500}>Sobre</Link>
                </li>
                <li>
                  <Link className='links' to="projetos" smooth={true} duration={500}>Projetos</Link>
                </li>
                <li>
                  <Link className='links' to="contatos" smooth={true} duration={500}>Contato</Link>
                </li>
              </ul>
            </div>
        </nav>
      </div>
  )
}

export default Header