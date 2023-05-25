import React from 'react';
import { useAppSelector } from "../../app/hooks";
import { selectUserValues } from "../../features/user/userSlice";
import { Col, Row } from 'react-bootstrap';
import ProfileSection from './ProfileSection';
import RightColProfile from './RightColProfile';


function UserProfile() {

  const user = useAppSelector(selectUserValues);

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