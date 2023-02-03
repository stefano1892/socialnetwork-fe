import React from 'react'
import { Col, Row } from 'react-bootstrap';
import LeftSettings from './leftSettings/leftSettings';
import RightSettings from './rightSettings/rightSettings';

const UserSettings = () => {

  const settingSelected = (data: string) => {

  }

  return (
    <>
      <Row className='w-100'>
        <Col md={4}>
          <LeftSettings />
        </Col>
        <Col md={8}>
          <RightSettings />
        </Col>
      </Row>
    </>
  );
}

export default UserSettings