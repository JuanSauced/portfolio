import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { KeyboardArrowDown } from '@mui/icons-material'
import { init } from 'ityped'


const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "FrontEnd Lover"]
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="wrapper">
                    <h2>Hi there, Im</h2>
                    <h1>Luis Saucedo</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDown className='icon'></KeyboardArrowDown>
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src='assets/MENoPNG.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Intro
