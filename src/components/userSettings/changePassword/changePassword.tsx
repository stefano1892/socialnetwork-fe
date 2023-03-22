import React, { useState, useEffect } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { updatePasswordApi } from '../../../api/UpdatePasswordApi'
import { useAppSelector } from '../../../app/hooks'
import { selectUserValues } from '../../../features/user/userSlice'
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {

  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [passwordStatus, setPasswordStatus] = useState<any>()

  const user = useAppSelector(selectUserValues);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setPasswordError(false)
    if (newPassword == confirmNewPassword) {
      let statusPass = await updatePasswordApi(confirmNewPassword, user.id)
      if (statusPass == 200) {
        setPasswordStatus(statusPass)
        toast('Password cambiata con successo');
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
        {passwordStatus == 200 ? <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        /> : null}
      </div>
    </>
  )
}

export default ChangePassword