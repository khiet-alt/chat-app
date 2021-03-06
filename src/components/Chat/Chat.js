import './Chat.css'
import React, { useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

let socket

export default function Chat({ location }) {
    const ENDPOINT = 'https://chat-app-mapden.herokuapp.com/'
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)   // parse query in URL into object
        socket = io(ENDPOINT)   // connect socket to server

        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, () => {

        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    },[ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault()
        
        if (message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}
