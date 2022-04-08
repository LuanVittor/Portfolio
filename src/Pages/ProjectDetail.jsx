import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PROJECTS = [
  {
    id: '1',
    Name: 'Trybe Store',
    Tecnologies: ['React', 'Api Rest', 'JavaScript', 'CSS', 'HTML', 'Cypress', 'LocalStorage'],
    StartDate: '01/Nov/2021',
    ConclusionDate: '04/Nov/2021',
    VideoLink: 'https://www.youtube.com/embed/i3THVCZUmNM',
    Description: 'This Virtual Store was made using the MercadoLivre API and making all the manipulation of information using only props, thats right, just props. The biggest learning from this project came through the data confusion where it was necessary to pass information between parent and child components, making the application full of functions and high complexity, thus showing the need to use Redux and React Hooks!',
    GitHubLink: 'https://github.com/LuanVittor/FrontEnd-Online-Store',
  },
  {
    id: '2',
    Name: 'Recipes app',
    Tecnologies: ['React', 'Api Rest', 'JavaScript', 'CSS', 'LocalStorage', 'RTL', 'Bootstrap'],
    StartDate: '02/jan/2022',
    ConclusionDate: '10/jan/2022',
    VideoLink: 'https://www.youtube.com/embed/Q7OK1ZuPYhk',
    Description: 'A recipe application made in order to improve my knowledge in React, in this application I mostly used Context API to manipulate information and localStorage to save session information. The Application has more than 15 different pages, the possibility to start recipes, favorite, share them! Food/Drinks are extracted from an API as is all of its information.',
    GitHubLink: 'https://github.com/LuanVittor/Recipes-App',
  },
  {
    id: '3',
    Name: 'Kahootify',
    Tecnologies: ['HTML', 'JavaScript', 'CSS'],
    StartDate: '30/Sep/2021',
    ConclusionDate: '02/Oct/2021',
    VideoLink: 'https://www.youtube.com/embed/1r-7QB_1QrM',
    Description: 'A relaxed application based on the game Kahoot where the objective is to accept the composer of the music that is playing in the least possible time. The application was made ENTIRELY in Javascript, without the use of any library or frameword. All information such as music genre, artist and song name were taken from the Spotify API!',
    GitHubLink: 'https://github.com/LuanVittor/Kahootify',
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const navigate = useNavigate();

  return (
    <div className='mainDiv'>
      {
        PROJECTS.filter((elem) => elem.id === params.id)
          .map((elem) => {
            return (
              <div key={elem.id} className='projectDetail'>
                <div className='headerProject'>
                  <button className="btn btn-primary" onClick={() => navigate('/projects')}>Go back</button>
                  <h2>{elem.Name}</h2>
                  <a href={elem.GitHubLink} target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" height='75' width='75' />
                  </a>
                </div>
                <div className='dates'>
                  <h5>{`Start date: ${elem.StartDate}`}</h5>
                  <h5>{`Conclusion date: ${elem.ConclusionDate}`}</h5>
                </div>
                <div className='mainContent'>
                  <h4 className='textDescription'>{elem.Description}</h4>
                  <iframe width="560" height="315" src={elem.VideoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='subDiv'>
                  <div className='usedTechnologies'>
                  <h3>Used Technologies</h3>
                  <div className='tecnologies'>
                    {elem.Tecnologies.map((elem, i) => <h5 key={i}>{elem}</h5>)}
                  </div>
                  </div>
                  <h2>What I learned?....</h2>
                  <h2>Under construction</h2>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

