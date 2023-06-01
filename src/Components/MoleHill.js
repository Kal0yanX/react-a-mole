import React from 'react'
import {useEffect} from 'react'
import MoleHillImg from './molehill.jpg'

function MoleHill(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHillImg} />
        </div>
    )
}

export default MoleHill