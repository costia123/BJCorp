import React from "react";
import styles from 'components/abstract/HButton/styles.module.css'
import { useNavigate } from "react-router-dom";
function Hbutton (props){
    const navigate = useNavigate();
    const {Text, link} = props
    return(
        <>
        <a href={`${link}`}>
        <button className={styles.button} onClick={() => {navigate(link)}}>
            {Text}
        </button>
        </a>
        </>
    )
}
export default Hbutton;