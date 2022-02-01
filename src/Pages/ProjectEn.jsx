import React from 'react';
import HeaderEn from '../Components/HeaderEn';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Projects.css'
import '../css/Home.css'
import trybeStore from '../Images/TrybeStore.png';
import recipesApp from '../Images/Recipes_App.png'
import kahootify from '../Images/Kahootify.png'
import { useNavigate } from 'react-router-dom';

export default function ProjectEn() {
  const navigate = useNavigate();

  return (
    <div className='mainDiv'>
      <HeaderEn />
      <h2 className='title'>Projects</h2>
      <div className='divProjects'>
        <div className="card" >
          <img src={trybeStore} className="card-img-top" alt="Imagee" />
          <div className="card-body">
            <h5 className="card-title">Trybe Store</h5>
            <p className="card-text">A complete online store, made in React.js, with all the information taken from MercadoLivre API.</p>
            <button onClick={() => navigate('/projects/1')} className="btn btn-primary">See more</button>
          </div>
        </div>
        <div className="card" >
          <img src={recipesApp} className="card-img-top" alt="Imagee2" />
          <div className="card-body">
            <h5 className="card-title">Recipes App</h5>
            <p className="card-text">A recipe website with several features, made in React.js, with its information extracted from some APIs.</p>
            <button onClick={() => navigate('/projects/2')} className="btn btn-primary">See more</button>
          </div>
        </div>
        <div className="card" >
          <img src={kahootify} className="card-img-top" alt="Imagee2" />
          <div className="card-body">
            <h5 className="card-title">Kahootify</h5>
            <p className="card-text">A relaxed guessing game based on the Kahoot game made in pure JavaScript, using the Spotify API.</p>
            <button onClick={() => navigate('/projects/3')} className="btn btn-primary">See more</button>
          </div>
        </div>
      </div>
    </div>
  )
}
