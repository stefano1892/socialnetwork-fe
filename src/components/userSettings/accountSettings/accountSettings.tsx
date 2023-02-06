import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import "./style.scss";

const AccountSettings = () => {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const values = {
      name: name,
      lastname: lastName,
      secondName: secondName,
      birthDate: birthDate,
      email: email,
      phoneNumber: phoneNumber
    }
    console.log(values)
  }


  return (
    <div className='container p-4'>
      <div className='mb-5 title_account_settings' >Impostazioni Account</div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label className='required'>Nome</Form.Label>
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="secondName">
              <Form.Label>Secondo nome</Form.Label>
              <Form.Control type="text" onChange={(e) => setSecondName(e.target.value)} value={secondName} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label className='required'>Cognome</Form.Label>
              <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="birthDate">
              <Form.Label className='required'>Data di nascita</Form.Label>
              {/*<Form.Control type="date" onChange={(e) => setLastName(e.target.value)} value={birthDate} required />*/}
              <div>
                <input type="date" className='datepicker' />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 phoneNumber" controlId="phoneNumber">
              <Form.Label>Numero di telefono</Form.Label>
              <Form.Control type="number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className='required'>Email</Form.Label>
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </Form.Group>
          </Col>
        </Row>
        <div className='w-100'>
          <button className='btn btn-primary m-auto' type="submit">Conferma</button>
        </div>
      </form>
    </div>
  )
}

export default AccountSettings