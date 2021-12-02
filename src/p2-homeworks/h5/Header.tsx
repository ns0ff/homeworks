import React from 'react'
import {NavLink, useMatch} from "react-router-dom"
import s from './Header.module.css'

function Header() {
    let match = useMatch('/PRE_JUNIOR')

    return (
        <div className={s.headerComp}>
            <div className={s.container}>
                <div className={s.navLinks}>
                    <NavLink to={'/'} className={(navLink) => (match ? s.active : s.navLink)}> Main Page </NavLink>
                    <NavLink to={'/hw1'} className={(navLink) => (navLink.isActive ? s.active : s.navLink)}> Homework 1</NavLink>
                    <NavLink to={'/hw2'} className={(navLink) => (navLink.isActive ? s.active : s.navLink)}> Homework 2</NavLink>
                    <NavLink to={'/hw3'} className={(navLink) => (navLink.isActive ? s.active : s.navLink)}> Homework 3</NavLink>
                    <NavLink to={'/hw4'} className={(navLink) => (navLink.isActive ? s.active : s.navLink)}> Homework 4</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
