import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'
import LanguageContext from '../Context/LanguageContext'
import '../css/HeaderCss.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HeaderEn() {
  const navigate = useNavigate();
  const { changeLanguage } = useContext(LanguageContext)

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
        <button className='btn btn-outline-dark size' onClick={() => navigate("/")} >Home</button>
        {/* <button className='btn btn-outline-dark size' onClick={() => navigate("/about")}>Experiences?</button> */}
        <button className='btn btn-outline-dark size' onClick={() => navigate("/projects")}>Projects</button>
        <button className='btn btn-outline-dark size' onClick={() => navigate("/contact")}>Contact</button>
      </div>
      <div className='languageButton'>
        <select
          value={languageValue}
          className="form-select-sm"
          onChange={({ target }) => handleLanguage(target.value)}
        >
          <option value="default">Choose one language</option>
          <option value="Portuguese">Brazilian Portuguese</option>
          <option value="English">English</option>
        </select>
        <button disabled={isDisabled} className='btn btn-outline-dark' onClick={() => changeLanguage(languageValue)}>Set language</button>
      </div>
    </div>
  )
}
