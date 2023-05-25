import React, { useState, useEffect } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import { updatePasswordApi } from '../../../api/UpdatePasswordApi'
import { useAppSelector } from '../../../app/hooks'
import { UserState, selectUserValues } from '../../../features/user/userSlice'
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {

  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [passwordStatus, setPasswordStatus] = useState<any>()

  const user: UserState = useAppSelector(selectUserValues);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setPasswordError(false)
    if (newPassword === confirmNewPassword) {
      let statusPass = await updatePasswordApi(confirmNewPassword, user.id)
      if (statusPass === 200) {
        setPasswordStatus(statusPass)
      }
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