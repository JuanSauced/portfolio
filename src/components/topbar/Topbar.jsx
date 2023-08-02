import React from 'react'
import "./topbar.scss"
import { Mail, Person } from '@mui/icons-material'

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className="logo">SG.</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+52 311 134 1409</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>juan654saga@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
