import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import LeftSettings from './leftSettings/leftSettings';
import RightSettings from './rightSettings/rightSettings';

const UserSettings = () => {

  const [setting, setSetting] = useState(0)

  return (
    <>
      <Row className='w-100'>
        <Col md={4}>
          <LeftSettings
            setSetting={setSetting}
          />
        </Col>
        <Col md={8}>
          <RightSettings
            setting={setting}
          />
        </Col>
      </Row>
    </>
  );
}

export default UserSettings