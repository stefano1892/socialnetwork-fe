import React from 'react'
import ImageProfile from '../img/foto_profilo.jpg'
import './style.scss'
import icona_gruppi from '../../../img/icons/icona_gruppi.png'
import icona_eventi from '../../../img/icons/icona_eventi.png'
import icona_utenti from '../../../img/icons/icona_utenti.png'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { selectUserValues } from '../../../features/user/userSlice'

const HomeLeftColumn = () => {

  const user = useAppSelector(selectUserValues);

  const renderNameAndSurname = () => {
    const firstname = user.name
    const secondName = user.secondName ? user.secondName : ""
    const surname = user.surname

    const nameCapitalized = firstname.charAt(0).toUpperCase() + firstname.slice(1)
    const secondNameCapitalized = secondName ? secondName.charAt(0).toUpperCase() + secondName.slice(1) + ' ' : ''
    const surnameCapitalized = surname.charAt(0).toUpperCase() + surname.slice(1)

    const fullName = nameCapitalized + ' ' + secondNameCapitalized + surnameCapitalized


    return fullName
  }

  return (
    <>
      <div className='informationsContainer'>
        <div>
          <img src={ImageProfile} alt="profileImage" className='profileImage' />
        </div>
        <div className='nameStyle'>
          {renderNameAndSurname()}
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
          <Link to="/events" className='linkStyle'>
            <img src={icona_eventi} alt='event_icon' className='menuIcon' /> Eventi
          </Link>
        </div>
        <div className='menuItem'>
          <Link to="/groups" className='linkStyle'>
            <img src={icona_gruppi} alt='groups_icon' className='menuIcon' /> Gruppi
          </Link>
        </div>
        <div className='menuItem'>
          <Link to="/users" className='linkStyle'>
            <img src={icona_utenti} alt='users_icon' className='menuIcon' /> Utenti
          </Link>
        </div>
      </div>
      <Link to="/profile">
        <div className='cardFooter'>
          Vedi profilo
        </div>
      </Link>
    </>
  );
}

export default HomeLeftColumn