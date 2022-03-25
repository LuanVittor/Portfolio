import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PROJECTS = [
  {
    id: '1',
    Name: 'Loja Virtual',
    Tecnologies: ['React', 'JavaScript', 'CSS', 'LocalStorage', 'Bootstrap'],
    StartDate: '01/Nov/2021',
    ConclusionDate: '04/Nov/2021',
    VideoLink: 'https://www.youtube.com/embed/i3THVCZUmNM',
    Description: 'Essa Loja Virtual foi feita usando a api do MercadoLivre e fazendo toda manipulacao de informcoes ultilizando apenas props, isso mesmo, apenas props. O maior aprendizado desse projeto veio atravez da confusao de dados onde era preciso passar informacoes entre componentes pais e filhos, fazendo a aplicacao ficar cheia de funcoes e de alta complexidade, assim mostrando a necessidade de se usar Redux e React Hooks!',
    GitHubLink: 'https://github.com/tryber/sd-015-a-project-frontend-online-store/pull/195', // link nao fucniona pois n eh publico
  },
  {
    id: '2',
    Name: 'Aplicativo de receitas',
    Tecnologies: ['React', 'JavaScript', 'CSS', 'LocalStorage', 'RTL', 'Bootstrap'],
    StartDate: '02/jan/2022',
    ConclusionDate: '10/jan/2022',
    VideoLink: 'https://www.youtube.com/embed/Q7OK1ZuPYhk',
    Description: 'Um aplicativo de receitas feito com o intuito de aprimorar meu conhecimentos em React, nesse aplicativo utilizei majoritoriamente Context API para manipulacao de informacoes e localStorage para salvar informacoes de sessao. O Aplicativo conta com mais de 15 paginas diferentes, a possibilidade de iniciar receitas, favoritar, compartilhar elas!  As Comidas/Bebidas sao extraidas de uma API assim como todas suas informacoes.',
    GitHubLink: 'GitHub Link',
  },
  {
    id: '3',
    Name: 'Kahootify',
    Tecnologies: ['JavaScript', 'CSS'],
    StartDate: '30/Sep/2021',
    ConclusionDate: '02/Oct/2021',
    VideoLink: 'https://www.youtube.com/embed/1r-7QB_1QrM',
    Description: 'Uma aplicacao descontraida baseada no jogo Kahoot onde o objetivo eh acetar o compositor da musica q esta tocando em menos tempo possivel. A plicacao foi feita INTEIRAMENTE em Javascript, sem a ultilizacao de qualquer biblioteca ou frameword. Todas as informacoes como genero musical, artista e nome da musica foram retiradas da API do Spotify!',
    GitHubLink: 'GitHub Link',
  },
]

export default function ProjectDetailPT() {
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
                  <button className="btn btn-primary" onClick={() => navigate('/projects/pt')}>Voltar</button>
                  <h2>{elem.Name}</h2>
                  <a href="https://github.com/LuanVittor" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" height='75' width='75' />
                  </a>
                </div>
                <div className='dates'>
                  <h5>{`Data de início: ${elem.StartDate}`}</h5>
                  <h5>{`Data de Conclusão : ${elem.ConclusionDate}`}</h5>
                </div>
                <div className='mainContent'>
                  <h4 className='textDescription'>{elem.Description}</h4>
                  <iframe width="560" height="315" src={elem.VideoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='subDiv'>
                  <div className='usedTechnologies'>
                <h3>Tecnologias Usadas</h3>
                <div className='tecnologies'>
                  {elem.Tecnologies.map((elem, i) => <h5 key={i}>{elem}</h5>)}
                  </div>
                  </div>
                  <h2>Oque eu aprendi ?.... </h2>
                  <h2>Em construção</h2>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

