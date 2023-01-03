import React from 'react';
import { useAppSelector } from "../../app/hooks";
import { selectUserValues } from "../../features/user/userSlice";

function UserProfile() {

  const user = useAppSelector(selectUserValues);

  return (
    <>
      <div>
        <label>
          Questo è il tuo profilo!
          {user.name}
        </label>
      </div>
    </>
  )
}

export default UserProfile;