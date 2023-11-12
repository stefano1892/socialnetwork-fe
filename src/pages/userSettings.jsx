import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import LeftSettings from '../components/userSettings/settingsSections/settingsSections';
import RightSettings from '../components/userSettings/settingsContent/settingsContent';

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