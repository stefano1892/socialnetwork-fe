import { Card } from "@mui/material"
import React from "react"
import { Col, Row } from "react-bootstrap"
import AddNewPost from "../../components/addNewPost/addNewPost"
import HomeLeftColumn from "../../components/home/homeLeftColumn"
import HomeRightColumn from "../../components/home/homeRightColumn"

const HomeComponent = () => {


  return (
    <>
      <div className="homeBody">
        <Row style={{ width: '100%' }}>
          <Col className="leftCol">
            <Card className="leftColCard">
              <HomeLeftColumn />
            </Card>
          </Col>
          <Col className="centerCol">
            <AddNewPost />
            <Card>
              card centrale
            </Card>
          </Col>
          <Col className="rightCol">
            <Card className="rightColCard">
              <HomeRightColumn />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HomeComponent