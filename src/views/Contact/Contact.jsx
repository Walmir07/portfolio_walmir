import React from 'react'
import './Contact.css';
import LogoLinkedin from '/public/logo-linkedin.png';
import LogoGithub from '/public/logo-github.png';
import LogoDiscord from '/logo-discord.png';
import LogoInstagram from '/logo-instagram.png';

const Contact = ({ id }) => {
  return (
    <div id={id} className='container-contact'>
      <h1 className='topico'>Contato</h1>
      <div className="sessoes-cont">
        
        <form className="formulario" action="https://formsubmit.co/227d5d2fbccb061f624e91fb02f730f5" method="POST">
          <h2 className="titulos-form">Nome</h2>
          <input className='inputs' type="text" name="name" required/>
          <h2 className="titulos-form">Email</h2>
          <input className='inputs' type="text" name="email" required/>
          <h2 className="titulos-form">Mensagem</h2>
          <textarea  className="mensagem" name="mensagem" required></textarea>
          <button className='enviar-form' type='submit'>Enviar mensagem</button>
        </form>
        
        <div className="sessao-contatos">
          <h2 className="titulos-form">Email</h2>
          <p className='paragrafo-padrao'>walmirlima046@gmail.com</p>
          <h2 className="titulos-form">Social</h2>
          <div className='redes-sociais'>
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
            <p className="paragrafo-padrao">Vamos conversar! Se você tem uma pergunta, uma ideia de projeto ou apenas quer se conectar, estou sempre feliz em ouvir de você. Deixe-me uma mensagem e entrarei em contato em breve!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Contact