import React from 'react'
import "./skills.scss"
import Card from '../skillCard/Card'

const Works = () => {
    return (
        <div className='skills' id='skills'>
            <div className="slider">
                <div className="container">
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default Works
