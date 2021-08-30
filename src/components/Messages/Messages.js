import './Messages.css'
import React from 'react'

import Message from './Message/Message'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function Messages({ messages, name }) {
    return (
        <ScrollToBottom>
            {messages.map((message, index) => 
                <div key={index}>
                    <Message message={message} name={name} />
                </div>
            )}
        </ScrollToBottom>
    )
}
