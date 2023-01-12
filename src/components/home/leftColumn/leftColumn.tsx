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

  const goToEvents = () => {
    console.log("vai agli eventi")
  }

  const goToGroups = () => {
    console.log("vai ai gruppi")
  }

  const goToUsers = () => {
    console.log("vai a tutti gli utenti")
  }

  const goToSettings = () => {
    console.log("vai alle impostazioni")
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
          <img src={icona_eventi} alt='event_icon' className='menuIcon' onClick={() => goToEvents()} /> Eventi
        </div>
        <div className='menuItem'>
          <img src={icona_gruppi} alt='groups_icon' className='menuIcon' onClick={() => goToGroups()} /> Gruppi
        </div>
        <div className='menuItem'>
          <img src={icona_utenti} alt='users_icon' className='menuIcon' onClick={() => goToUsers()} /> Utenti
        </div>
        <div className='menuItem'>
          <img src={icona_impostazioni} alt='settings_icon' className='menuIcon' onClick={() => goToSettings()} /> Impostazioni
        </div>
      </div>
      <div className='cardFooter' onClick={() => goToProfile()}>
        Vedi profilo
      </div>
    </>
  );
}

export default HomeLeftColumn