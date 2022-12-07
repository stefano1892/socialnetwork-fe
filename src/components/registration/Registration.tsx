import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUserRegister } from '../../interfaces/user-interface';
import { registerApi } from "../../api/RegisterApi"

function Register() {
  const [name, setUserName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const registerParameters: IUserRegister = {
      name: name,
      surname: surname,
      email: email,
      password: password
    };
    registerApi(registerParameters);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Nome:
            <input type="text" name="name" onChange={(e) => setUserName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Cognome:
            <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <label>Torna alla <Link to="/">Login</Link></label>
    </>
  );
}

export default Register;