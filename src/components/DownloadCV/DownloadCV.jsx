import React from 'react';
import './DownloadCV.css';

const DownloadCV = () => {
  return (
    <a className='downloadCV' href="/WalmirResumeLtx.pdf" download="/WalmirResumeLtx"> Baixar currículo 
    <img className='logos' src='/downloads.png' alt='logo de download'></img>
    </a>
  )
}

export default DownloadCV