import React,{FC, useCallback, useEffect}from 'react';
import styles from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../../../redux/calculator";
import {testSelector, valueSelector} from "../../../selectors/calculator";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Aside from "../Aside/Aside";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import {Users} from "../Users/Users";

export const App: FC = () => {
  const dispatch = useDispatch();

  const value = useSelector(valueSelector)
  const test = useSelector(testSelector);

  const handlePlus = useCallback((num: number) => {
    dispatch(increment(value + test));
  }, [test]);

  useEffect(() => {
    // dispatch(getUserInfo('qweqwe'));
  }, [])

  return (
    <BrowserRouter>
      <div className={styles.parent}>
        <Header user={'123'}/>
        <div className={styles.layout}>
          <Aside />

          <Route path='/profile'><Profile/></Route>
          <Route path='/login'><Login/></Route>
          <Route path='/users'><Users/></Route>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
