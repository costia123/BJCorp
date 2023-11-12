import React, { useState } from "react";
import styles from "components/concrete/footer/style.module.css";
import logoP from "static/img/E_1-PhotoRoom.png-PhotoRoom.png";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate()
  const [verify, setVerify]= useState(0)
  function beSure (){
    console.log('inside', verify)
    if(verify >= 3){
      navigate(`/login`)
    }else{
      setVerify(verify + 1)
    }
  }
  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.logobox}>
            <img src={logoP} className={styles.logo} />
          <h3>Cor<span onClick={() => {beSure()}} className={styles.aSecret}>p</span></h3>
        </div>
        <div>
          <a href="https://github.com/costia123" className={styles.Href}>
          <p>{`Developed by BJ Corp © 2023 - ${new Date().getFullYear()}`} </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
