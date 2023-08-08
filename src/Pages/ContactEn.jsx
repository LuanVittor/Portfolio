/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import HeaderEn from '../Components/HeaderEn'
import '../css/COntact.css'


export default function ContactEn() {
  return (
    <div className='mainDiv'>
      <HeaderEn />
      <div className='generalInfo'>
        <div className='meForm'>
          <h3><b>Name:</b> </h3>
          <h3> Luan Vitor Coelho de Araujo</h3>
        </div>
        <div className='meForm'>
          <h3><b>Email:</b> </h3>
          <h3> luan_vittor@hotmail.com</h3>
        </div>
        {/* <button className='btn btn-primary' onClick={() => { navigator.clipboard.writeText('luan_vittor@hotmail.com') }}>Copy Email</button> */}
        {/* <br/> */}
        <div className='meForm'>
          <h3><b>Phone Number:</b> </h3>
          <h3> +55 (11) 99361-6681</h3>
        </div>
        <br />
        <h2>You can view and download my CV clicking here
          <a href="https://drive.google.com/file/d/1pGdBdm6Cz9YtTfQ1yYBqA0Cg6xs_zi6x/view?usp=sharing" target='_blank'><img src="https://pixsector.com/cache/5d353540/av3544fca9fdc10112f68.png" alt="View CV" height='75' width='75' /></a>
        </h2>
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
