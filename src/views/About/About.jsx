import React from 'react';
import './About.css';
import Tools from '../../components/Tools/Tools.jsx';
import { tecnologias } from '../../constants.js';
import DownloadCV from '../../components/DownloadCV/DownloadCV.jsx';

const About = ({ id }) => {
  return (
    <div id={id} className='container-about'>
        <h1 className='topico'>Sobre mim</h1>
        <div className='sessao1'>
            <div className="area-descricao">
                <p className='paragrafo-padrao'>Olá, me chamo Walmir Lima. Atualmente, sou Técnico em Informática pelo IFPB e um entusiasta no mundo da programação. Sou um desenvolvedor apaixonado por tecnologia e sempre em busca de crescimento profissional. Gosto de explorar novos desafios que ampliem minhas habilidades e me permitam criar soluções inovadoras. Com um forte interesse em desenvolvimento fullstack, estou constantemente aprendendo e aprimorando meus conhecimentos para contribuir com projetos que fazem a diferença.
                </p>
                <DownloadCV/>
            </div>
            <div className="area-foto">
                <img className="foto" src="/foto-walmir.jpeg" alt="Minha foto" />
            </div>
        </div>
        <h1 className='topico'>Ferramentas</h1>
        <div className='sessao2'>
            <div className="descricao-ferramentas">
                <p className='paragrafo-padrao'>Usando uma combinação de tecnologias de ponta e softwares confiáveis, crio aplicativos e sites responsivos ​​de alto desempenho, garantindo uma experiência fluida e intuitiva para usuários em smartphones, tablets e desktops.
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