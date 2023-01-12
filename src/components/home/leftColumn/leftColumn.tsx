import React from 'react'
import ImageProfile from '../img/foto_profilo.jpg'
import './style.scss'
import icona_gruppi from './img/icona_gruppi.png'
import icona_eventi from './img/icona_eventi.png'
import icona_impostazioni from './img/icona_impostazioni.png'
import icona_utenti from './img/icona_utenti.png'

const HomeLeftColumn = () => {

  const goToProfile = () => {
    console.log("vai al profilo")
  }

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
      <div className='container'>
        <div className='menuItem'>
          <img src={icona_eventi} alt='event_icon' className='menuIcon' /> Eventi
        </div>
        <div className='menuItem'>
          <img src={icona_gruppi} alt='groups_icon' className='menuIcon' /> Gruppi
        </div>
        <div className='menuItem'>
          <img src={icona_utenti} alt='users_icon' className='menuIcon' /> Utenti
        </div>
        <div className='menuItem'>
          <img src={icona_impostazioni} alt='settings_icon' className='menuIcon' /> Impostazioni
        </div>
      </div>
      <div className='cardFooter' onClick={() => goToProfile()}>
        Vedi profilo
      </div>
    </>
  );
}

export default HomeLeftColumn