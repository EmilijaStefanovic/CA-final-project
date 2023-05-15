import React from 'react';
import Logo from '../../../assets/logo.png';
import style from './Navigation.module.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className={style.header}>
      <img src={Logo} alt='logo' className={style.img} />
      <nav className={style.navbar}>
        <Link to='/newclient'>New Client</Link>
        <Link to='/clients'>Clients</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
    </header>
  );
}
