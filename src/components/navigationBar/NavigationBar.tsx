import * as React from 'react';
import "./style.scss"
import { useAppSelector } from "../../app/hooks";
import { selectUserValues } from "../../features/user/userSlice";
import { Button, Col, Form, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import f1Logo from '../../img/f1Logo.png'
import ProfileImage from '../home/img/foto_profilo.jpg'
import SettingsIcon from '../../img/icons/icon_settings.png'
import NotifyIcon from '../../img/icons/icona_notifiche.png'
import ChatIcon from '../../img/icons/icona_chat.png'
import LogoutIcon from '../../img/icons/logout.png'
import { Link } from 'react-router-dom';

export default function NavigationBarComponent() {

  const user = useAppSelector(selectUserValues);

  const handleSubmit = (e: any) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log('hai cercato una persona ' + e.target.value)
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div className='container settingsIcon'>
          <div style={{ marginBottom: '0.5rem' }}>
            <Link to="/settings" className='menu_item_container'>
              <img src={SettingsIcon} alt="settingsIcon" className='settingsIcon' /> Impostazioni
            </Link>
          </div>
          <div>
            <Link to="/" className='menu_item_container'>
              <img src={LogoutIcon} alt="logoutIcon" className='settingsIcon' /> Esci
            </Link>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <img src={ProfileImage} alt="profileIcon" className='profileImage' />
    </OverlayTrigger>
  );

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
              {Example()}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}