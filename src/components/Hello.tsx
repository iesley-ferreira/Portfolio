import React from 'react';
import './styles/Hello.css';
import perfilImage from '../assets/img-perfil1.png';
import GitHubLink from './links/GitHub';
import LinkedIn from './links/LinkedIn';
import WhatsApp from './links/WhatsApp';
import Instagram from './links/Instagram';

const Hello: React.FC = () => {
  return (
    <div id='Home' className='main-container'>
      <div className='main-div'>
        <h1>Iesley Ferreira</h1>
        <p className='role'>Full-Stack Developer</p>
        <div className='thankyou'>
          <p>Thank you for visiting.</p>
          <p>I am excited to showcase my portfolio and skills.</p>
          <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>
        </div>
        <div className='contacts'>
          <GitHubLink />
          <LinkedIn />
          <WhatsApp />
          <Instagram />
        </div>
      </div>
      <div className='profile-image'>
        <img src={ perfilImage } alt='perfil-image' />
      </div>
    </div>
  );
};

export default Hello;
