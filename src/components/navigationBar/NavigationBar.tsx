import * as React from 'react';
import "./style.scss"
import { useAppSelector } from "../../app/hooks";
import { selectUserValues } from "../../features/user/userSlice";

export default function NavigationBarComponent() {

  const user = useAppSelector(selectUserValues);

  return (
    <>
      <div className='nav'>
        ciao sono la barra
        <div className='nameAndPhoto'>
          {user.name}
          <span>qua ci va la foto</span>
        </div>
      </div>
    </>
  );
}