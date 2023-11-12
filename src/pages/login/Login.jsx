import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/LoginApi';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useAppDispatch } from '../../app/hooks';
import { setFullUser } from '../../features/user/userSlice';

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState(false)

  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const agencyLogo = require('../../img/agencylogo.png')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginParameters = {
      email: email,
      password: password
    };
    const doLogin = await loginApi(loginParameters);
    if (doLogin) {
      dispatch(setFullUser(doLogin))
      navigate("/home")
    } else {
      setErrorLogin(true)
    }
  }

  return (
    <>
      <div className='container loginContainer'>
        <img src={agencyLogo} alt="agencyLogo" />
        <Card className='loginCard'>
          <div className='loginTitle'>
            <span>Accedi alla tua area riservata</span>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FloatingLabel
              controlId="emailLogin"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
            </FloatingLabel>
            <FloatingLabel
              controlId="passwordLogin"
              label="Password"
              className="mb-3 passwordGroup"
            >
              <Form.Control type="password" placeholder="yourpassword" onChange={(e) => setPassword(e.target.value)} required />
            </FloatingLabel>
            <Button variant="primary" type="submit" className='loginButton'>
              Login
            </Button>
          </Form>
          <label className='labelGroup'>Non hai un account? <Link to="/register">Registrati qui</Link></label>
          <div>
            {errorLogin ? <span>Utente non trovato</span> : null}
          </div>
        </Card>
      </div>
    </>
  )
}

export default Login;