import React, { useState } from 'react';
import "./style.scss"
import { Col, Form, Row } from 'react-bootstrap';
import agencyLogo from '../../img/agencylogo.png'
import ProfileImage from '../home/img/foto_profilo.jpg'
import SettingsIcon from '../../img/icons/icon_settings.png'
import NotifyIcon from '../../img/icons/icona_notifiche.png'
import ChatIcon from '../../img/icons/icona_chat.png'
import LogoutIcon from '../../img/icons/logout.png'
import { Link } from 'react-router-dom';

export default function NavigationBarComponent() {

  const [showList, setShowList] = useState(false)

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log('hai cercato una persona ' + e.target.value)
    }
  }

  /*const ProfileImageComponent = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <img src={ProfileImage} alt="profileIcon" className='profileImage' />
    </OverlayTrigger>
  );*/

  return (
    <>
      <div className='nav'>
        <Row className='w-100 mt-1'>
          <Col style={{ textAlign: 'center' }}>
            <Link to="/home">
              <img src={agencyLogo} alt="agencyLogo" className='agencyLogo' />
            </Link>
          </Col>
          <Col>
            <Form>
              <Form.Control type="text" placeholder="Cosa vuoi cercare?" onKeyDown={(e) => handleSubmit(e)} />
            </Form>
          </Col>
          <Col className='iconsContentCol'>
            <div>
              <Link to="/chat">
                <img src={ChatIcon} alt="chatIcon" className='settingsIcon' />
              </Link>
            </div>
            <div className='navItemMargin'>
              <Link to="/notifications">
                <img src={NotifyIcon} alt="notifyIcon" className='settingsIcon' />
              </Link>
            </div>
            <div className='navItemMargin'>
              {/*<ProfileImageComponent />*/}
              <img src={ProfileImage} alt="profileIcon" className='profileImage' onClick={() => setShowList(!showList)}/>
              {showList && (
                <div className="settingsContainer">
                  <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                    <li>
                      <Link to="/profile" className='menu_item_container'>
                        <img src={SettingsIcon} alt="settingsIcon" className='settingsIcon' /> <span>Profilo</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings" className='menu_item_container'>
                        <img src={SettingsIcon} alt="settingsIcon" className='settingsIcon' /> <span>Impostazioni</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className='menu_item_container'>
                        <img src={LogoutIcon} alt="logoutIcon" className='settingsIcon' /> Esci
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}