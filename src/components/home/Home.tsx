import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./style.scss"

const HomeComponent = () => {


  return (
    <>
      <div className="homeBody">
        <Row style={{ width: '100%' }}>
          <Col className="leftCol">
            Parte sinistra
          </Col>
          <Col className="centerCol">
            Parte centrale
          </Col>
          <Col className="rightCol">
            Parte destra
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HomeComponent