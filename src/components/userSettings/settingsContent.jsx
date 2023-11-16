import React from 'react'
import { Card } from "@mui/material"
import NotificationsSettings from './notifications'
import CloseAccountSettings from './closeAccount'
import AccountSettings from './accountSettings'
import ChangePassword from './changePassword'


const RightSettings = (props) => {

  const settingSelected = [
    <AccountSettings />,
    <NotificationsSettings />,
    <CloseAccountSettings />
  ]

  return (
    <>
      <Card className="settingsRightCard">
        {settingSelected[props.setting]}
      </Card>
      {props.setting === 0 ? <>
        <Card className="settingsRightCard mb-3">
          <ChangePassword />
        </Card>
      </> : null}
    </>
  )
}

export default RightSettings