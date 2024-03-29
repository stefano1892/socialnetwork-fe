import React, { useState, useRef, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import agencyLogo from '../img/agencylogo.png'
import ProfileImage from '../img/foto_profilo.jpg'
import SettingsIcon from '../img/icons/icon_settings.png'
import NotifyIcon from '../img/icons/icona_notifiche.png'
import ChatIcon from '../img/icons/icona_chat.png'
import LogoutIcon from '../img/icons/logout.png'
import { Link } from 'react-router-dom';

export default function NavigationBarComponent() {

  const [showList, setShowList] = useState(false)
  const containerRef = useRef(null);

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log('hai cercato una persona ' + e.target.value)
    }
  }

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <div className='navItemMargin' ref={containerRef}>
              {/*<ProfileImageComponent />*/}
              <img src={ProfileImage} alt="profileIcon" className='profileImage' onClick={() => setShowList(!showList)}/>
              {showList && (
                <div className="settingsContainer">
                  <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                    <li className='mb-1'>
                      <Link to="/profile" className='menu_item_container'>
                        <img src={ProfileImage} alt="settingsIcon" className='profile-image-panel' /> <b>Stefano Calcaterra</b>
                      </Link>
                    </li>
                    <li className='mb-1'>
                      <Link to="/settings" className='menu_item_container'>
                        <img src={SettingsIcon} alt="settingsIcon" className='settings-icon-panel' /> <span>Impostazioni</span>
                      </Link>
                    </li>
                    <li className='mb-1'>
                      <Link to="/" className='menu_item_container'>
                        <img src={LogoutIcon} alt="logoutIcon" className='settings-icon-panel' /> Esci
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