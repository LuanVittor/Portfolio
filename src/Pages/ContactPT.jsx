import React from 'react'
import HeaderPT from '../Components/HeaderPT'

export default function ContactPT() {
  return (
    <div className='mainDiv'>
      <HeaderPT />
      <div className='generalInfo'>
        <h1>Nome: Luan Vitor Coelho de Araujo</h1>
        <h1>Email: luan_vittor@hotmail.com</h1>
        <h1>Telefone: +55 (11) 99361-6681</h1>
        <br />
      <h1>Baixe meu curriculo aqui!</h1>
      <a className='icons' href="https://drive.google.com/file/d/1lIY1dIHpAUdfPl657dcB3ARNTZ8NWY4Q/view?usp=sharing" target='_blank'><img src="https://pixsector.com/cache/5d353540/av3544fca9fdc10112f68.png" alt="Download" height='75' width='75' /></a>
      </div>
      <div className='icons'>
      <a href="mailto:luan_vittor@hotmail.com" target="_blank">
        <img src="https://w7.pngwing.com/pngs/159/962/png-transparent-email-computer-icons-email-miscellaneous-angle-rectangle.png" alt="Email" height='75' width='75' />
        </a>
        <a href="https://www.linkedin.com/in/luan-vittor/?locale=en_US" target="_blank" >
        <img src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"  
        alt="Linkedin" height='75' width='75' />
        </a>
        <a href="https://github.com/LuanVittor" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" height='75' width='75' />
        </a>
      <a href="https://wa.me/5511993616681" target="_blank">
        <img src="https://w7.pngwing.com/pngs/874/257/png-transparent-whatsapp-computer-icons-computer-software-whatsapp-text-logo-whatsapp-icon.png" 
        alt="WhatsApp" height='75' width='75' />
        </a>
      </div>
    </div>
  )
}
