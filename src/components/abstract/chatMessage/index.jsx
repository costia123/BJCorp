import React from "react";
import styles from 'components/abstract/chatMessage/styles.module.css'
import { useNavigate } from "react-router-dom";
function ChatMessage (props){
    const {username, message, role} = props
    return(
        <>
            <div className={styles.ChatMessage}> 
                <span className={role === "superAdmin" ? styles.red : role === "Admin" ? styles.green : styles.autre} >{username}</span>
                <p>{message}</p>
            </div>
        </>
    )
}
export default ChatMessage;