import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './style.scss'

const CloseAccountSettings = () => {

  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <>
      <div className='container p-4'>
        <div className='mb-3 title_delete_account_settings' >Cancella account</div>
        <div className='mb-3'>Elimina in modo definitivo il tuo account</div>
        <div className='mb-2'><b>Ma prima di andare...</b></div>
        <Form>
          <Form.Check
            type='checkbox'
            id={`default-checkbox`}
            label='Si, voglio cancellare il mio account'
            onChange={() => setConfirmDelete(!confirmDelete)}
          />
        </Form>
        <Button size='sm' className='btn mt-2' variant='outline-success'>Mantieni account</Button>
        <Button size='sm' className='btn btn-danger ml-2 mt-2' disabled={!confirmDelete}>Elimina account</Button>
      </div>
    </>
  )
}

export default CloseAccountSettings