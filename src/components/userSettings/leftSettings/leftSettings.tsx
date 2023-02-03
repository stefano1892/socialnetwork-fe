import React from 'react'
import { Card } from "@mui/material"
import './style.scss'

const LeftSettings = () => {

  return (
    <>
      <Card className='settingsCard'>
        <div className='container p-5'>
          <div>
            Account
          </div>
          <div className='mt-3'>
            Notifiche
          </div>
          <div className='mt-3'>
            Chiudi account
          </div>
        </div>
      </Card>
    </>
  );
}

export default LeftSettings