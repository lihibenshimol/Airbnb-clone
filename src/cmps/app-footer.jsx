
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { UserMsg } from './user-msg.jsx'

export function AppFooter() {
    const count = useSelector(storeState => storeState.userModule.count)

    async function onCheckout() {
        try {
            
            showSuccessMsg(`Charged, your ne`)
        } catch(err) {
            showErrorMsg('Cannot checkout')
        }
    }

    return (
        <footer className="app-footer">
        <h1>footerr</h1>
            <UserMsg />
        </footer>
    )
}