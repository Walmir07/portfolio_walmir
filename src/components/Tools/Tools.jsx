import React from 'react';
import './Tools.css';

const Tools = ({ link, alt, name }) => {
  return (
    <div className='tools'>
        <p className="nome-ferramenta">{name}</p>
        <img className="logo-ferramenta" src={link} alt={alt}></img>
    </div>
  )
}

export default Tools