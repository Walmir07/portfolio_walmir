import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import LogoLinkedin from '/logo-linkedin.png';
import LogoGithub from '/logo-github.png';
import LogoDiscord from '/logo-discord.png';
import LogoInstagram from '/logo-instagram.png';

const Home = () => {
  return (
    <div className='container-home'>
        <div className='elementos'>
          <p className='paragrafo1'>Olá, meu nome é</p>
          <h1 className='nome'>WALMIR LIMA</h1>
          <h1 className='animacao'>
            <TypeAnimation
                sequence={[
                    '<Desenvolvedor Full-Stack/>',
                    1500,
                    '<Desenvolvedor Web/>',
                    1500,
                    '<Desenvolvedor Mobile/>',
                    1500,
                ]}
                repeat={Infinity}
                style={{ color: '#BBC6FF' }}
            />
          </h1>
          <p className='paragrafo-padrao'>Innovating the web with purpose and precision. As a full-stack engineer, I create accessible, user-friendly digital experiences that leave a lasting impact.</p>
          <div className='contatos'>
            <a href='https://www.linkedin.com/in/walmir-lima-da-silva-442300283/' target='_blank'>
                <img className='img-contato' src={LogoLinkedin} alt="Logo do Linkedin"/>
            </a>
            <a href='https://github.com/Walmir07' target="_blank">
                <img className='img-contato' src={LogoGithub} alt="Logo do GitHub" />
            </a>
            <a href='https://discord.gg/walmir333' target='_blank'>
                <img className='img-contato' src={LogoDiscord} alt="Logo do Discord"/>
            </a>
            <a href='https://instagram.com/walmir.lima_' target='_blank'>
                <img className='img-contato' src={LogoInstagram} alt="logo do Instagram"/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home