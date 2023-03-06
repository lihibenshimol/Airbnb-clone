import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { VscGlobe } from 'react-icons/vsc'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { StayIconFilter } from './stay-icon-filter'

import logo from '../assets/img/img/logo.png'
import search from '../assets/img/img/icons/search.svg'
import { StayFilter } from './stay-filter'
import IconBxsUserCircle from '../assets/img/img/icons/avatar'
// import {Avater } from

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

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
        <header className="app-header full">

            <div className='top-row'>
                <section className='logo-container'>
                    <img src={logo} alt="logo" className='logo' />
                    <p className='logo-name'>staybnb</p>
                </section>

               <StayFilter />

                <section className='user-info'>
                    <p>Become a host!</p>
                    <p className='lang-container'> <VscGlobe className='lang'/></p>
                   <p className='avatar-container'> <IconBxsUserCircle className='avatar' /> </p>

                </section>

                


            </div>


            <div className='bottom-row'>

                <StayIconFilter />

            </div>
        </header>
    )
}