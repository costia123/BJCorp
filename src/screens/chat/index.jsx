import React, { useEffect, useState } from "react";
import Footer from "components/concrete/footer";
import Header from "components/concrete/header";
import styles from "screens/chat/styles.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import ChatMessage from "components/abstract/chatMessage";

function Chat(props) {
  const strapi = useSelector((state) => state.strapi);
  const navigate = useNavigate();
  useEffect(() => {
    if (!strapi.token) {
      navigate("/login");
    }
  }, [strapi]);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const socket = io(`https://exp.costiadevelopmentagency.fr/`);
  /* socket.emit("chat message", "strapi.username", "Hello, world!"); */
  const handleNewMessage = (username, message, role) => {
    setMessages((prevMessages) => [...prevMessages, { username, message, role }]);
  };

  useEffect(() => {
    // Écoutez les événements de chat lorsque le composant est monté
    socket.on("chat message", handleNewMessage);

    // N'oubliez pas de nettoyer les écouteurs lorsque le composant est démonté
    return () => {
      socket.off("chat message", handleNewMessage);
    };
  }, []);

  function sendMessage() {
    socket.emit("chat message", strapi.username, newMessage, strapi.token, strapi.role);
    setNewMessage("");
  }

  function logout(){
    localStorage.clear()
  }
  return (
    <>
      <div className={styles.background}>
        <Header />
        <div className={styles.Core}>
          <div className={styles.Chat}>
            <div className={styles.messageBox}>
              {messages.map((itm) => {
                return (
                  <ChatMessage username={itm.username} message={itm.message} role={itm.role} />
                );
              })}
            </div>
            <div className={styles.sendFrom}>
              <input className={styles.input}
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
              />
              <button  className={styles.btn} onClick={sendMessage}><img className={styles.logoSend} src="https://ris.costiadevelopmentagency.fr/uploads/send_message_c18d0d2ebe.png"/> </button>
            </div>
          </div>
          <span onClick={logout}>Logout</span>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Chat;
