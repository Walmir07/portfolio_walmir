import React from 'react';
import './Project.css';

const Project = ({ foto, nome, descricao, iconesTec, linkRepositorio }) => {
  return (
    <div className='project'>
        <div className='sessao-imagem'>
            <img className='foto-projeto' src={foto} alt={`Foto do ${nome}`} />
        </div>
        <div className='sessao-informacoes'>
            <h2 className='nome-projeto'>{nome}</h2>
            <p className='descricao'>{descricao}
            </p>
            <div className='repositorio-tecnologias'>
              <a href={linkRepositorio} className='repositorio' target='_blank'>
                  <p className='nome-rep'>Repositório</p>
                  <img className='logo-repositorio' src='/logo-github.png' alt='Logo GitHub'></img>
              </a>
              <div className='tecnologias-usadas'>
              {iconesTec.map((icone, index) => (
                <img key={index} className='icone' src={icone} alt={`Icone da tecnologia ${index + 1}`} />
              ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project