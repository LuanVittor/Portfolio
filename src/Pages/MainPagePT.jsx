import React from 'react'
import HeaderPT from '../Components/HeaderPT'
import FotoMinha from '../Images/euescuroPortfolio.jpeg';
import FotoMinha2 from '../Images/euPortfolio.jpeg';

export default function MainPagePT() {
  return (
    <div className='mainDiv'>
      <HeaderPT />
      <div className='homePage'>
        <br />
        <h1 className='typing-ola'>Ola,</h1>
        <h1 className='typing-eu'>Eu sou o Luan,</h1>
        <h1 className='typing-dev'>Desenvolvedor Full Stack.</h1>
            <svg viewBox="0 0 1000 50">
              <path d="M100,50 h800" />
            </svg>
        <div className='aboutMe'>
          <div className='textAbout'>
            <h1>Sobre mim</h1>
            <h3 >Desde crianca muito curioso e interessado pelo mundo da tecnolgia, apos passar por uma experiecia de trabalho no Canada tentando me encontrar e 3 anos trabalhando no setor financeiro em um industria grafica, me sinto muito feliz em ter descoberto minha real vocação: Programar! </h3>
          </div>
          <img className='photome' src={FotoMinha2} alt='Me at my Workspace' />
        </div>
      </div>
    </div>
  )
}
