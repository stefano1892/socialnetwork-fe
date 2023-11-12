import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProfileSection from '../../components/userProfile/ProfileSection';
import RightColProfile from '../../components/userProfile/RightColProfile';


function UserProfile() {

  return (
    <>
      <Row className="w-100">
        <Col md={8}>
          <ProfileSection />
        </Col>
        <Col md={4}>
          <RightColProfile />
        </Col>
      </Row>
    </>
  )
}

export default UserProfile;