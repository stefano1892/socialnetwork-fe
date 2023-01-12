import { Card } from "@mui/material"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import AddNewPost from "../addNewPost/addNewPost"
import HomeLeftColumn from "./leftColumn/leftColumn"
import "./style.scss"

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
              card destra
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HomeComponent