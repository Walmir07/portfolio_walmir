import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import DownloadCV from '../../components/DownloadCV/DownloadCV.jsx';

const Home = ({ id }) => {
  return (
    <div id={id} className='container-home'>
        <div className='elementos'>
          <p className='paragrafo1'>Olá, meu nome é</p>
          <h1 className='nome'>WALMIR LIMA</h1>
          <h1 className='animacao'>
            <TypeAnimation
                sequence={[
                    'Desenvolvedor Full-Stack',
                    1500,
                    'Desenvolvedor Web',
                    1500,
                ]}
                repeat={Infinity}
                style={{ color: '#BBC6FF' }}
            />
          </h1>
          <p className='paragrafo-home'>Inovando a web com propósito e precisão. Como desenvolvedor FullStack, construo experiências digitais acessíveis e intuitivas, deixando um impacto duradouro.</p>
          <div className='acoes'>

            <DownloadCV></DownloadCV>
            
            <Link className='link-contatos' to="contatos" smooth={true} duration={500}>
                Entrar em contato
                <img className='logos' src='/right-arrow.png' alt='Logo de seta para direita'></img>
            </Link>

          </div>
        </div>
        <div className='area-foto'>
            <img className="foto" src="/foto-walmir.jpg" alt="Minha foto" />
        </div>
    </div>
  )
}

export default Home