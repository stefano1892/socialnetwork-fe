import React, { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateSettings } from '../../../api/UpdatePasswordApi';
import { useAppSelector } from '../../../app/hooks';
import { selectUserValues } from '../../../features/user/userSlice';
import { IBaseSettingsUser } from '../../../interfaces/user-interface';
import "./style.scss";

const AccountSettings = () => {

  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [secondName, setSecondName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [birthDate, setBirthDate] = useState<Date>();

  const user = useAppSelector(selectUserValues);

  useEffect(() => {
    setName(user.name)
    setSurname(user.surname)
    if (user.secondName) {
      setSecondName(user.secondName)
    }
    setEmail(user.email)
    setPhoneNumber(user.phoneNumber)
    setBirthDate(new Date(user.birthDate))
  }, [])

  const handleSubmit = async (e: any) => {
    console.log(e)
    e.preventDefault();

    const dateFormatted = birthDate && birthDate.toLocaleDateString("it-IT")

    const userId = user.id

    const values: IBaseSettingsUser = {
      name: name,
      surname: surname,
      secondName: secondName,
      birthDate: dateFormatted,
      email: email,
      phoneNumber: phoneNumber
    }

    //fare chiamata per mandare a db i risultati
    const settingsUpdated = await updateSettings(userId, values)
    console.log(settingsUpdated)
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
            <Form.Group className="mb-3" controlId="surname">
              <Form.Label className='required'>Cognome</Form.Label>
              <Form.Control type="text" onChange={(e) => setSurname(e.target.value)} value={surname} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="birthDate">
              <Form.Label className='required'>Data di nascita</Form.Label>
              <div>
                <DatePicker
                  selected={birthDate}
                  onChange={(date: any) => setBirthDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className='datepicker'
                  popperPlacement="top-end"
                  popperModifiers={[
                    {
                      name: "offset",
                      options: {
                        offset: [5, 10],
                      },
                    },
                    {
                      name: "preventOverflow",
                      options: {
                        rootBoundary: "viewport",
                        tether: false,
                        altAxis: true,
                      },
                    },
                  ]}
                />
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