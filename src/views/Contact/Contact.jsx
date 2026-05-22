import React from 'react';
import './Contact.css';

const Contact = ({ id }) => {
  return (
    <div id={id} className='container-contact'>

      <h1 className='topico'>Contato</h1>

      <div className="sessoes-cont">

        <form
          className="formulario"
          action="https://formsubmit.co/walmirlima046@gmail.com"
          method="POST"
        >

          <h2 className="titulos-form">Nome</h2>

          <input
            className='inputs'
            type="text"
            name="name"
            required
          />

          <h2 className="titulos-form">Email</h2>

          <input
            className='inputs'
            type="text"
            name="email"
            required
          />

          <h2 className="titulos-form">Mensagem</h2>

          <textarea
            className="mensagem"
            name="mensagem"
            required
          ></textarea>

          <button className='enviar-form' type='submit'>
            Enviar mensagem
          </button>

        </form>

        <div className="sessao-contatos">

          <h2 className="titulos-form">Email</h2>

          <p className='paragrafo-padrao'>
            walmirlima.dev@gmail.com
          </p>

          <h2 className="titulos-form">Social</h2>

          <div className='redes-sociais'>

            <a
              href='https://www.linkedin.com/in/walmir-lima-da-silva-442300283/'
              target='_blank'
              className='card-social'
            >
              <img
                className='img-social'
                src={"/linkedin.png"}
                alt="Logo do Linkedin"
              />

              <p>LinkedIn</p>
            </a>

            <a
              href='https://github.com/Walmir07'
              target="_blank"
              className='card-social'
            >
              <img
                className='img-social'
                src={"/github.png"}
                alt="Logo do GitHub"
              />

              <p>GitHub</p>
            </a>

            <a
              href='https://gitlab.com/Walmir07'
              target="_blank"
              className='card-social'
            >
              <img
                className='img-social'
                src={"/gitlab.png"}
                alt="Logo do GitLab"
              />

              <p>GitLab</p>
            </a>

            <a
              href='https://discord.gg/walmir333'
              target='_blank'
              className='card-social'
            >
              <img
                className='img-social'
                src={"/discord.png"}
                alt="Logo do Discord"
              />

              <p>Discord</p>
            </a>

            <a
              href='https://instagram.com/walmir.lima_'
              target='_blank'
              className='card-social'
            >
              <img
                className='img-social'
                src={"/instagram.png"}
                alt="Logo do Instagram"
              />

              <p>Instagram</p>
            </a>

          </div>

          <p className="paragrafo-padrao">
            Vamos conversar! Se você tem uma pergunta,
            uma ideia de projeto ou apenas quer se conectar,
            estou sempre feliz em ouvir de você.
            Deixe-me uma mensagem e entrarei em contato em breve!
          </p>

        </div>

      </div>

    </div>
  )
}

export default Contact;