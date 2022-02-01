import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Projects.css'
import '../css/Home.css'
import trybeStore from '../Images/TrybeStore.png';
import recipesApp from '../Images/Recipes_App.png'
import kahootify from '../Images/Kahootify.png'
import { useNavigate } from 'react-router-dom';
import HeaderPT from '../Components/HeaderPT';

export default function ProjectPt() {
  const navigate = useNavigate();

  return (
    <div className='mainDiv'>
      <HeaderPT />
      <h2 className='title'>Projetos</h2>
      <div className='divProjects'>
        <div className="card" >
          <img src={trybeStore} className="card-img-top" alt="Imagee" />
          <div className="card-body">
            <h5 className="card-title">Trybe Store</h5>
            <p className="card-text">Uma loja online completa, feita em React.js, com todas as informações retiradas da API do MercadoLivre.</p>
            <button onClick={() => navigate('/projects/1/pt')} className="btn btn-primary">Mais Informações</button>
          </div>
        </div>
        <div className="card" >
          <img src={recipesApp} className="card-img-top" alt="Imagee2" />
          <div className="card-body">
            <h5 className="card-title">Recipes App</h5>
            <p className="card-text">Um site  complexo de receitas, feito em React.js, com suas informações extraídas de algumas APIs.</p>
            <button onClick={() => navigate('/projects/2/pt')} className="btn btn-primary">Mais Informações</button>
          </div>
        </div>
        <div className="card" >
          <img src={kahootify} className="card-img-top" alt="Imagee2" />
          <div className="card-body">
            <h5 className="card-title">Kahootify</h5>
            <p className="card-text">Um jogo de adivinhação baseado no jogo Kahoot feito em JavaScript puro, usando a API do Spotify.</p>
            <button onClick={() => navigate('/projects/3/pt')} className="btn btn-primary">Mais Informações</button>
          </div>
        </div>
      </div>
    </div>
  )
}