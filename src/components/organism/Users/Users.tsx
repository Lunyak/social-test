import React, {FC, useEffect, Fragment} from 'react';
import {usersDataSelector} from "../../../selectors/users";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/users";
import { NavLink } from 'react-router-dom';

const url = '/posts?page=5&size=40'

export const Users: FC = () => {
  const dispatch = useDispatch()
  const users = useSelector(usersDataSelector)

  useEffect( ()=> {
    dispatch(getUsers())
  }, [])

  return (
    <>
      <div>
        {users.map((user) =>
        <>
          <NavLink key={user.id} to={`/user/${user.id}`}>
            <div>{user.name}</div>
            <img src={user.photo.big as string}/>

          </NavLink>
        </> )}
     </div>
    </>
  )
};

// <!--// https://github.com/prettier/prettier-->
// <!--// https://github.com/Parker-Ledoux/prettier-airbnb-config#readme-->
//
// <!--// HW-->
// <!--// установить преттиер-->
// <!--// установить преттиер конфиг от airbnb-->
// <!--// сделать так что бы преттиер читал этот конфиг-->
// <!--// сделать так что бы вебштор форматировал файл преттиером по сохранению (file watcher)-->