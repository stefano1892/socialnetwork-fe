import * as React from 'react';
import "./style.scss"
import { useAppSelector } from "../../app/hooks";
import { selectUserValues } from "../../features/user/userSlice";
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import f1Logo from '../../img/f1Logo.png'
import ProfileImage from '../home/img/foto_profilo.jpg'
import SettingsIcon from '../home/leftColumn/img/icona_impostazioni_singola.png'
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
            <img src={f1Logo} className='agencyLogo' />
          </Col>
          <Col>
            <Form>
              <Form.Control type="text" placeholder="Cerca un collega" onKeyDown={(e) => handleSubmit(e)} />
            </Form>
          </Col>
          <Col className='iconsContentCol'>
            <div>
              <img src={ChatIcon} className='settingsIcon' />
            </div>
            <div className='navItemMargin'>
              <img src={NotifyIcon} className='settingsIcon' />
            </div>
            <div className='navItemMargin'>
              <Link to="/settings">
                <img src={SettingsIcon} className='settingsIcon' />
              </Link>
            </div>
            <div className='navItemMargin'>
              <img src={ProfileImage} className='profileImage' />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}