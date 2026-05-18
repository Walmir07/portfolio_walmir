import React from 'react';
import './Project.css';

const Project = ({ foto, nome, descricao, iconesTec, linkRepositorio, linkSite }) => {
  return (
    <div className='project'>

        <div className='sessao-imagem'>
            <img className='foto-projeto' src={foto} alt={`Foto do ${nome}`} />
        </div>

        <div className='sessao-informacoes'>
            <h2 className='nome-projeto'>{nome}</h2>
            <p className='descricao'>{descricao}
            </p>
            <div className='repositorio-acoes'>

              <a href={linkRepositorio} className='repositorio' target='_blank'>
                  <p className='nome-rep'>Ver repositório</p>
                  <img className='logo-repositorio' src='/github.png' alt='Logo GitHub'></img>
              </a>

              <a href={linkSite} className='site' target='_blank'>
                  <p className='nome-rep'>Visitar site</p>
                  <img className='logo-site' src='/right-arrow.png' alt='Logo seta'></img>
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