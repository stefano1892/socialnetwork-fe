import React from 'react'
import { Card } from "@mui/material"
import './style.scss'

const LeftSettings = () => {

  return (
    <>
      <Card className='settingsCard'>
        <div className='container p-5'>
          <div className='menuVoices'>
            Account
          </div>
          <div className='mt-3 menuVoices'>
            Notifiche
          </div>
          <div className='mt-3 menuVoices'>
            Chiudi account
          </div>
        </div>
      </Card>
    </>
  );
}

export default LeftSettings