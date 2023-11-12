import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from "../api/RegisterApi";
import { Card, Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Register() {
  const [name, setUserName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [existingUser, setExistingUser] = useState(false)

  let navigate = useNavigate();

  const agencyLogo = require('../img/f1Logo.png')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerParameters = {
      name: name,
      surname: surname,
      email: email,
      password: password
    };
    const sendRegistration = await registerApi(registerParameters);

    if (sendRegistration.status === 200 && typeof sendRegistration.data != "string") {
      navigate("/")
    } else {
      setExistingUser(true)
    }
  }

  return (
    <>
      <div className="container registrationContainer">
        <img src={agencyLogo} alt="agencyLogo"/>
        <Card className='registrationCard'>
          <div className='registrationTitle'>
            <span>Inserisci i tuoi dati</span>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FloatingLabel
              controlId="nameRegistration"
              label="Nome"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Nome" onChange={(e) => setUserName(e.target.value)} required />
            </FloatingLabel>
            <FloatingLabel
              controlId="surnameRegistration"
              label="Cognome"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Cognome" onChange={(e) => setSurname(e.target.value)} required />
            </FloatingLabel>
            <FloatingLabel
              controlId="emailRegistration"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            </FloatingLabel>
            <FloatingLabel
              controlId="passwordRegistration"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            </FloatingLabel>
            <Button variant="primary" type="submit" className='registerButton'>
              Conferma iscrizione
            </Button>
          </Form>
          <label className='labelGroup'>Torna alla <Link to="/">Login</Link></label>
          {existingUser ? <div className='existingUser'>Utente già registrato.</div> : null}
        </Card>
      </div>
    </>
  );
}

export default Register;