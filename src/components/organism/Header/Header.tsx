import React, {FC} from 'react';
import styles from  './Header.module.css'
import Logo from './../../../assets/img/logo.png'
import Lock from './../../../assets/img/lock.svg'
import { Link } from 'react-router-dom';

type HeaderProps = {
  user: string
}

const Header:FC<HeaderProps> = (props) => {
  return (
    <div className={styles.parent}>
      <a className={styles.logo} href={"#"}>
        <img src={Logo} alt="Logo"/>
      </a>
      <div className={styles.loginWrap}>
        <Link to={'/login'} className={styles.singIn}>
          <img className={styles.singInImg} src={Lock} alt="Lock"/>
          Sing In
        </Link>
        {/*<button></button>*/}
      </div>
    </div>
  );
};

export default Header;