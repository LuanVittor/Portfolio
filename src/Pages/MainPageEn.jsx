import React from 'react'
import HeaderEn from '../Components/HeaderEn'
import '../css/Home.css'
import FotoMinha from '../Images/euescuroPortfolio.jpeg';
import FotoMinha2 from '../Images/euPortfolio.jpeg';

export default function MainPageEn() {

  return (
    <div className='mainDiv'>
      <HeaderEn />
      <div className='homePage'>
        <br />
        <h1 className='typing-hi'>Hi,</h1>
        <h1 className='typing-im'>I'm Luan,</h1>
        <h1 className='typing-stack'>Full Stack developer.</h1>
        <svg viewBox="0 0 1000 50">
              <path d="M100,50 h800" />
            </svg>
        <div className='aboutMe'>
          <div className='textAbout'>
            <h1>About Me</h1>
            <h3 >Since I was a child I was very curious and interested in the world of technology, after going through an experience of working, studying and living alone in Canada trying to find myself. I came back to Brazil and spent 3 years working in the financial sector in a printing industry, and today I feel very happy to finally say that I discovered my real vocation: Programming! </h3>
          </div>
          <img className='photome' src={FotoMinha2} alt='Me at my Workspace' />
        </div>
      </div>
    </div>
  )
}
