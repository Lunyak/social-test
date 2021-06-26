import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.css'

const Aside = () => {
  return (
    <div className={styles.parent}>
      <Link to={'Profile'}>Profile</Link>
      <Link to={'Users'}>Users</Link>
      <Link to={'Massage'}>Massage</Link>
      <Link to={'Setting'}>Setting</Link>
    </div>
  );
};

export default Aside;