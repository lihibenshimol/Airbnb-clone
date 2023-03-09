import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { VscGlobe } from 'react-icons/vsc'
import { RxHamburgerMenu } from 'react-icons/rx'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { StayIconFilter } from './stay-icon-filter'

import logo from '../assets/img/img/logo.png'
import search from '../assets/img/img/icons/search.svg'
import { StayFilter } from './stay-filter'
import IconBxsUserCircle from '../assets/img/img/icons/avatar'
import { useState } from 'react'
import { LoginMenu } from './login-menu'
// import {Avater } from

export function AppHeader() {
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.user)
    const [loginMenu, toggleLoginMenu] = useState(false)

    async function onLogin(credentials) {
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }
    async function onSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }
    async function onLogout() {
        try {
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    return (
        <header className="full">

            <section id='header' className='app-header main-container'>
                <div className='top-row'>
                    <section onClick={() => navigate('/')} className='logo-container'>
                        <img src={logo} alt="logo" className='logo' />
                        <p className='logo-name'>staybnb</p>
                    </section>


                    <StayFilter />

                    <section className='user-info'>
                        <p>Become a host!</p>
                        <p className='lang-container'> <VscGlobe className='lang' /></p>
                        <p onClick={() => toggleLoginMenu(!loginMenu)} className='avatar-container'>
                            <RxHamburgerMenu className='menu' />
                            <IconBxsUserCircle className='avatar' />

                        </p>

                    </section>

                </div>

            </section>
                    

        {loginMenu && <LoginMenu />}
        </header>
    )
}