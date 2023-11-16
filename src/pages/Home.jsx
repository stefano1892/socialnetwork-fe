import { Card } from "@mui/material"
import React from "react"
import { Col, Row } from "react-bootstrap"
import AddNewPost from "../components/addNewPost"
import HomeLeftColumn from "../components/home/homeLeftColumn"
import HomeRightColumn from "../components/home/homeRightColumn"
import CardLeftColumn from "../components/graphic/cardLeftColumn"
import CardRightColumn from "../components/graphic/cardRightColumn"

const HomeComponent = () => {


  return (
    <>
      <div className="homeBody">
        <Row style={{ width: '100%' }}>
          <Col>
            <CardLeftColumn >
              <HomeLeftColumn />
            </CardLeftColumn>
          </Col>
          <Col className="centerCol">
            <AddNewPost />
            <Card>
              card centrale
            </Card>
          </Col>
          <Col>
            <CardRightColumn >
              <HomeRightColumn />
            </CardRightColumn>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HomeComponent