import React from 'react'
import { Card } from "@mui/material"
import './style.scss'
import UserIcon from '../../../img/icons/user_icon.png'
import SettingsIcon from '../../../img/icons/icon_settings.png'
import CloseAccount from '../../../img/icons/close_account.png'

interface LeftSettingsProps {
  setSetting: Function
}

const LeftSettings = (props: LeftSettingsProps) => {

  return (
    <>
      <Card className='settingsCard'>
        <div className='container p-5'>
          <div className='menuVoices' onClick={() => props.setSetting(0)}>
            <img src={UserIcon} alt="user_icon" className='settingsIcon' />
            Account
          </div>
          <div className='mt-3 menuVoices' onClick={() => props.setSetting(1)}>
            <img src={SettingsIcon} alt="settings_icon" className='settingsIcon' />
            Notifiche
          </div>
          <div className='mt-3 menuVoices' onClick={() => props.setSetting(2)}>
            <img src={CloseAccount} alt="close_account_icon" className='settingsIcon' />
            Chiudi account
          </div>
        </div>
      </Card>
    </>
  );
}

export default LeftSettings