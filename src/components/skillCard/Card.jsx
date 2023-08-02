import React from 'react'
import "./card.scss"
import { Javascript, Css, Html, EnergySavingsLeaf, Code, Storage, Hexagon, Architecture, SettingsInputComponent } from '@mui/icons-material'


const card = ({ name }) => {
    return (
        <div className='cardContainer'>
            <div className="item">
                <div className="left">
                    <div className="leftContainer">
                        <div className='imgContainer'>
                            {name == "JS" ? <Javascript className="ic" /> :
                                name == "CSS" ? <Css className="ic" /> :
                                    name == "HTML" ? <Html className="ic" /> :
                                        name == "Mongo DB" ? <EnergySavingsLeaf className="ic" /> :
                                            name == "Java" ? <Code className="ic" /> :
                                                name == "MySQL" ? <Storage className="ic" /> :
                                                    name == "Node.js" ? <Hexagon className="ic" /> :
                                                        name == "Figma" ? <Architecture className="ic" /> :
                                                            name == "React" ? <SettingsInputComponent className="ic" /> : ""}
                        </div>
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card
