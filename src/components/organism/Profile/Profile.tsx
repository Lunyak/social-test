import React, {FC, useCallback, useMemo, useState} from 'react';
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {profileDataSelector} from "../../../selectors/profile";
import {statusTextSelector} from "../../../selectors/status";

const Profile: FC = () => {
  const dispatch = useDispatch();

  const profileData = useSelector(profileDataSelector)
  const status = useSelector(statusTextSelector)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const changeIsFetchingStatus = useCallback( () => {
    setIsFetching(true)
  }, [])

  return (
    <div className={ styles.parent }>
      <h2>Profile</h2>
      <div className={ styles.status }>

        {isFetching
          ? <input
             className={ styles.input }
             type="text"
             placeholder={'ваш статус'}
          />
          : <span onDoubleClick={changeIsFetchingStatus}>{ status }</span>
        }
      </div>

      <div>
        <img src={ profileData.photo as string } alt="user"/>
      </div>
    </div>
  )
}

export default Profile;


