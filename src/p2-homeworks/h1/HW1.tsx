import React from 'react'
import Message from "./Message";
import style from '../../p1-main/m1-ui/u1-app/homework.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}
// Hardcoded messages
const messageData: Array<MessageType> = [
    {
        avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
        name: 'Artem',
        message: 'npm start нажимал?',
        time: '22:00',
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/31.jpg",
        name: "Artur",
        message: "Сейчас попробую! Спасибо! ",
        time: "22:05",
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        name: "Mr. Lorem Ipsum",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate sapien nec sagittis aliquam. Facilisi morbi tempus iaculis urna id volutpat lacus. Sit amet nisl suscipit adipiscing. Euismod lacinia at quis risus sed vulputate odio. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Id eu nisl nunc mi ipsum. Viverra nibh cras pulvinar mattis nunc. Porta non pulvinar neque laoreet. Enim sed faucibus turpis in eu mi bibendum neque.",
        time: "22:07",
    }
]

function HW1() {
    return (
        <div className={style.homeworkContainer}>
            <span className={style.homeworkTitle}>Homework 1</span>

            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}/>
            <Message
                avatar={messageData[1].avatar}
                name={messageData[1].name}
                message={messageData[1].message}
                time={messageData[1].time}/>
            <Message
                avatar={messageData[2].avatar}
                name={messageData[2].name}
                message={messageData[2].message}
                time={messageData[2].time}/>
        </div>
    )
}

export default HW1
