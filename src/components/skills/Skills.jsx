import React from 'react'
import "./skills.scss"
import Card from '../skillCard/Card'

const Works = () => {
    return (
        <div className='skills' id='skills'>
            <div className="container">
                <div className="containerFront">
                    <h1>FrontEnd Skills</h1>
                    <div className="cardsF">
                        <Card name={"JS"}></Card>
                        <Card name={"React"} ></Card>
                        <Card name={"Figma"}></Card>
                        <Card name={"HTML"}></Card>
                        <Card name={"CSS"}></Card>
                    </div>
                </div>
                <div className="containerBack">
                    <h1>BackEnd Skills</h1>
                    <div className="cardsB">
                        <Card name={"Node.js"}></Card>
                        <Card name={"Mongo DB"}></Card>
                        <Card name={"Java"}></Card>
                        <Card name={"MySQL"}></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
