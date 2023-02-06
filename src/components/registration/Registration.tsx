import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IUserRegister } from '../../interfaces/user-interface';
import { registerApi } from "../../api/RegisterApi";
import { Card, Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./registration.scss"

function Register() {
  const [name, setUserName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [existingUser, setExistingUser] = useState<boolean>(false)

  let navigate = useNavigate();

  const agencyLogo = require('../../img/f1Logo.png')

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const registerParameters: IUserRegister = {
      name: name,
      surname: surname,
      email: email,
      password: password
    };
    const sendRegistration: any = await registerApi(registerParameters);

    if (sendRegistration.status == 200 && typeof sendRegistration.data != "string") {
      navigate("/")
    } else {
      setExistingUser(true)
    }
  }

  return (
    <>
      <div className="container registrationContainer">
        <img src={agencyLogo} />
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