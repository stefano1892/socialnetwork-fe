import React, { useState } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import { updatePasswordApi } from '../../../api/UpdatePasswordApi'

const ChangePassword = () => {

  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setPasswordError(false)
    if (newPassword === confirmNewPassword) {
      const updatePassword = await updatePasswordApi(confirmNewPassword)
      console.log(updatePassword)
    } else {
      setPasswordError(true)
    }

  }

  return (
    <>
      <div className='container p-4'>
        <div className='mb-3 title_account_settings'>Cambia Password</div>
        {passwordError ? <Alert key={"danger"} variant={"danger"} className="mt-3">
          Le password non coincidono
        </Alert> : null}
        <form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>Nuova password</Form.Label>
              <Form.Control type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="secondName">
              <Form.Label>Conferma nuova password</Form.Label>
              <Form.Control type="password" onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} required />
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