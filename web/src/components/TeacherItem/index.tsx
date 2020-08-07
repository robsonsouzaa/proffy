import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
      <article className="teacher-item">
        <header>
          <img src="https://avatars0.githubusercontent.com/u/55188229?s=460&u=3710e9b65c49bcd1e49501bac8deac3e417c3e18&v=4" alt="Robso Souza"/>
          <div>
            <strong>Robson Souza</strong>
            <span>Informática</span>
          </div>
        </header>
        
        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br /><br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 100,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherItem