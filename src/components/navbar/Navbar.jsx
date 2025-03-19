import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <Navbar>
        <NavLink to="/">
            Mini <span>Blog</span>
        </NavLink>
        <ul>
            <li>
                <NavLink to="/">
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    Sobre
                </NavLink>
            </li>
        </ul>
    </Navbar>
  )
}

export default Navbar