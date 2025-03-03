import React from 'react';
import Project from '../components/Project/Project.jsx';
import LogoJavaScript from '/logo-javascript.png';
import LogoReact from '/logo-react.png';
import LogoNext from '/logo-next.png';
import LogoPostgres from '/logo-postgres.png';
import LogoNode from '/logo-node.png';
import LogoExpress from '/logo-express.png';
import LogoMongodb from '/logo-mongodb.png';
import LogoGit from '/logo-git.png';
import LogoFigma from '/logo-figma.png';

const Projects = () => {
  return (
    <div className='container-projects'>
        <h1 className='topico'>Projetos</h1>

        <Project
            nome="RecruitSync"
            foto="/foto-recruitsync.jpeg"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            iconesTec={[LogoJavaScript, LogoReact, LogoNext, LogoPostgres, LogoGit, LogoFigma]}
        />

        <Project
            nome="Clone Spotify"
            foto="/foto-recruitsync.jpeg"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            iconesTec={[LogoJavaScript, LogoReact, LogoNode, LogoExpress, LogoMongodb, LogoGit]}
        />

    </div>
  )
}

export default Projects