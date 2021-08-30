import React from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

export default function Join() {
    const [name, setName] = React.useState('')
    const [room, setRoom] = React.useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div><input placeholder="room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)}></input>
                </div>
                <Link to={`/chat?name=${name}&room=${room}`} 
                    onClick={(e) => (!name || !room) ? e.preventDefault() : null} >
                    <button className="button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    )
}
