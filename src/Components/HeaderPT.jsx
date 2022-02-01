import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import LanguageContext from '../Context/LanguageContext'
import '../css/HeaderCss.css'

export default function HeaderPT() {
  const { changeLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [languageValue, setLanguageValue] = useState('default');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleLanguage = (param) => {
    if (param !== 'default') {
      setLanguageValue(param);
      setIsDisabled(false)
    } else {
      setIsDisabled(true);
    }
  }

  return (
    <div className='header'>
    <div className='buttonsHeader'>
      <button className='btn btn-outline-dark size' onClick={() => navigate("/pt")} >Inicio</button>
      {/* <button className='btn btn-outline-dark size' onClick={() => navigate("/about/pt")}>Sobre mim</button> */}
      <button className='btn btn-outline-dark size' onClick={() => navigate("/projects/pt")}>Projetos</button>
      <button className='btn btn-outline-dark size' onClick={() => navigate("/contact/pt")}>Contato</button>
    </div>
    <div className='languageButton'>
      <select
        value={languageValue}
        className="form-select-sm"
        onChange={({ target }) => handleLanguage(target.value)}
      >
        <option value="default">Escolha uma linguagem</option>
        <option value="Portuguese">Portugues</option>
        <option value="English">Ingles</option>
      </select>
      <button disabled={isDisabled} className='btn btn-outline-dark' onClick={() => changeLanguage(languageValue)}>Definir Linguagem</button>
    </div>
  </div>
  )
}
