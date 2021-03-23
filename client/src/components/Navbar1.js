import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'




export const Navbar1 = () => {

    return (
        <nav>
        <div class="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
          <span class="brand-logo">Сокращение ссылок</span>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to='/auth'>Личный кабинет</NavLink></li>
            <li><NavLink to='/'>назад</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}