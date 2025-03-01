import React from 'react';
import './Tools.css';

const Tools = ({ link, alt, name }) => {
  return (
    <div className='tools'>
        <img className="logo-ferramenta" src={link} alt={alt}></img>
        <p className="nome-ferramenta">{name}</p>
    </div>
  )
}

export default Tools