import React from 'react';
import styles from './Login.module.css'

const Login = () => {

  return (
    <div className={styles.parent}>
      <h2 className={styles.title}>Login</h2>
      <input className={styles.input} type="text" placeholder={'email'}/>
      <input className={styles.input} type="text" placeholder={'пароль'}/>
    </div>
  )
}

export default Login;


