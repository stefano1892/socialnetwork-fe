import React from 'react'
import { Col, Row } from 'react-bootstrap';
import LeftSettings from './leftSettings/leftSettings';

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
          col2
        </Col>
      </Row>
    </>
  );
}

export default UserSettings