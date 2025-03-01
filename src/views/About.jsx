import React from 'react';
import Tools from '../components/Tools/Tools.jsx';
import { tecnologias } from '../constants';

const About = () => {
  return (
    <div className='container-about'>
        <h1 className='topico'>Sobre mim</h1>
        <div className='sessao1'>
            <div className="area-descricao">
                <p className='paragrafo-padrao'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="area-foto">
                <img className="foto" src="/foto-teste.png" alt="Minha foto" />
            </div>
        </div>
        <h1 className='topico'>Ferramentas</h1>
        <div className='sessao2'>
            <div className="descricao-ferramentas">
                <p className='paragrafo-padrao'>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
                </p>
            </div>
            <div className='ferramentas'>
            {tecnologias.map((item, index) => (
                <Tools
                    key={index}
                    name={item.name}
                    link={item.link}
                    alt={item.alt}
                />
            ))}
            </div>
        </div>
    </div>
  )
}

export default About