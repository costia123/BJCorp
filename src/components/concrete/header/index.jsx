import React from "react";
import styles from "components/concrete/header/style.module.css";
import Hbutton from "components/abstract/HButton";
import logoP from "static/img/E_1-PhotoRoom.png-PhotoRoom.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function nav() {}
  return (
    <>
      <div className={styles.mainBox}>
        <a href="/" className={styles.href}>
          <div className={styles.logoDiv}>
            <img src={logoP} className={styles.logo} />
           {/*  <h3>Rocks in Socks</h3> */}
          </div>
        </a>
        <div className={styles.link}>
          <Hbutton Text={"Home"} link={"/"} />
        </div>
      </div>
    </>
  );
}
export default Header;
