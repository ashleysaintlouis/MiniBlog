import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to="/">
            Mini <span>Blog</span>
        </NavLink >
        <ul className={styles.links_list}>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : "")}  to="/">
                    Inicio
                </NavLink >
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : "")}  to="/login">
                    Entrar
                </NavLink >
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : "")}  to="/register">
                    Cadastrar
                </NavLink >
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : "")} to="/about">
                    Sobre
                </NavLink >
            </li>
        </ul>
    </nav>
  )
}

export default Navbar