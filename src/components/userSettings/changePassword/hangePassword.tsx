import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const ChangePassword = () => {

  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const values = {
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword
    }
    console.log(values)
  }

  return (
    <>
      <div className='container p-4'>
        <div className='mb-5 title_account_settings'>Cambia Password</div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>Nuova password</Form.Label>
              <Form.Control type="text" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="secondName">
              <Form.Label>Conferma nuova password</Form.Label>
              <Form.Control type="text" onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} required />
            </Form.Group>
          </Row>
          <div className='w-100'>
            <button className='btn btn-primary m-auto' type="submit">Cambia password</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ChangePassword