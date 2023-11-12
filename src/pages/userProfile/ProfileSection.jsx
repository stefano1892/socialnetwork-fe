import React, { useState } from 'react'
import { Card } from "@mui/material"
import "./style.scss"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { Row } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import { selectUserValues } from '../../features/user/userSlice';
import PostComponent from './components/PostComponent';
import InfoComponent from './components/InfoComponent';


const ProfileSection = () => {

  const [activeTab, setActiveTab] = useState(1);

  const user = useAppSelector(selectUserValues);

  const immaginedicopertina = require('../../img/agencylogo.png')

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

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const switchComponent = () => {
    switch(activeTab) {
      case activeTab === 1:
        return <PostComponent />
      case activeTab === 2:
        return <InfoComponent />
      default:
        return null
    }
  }

  return (
    <>
      <Card className='headerProfileCard mt-3'>
        <img src={immaginedicopertina} alt="headerProfileImage" className='headerImage'/>
        <img src={immaginedicopertina} alt="profileImage" className='profileImage'/>
        <div className='nameContainer'>
          <b>{renderNameAndSurname()}</b>
        </div>
        <Row className="rowInfo">
          <div>
            <WorkOutlineIcon style={{color: 'grey'}}/>
            <span style={{marginRight: '1rem', color: 'grey'}}>Frontend Developer</span>
            <PlaceIcon style={{color: 'grey'}}/>
            <span style={{marginRight: '1rem', color: 'grey'}}>Abito qui</span>
          </div>
        </Row>
        <hr/>
        <div style={{ paddingLeft: '3rem', display: 'inline-flex'}}>
          <div
            onClick={() => handleTabClick(1)}
            style={{
              color: activeTab === 1 ? '#2470E3' : 'grey',
              borderBottom: activeTab === 1 ? '2px solid #244AE3' : 'grey'
            }}
            className='tabOption'
          >
            <b>Post</b>
          </div>
          <div
            onClick={() => handleTabClick(2)}
            style={{
              color: activeTab === 2 ? '#2470E3' : 'grey',
              borderBottom: activeTab === 2 ? '2px solid #244AE3' : 'none'
            }}
            className='tabOption'
          >
            <b>Informazioni</b>
          </div>
          <div
            onClick={() => handleTabClick(3)}
            style={{
              color: activeTab === 3 ? '#2470E3' : 'grey',
              borderBottom: activeTab === 3 ? '2px solid #2470E3' : 'grey'
            }}
            className='tabOption'
          >
            <b>Foto</b>
          </div>
        </div>
      </Card>

      {switchComponent()}
    </>
  );
}

export default ProfileSection