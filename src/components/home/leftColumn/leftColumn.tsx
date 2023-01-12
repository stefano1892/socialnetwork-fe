import React from 'react'
import ImageProfile from '../img/foto_profilo.jpg'
import './style.scss'

const HomeLeftColumn = () => {

  return (
    <>
      <div className='informationsContainer'>
        <div>
          <img src={ImageProfile} className='profileImage' />
        </div>
        <div className='nameStyle'>
          Stefano Calcaterra
        </div>
        <div className='jobStyle'>
          Frontend Developer
        </div>
        <div className='personalPhrase'>
          frase personale a caso la mettiamo un po' lunga in modo che vada a capo e vediamo come sta
        </div>
        <div className='separator' />
      </div>
      <div className='cardFooter'>
        Vedi profilo
      </div>
    </>
  );
}

export default HomeLeftColumn