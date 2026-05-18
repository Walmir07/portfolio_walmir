import React from 'react';
import './About.css';
import Tools from '../../components/Tools/Tools.jsx';
import { tecnologias } from '../../constants.js';
import { Timeline } from '../../components/Timeline/Timeline.jsx';

const About = ({ id }) => {
  return (
    <div id={id} className='container-about'>
        <h1 className='topico'>Sobre mim</h1>
        <div className='sessao1'>
            <div className="area-descricao">
                <p className='paragrafo-padrao'>Olá, me chamo Walmir Lima e sou graduando em Análise e Desenvolvimento de Sistemas e Técnico em Informática pelo IFPB. Sou entusiasta no mundo da programação e um desenvolvedor apaixonado por tecnologia, sempre em buscando crescimento profissional. Gosto de explorar novos desafios que ampliem minhas habilidades e me permitam criar soluções inovadoras. Com um forte interesse em desenvolvimento fullstack, estou constantemente aprendendo e aprimorando meus conhecimentos para contribuir com projetos que fazem a diferença.
                </p>

                <p className='paragrafo-padrao'>Além da programação, valorizo o trabalho em equipe, a organização e a busca contínua por evolução técnica e pessoal. Tenho interesse em desenvolver aplicações modernas, eficientes e bem estruturadas, aplicando boas práticas de desenvolvimento e criando experiências que unam desempenho, funcionalidade e design. Meu objetivo é construir uma carreira sólida na área de tecnologia, participando de projetos desafiadores que me permitam gerar impacto real e evoluir constantemente como desenvolvedor.
                </p>
                
            </div>

            <div className='area-timeline'>
                <Timeline></Timeline>
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