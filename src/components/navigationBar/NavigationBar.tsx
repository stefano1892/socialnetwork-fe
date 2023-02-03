import * as React from 'react';
import "./style.scss"
import { useAppSelector } from "../../app/hooks";
import { selectUserValues } from "../../features/user/userSlice";
import { Col, Form, Row } from 'react-bootstrap';
import f1Logo from '../../img/f1Logo.png'
import ProfileImage from '../home/img/foto_profilo.jpg'
import SettingsIcon from '../../img/icons/icon_settings.png'
import NotifyIcon from '../../img/icons/icona_notifiche.png'
import ChatIcon from '../../img/icons/icona_chat.png'
import { Link } from 'react-router-dom';

export default function NavigationBarComponent() {

  const user = useAppSelector(selectUserValues);

  const handleSubmit = (e: any) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log('hai cercato una persona ' + e.target.value)
    }
  }

  return (
    <>
      <div className='nav'>
        <Row className='w-100 mt-1'>
          <Col style={{ textAlign: 'center' }}>
            <Link to="/home">
              <img src={f1Logo} alt="agencyLogo" className='agencyLogo' />
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
              <Link to="/settings">
                <img src={SettingsIcon} alt="settingsIcon" className='settingsIcon' />
              </Link>
            </div>
            <div className='navItemMargin'>
              <img src={ProfileImage} alt="profileIcon" className='profileImage' />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}