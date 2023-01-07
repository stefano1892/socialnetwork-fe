import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/LoginApi';
import { IUserLogin } from '../../interfaces/user-interface';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./login.scss"
import { useAppDispatch } from '../../app/hooks';
import { setFullUser } from '../../features/user/userSlice';

function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorLogin, setErrorLogin] = useState<boolean>(false)

  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const agencyLogo = require('../../img/f1Logo.png')

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const loginParameters: IUserLogin = {
      email: email,
      password: password
    };
    const doLogin = await loginApi(loginParameters);
    console.log(doLogin)
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
        <img src={agencyLogo} />
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