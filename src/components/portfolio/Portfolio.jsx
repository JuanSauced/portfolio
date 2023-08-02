import React from 'react'
import "./portfolio.scss"
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li>Proyects</li>
            </ul>
            <div className='container'>
                <div className='item' >
                    <Image src='/assets/NaayariTours.png' height={500} width={500} alt='Naayari Tours Web'></Image>
                    <h3>NaayariTours</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
