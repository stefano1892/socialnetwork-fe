import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/LoginApi';
import { IUserLogin } from '../../interfaces/user-interface';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./login.scss"

function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorLogin, setErrorLogin] = useState<boolean>(false)

  let navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const loginParameters: IUserLogin = {
      email: email,
      password: password
    };
    let doLogin = await loginApi(loginParameters);
    if (doLogin) {
      navigate("/profile")
    } else {
      setErrorLogin(true)
    }
  }

  return (
    <>
      <div className="loginBackground">
        <Card className='loginCard'>
          <div className='loginTitle'>
            <span>Accedi alla tua area riservata</span>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
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
            {errorLogin ? <span>Non è stato trovato nessun utente</span> : null}
          </div>
        </Card>
      </div>
    </>
  )
}

export default Login;