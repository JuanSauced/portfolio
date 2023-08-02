import React, { useState } from 'react'
import "./contact.scss"
import { Facebook, LinkedIn, Instagram, WhatsApp } from '@mui/icons-material'

const Contact = () => {
    const [message, setMessage] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className='contact' id='contact'>

            <div className="left">
                <a className="socialF" href='https://www.facebook.com/juanluis.saucedogarcia'>
                    <Facebook className='iconF'></Facebook>
                </a>
                <a className="socialL" href='https://www.linkedin.com/in/juan-luis-saucedo-garc%C3%ADa-4aab37258/'>
                    <LinkedIn className='iconL'></LinkedIn>
                </a>
                <a className="socialI" href='https://www.instagram.com/saucedo_luis99/'>
                    <Instagram className='iconI' ></Instagram>
                </a>
                <a className="socialW" href='https://api.whatsapp.com/send?phone=3111341409&text=Hola, Nececito mas informacion!'>
                    <WhatsApp className='iconW'></WhatsApp>
                </a>

            </div>
            <div className='right'>
                <h2>I am currently doing the following courses</h2>
                <div className="course">
                    <img src='/assets/Course.jpg' />
                    <h3>UI Design</h3>
                </div>
                <div className="course">
                    <img src='/assets/JSCourse.jpg' />
                    <h3>Modern JavaScript</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact
