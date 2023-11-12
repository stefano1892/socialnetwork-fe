import React from 'react'
import { Card } from "@mui/material"
import NotificationsSettings from '../notificationSettings/notifications'
import CloseAccountSettings from '../closeAccount/closeAccount'
import AccountSettings from '../accountSettings/accountSettings'
import ChangePassword from '../changePassword/changePassword'


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