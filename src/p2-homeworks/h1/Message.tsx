import React from 'react'
import mesStyle from './Message.module.css'

export type MessageProsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProsType) {
    return (
        <div className={mesStyle.message}>
            <div className={mesStyle.avatar}><img className={mesStyle.img} src={props.avatar} alt="avatar"/></div>
            <div className={mesStyle.message_content}>
                <div className={mesStyle.message_body}>
                    <div className={mesStyle.user_name}>{props.name}</div>
                    <div className={mesStyle.user_message}>{props.message}</div>
                </div>
                <div className={mesStyle.time_container}>
                    <div className={mesStyle.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
