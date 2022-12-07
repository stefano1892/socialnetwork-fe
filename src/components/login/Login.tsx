import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/LoginApi';
import { IUserLogin } from '../../interfaces/user-interface';

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
      <Card>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='text' onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <label>Non hai un account? <Link to="/register">Registrati qui</Link></label>
        <br />
        {errorLogin ? <span>Non è stato trovato nessun utente</span> : null}
      </Card>
    </>
  )
}

export default Login;