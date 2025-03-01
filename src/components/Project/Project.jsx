import React from 'react';
import './Project.css';

const Project = ({ foto, nome, descricao }) => {
  return (
    <div className='project'>
        <div className='sessao-imagem'>
            <img className='foto-projeto' src={foto} alt={`Foto do ${nome}`} />
        </div>
        <div className='sessao-informacoes'>
            <h2 className='nome-projeto'>{nome}</h2>
            <p className='descricao'>{descricao}
            </p>
            <div className='repositorio'>
                <p className='nome-rep'>Repositório</p>
                <img className='logo-repositorio' src='/logo-github.png' alt='Logo GitHub'></img>
            </div>
        </div>
    </div>
  )
}

export default Project