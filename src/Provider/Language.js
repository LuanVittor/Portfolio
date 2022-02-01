import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import LanguageContext from '../Context/LanguageContext'

export default function Language({ children }) {
  const navigate = useNavigate()
  const [language, setLanguage] = useState('pt');

  const changeLanguage = (param) => {
    if (param === 'Portuguese') {
      setLanguage('pt') 
      navigate('/pt')
    } else {
      setLanguage('en')
      navigate('/') 
    }
  }


  const myContext = {
    changeLanguage,
    language
  }
  return (
    <LanguageContext.Provider value={ myContext } >
      { children }
    </LanguageContext.Provider>
  )
}
