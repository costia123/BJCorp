import Contact from "components/concrete/contact";
import Footer from "components/concrete/footer";
import Header from "components/concrete/header";
import Partner from "components/concrete/partner";
import Vault from "components/concrete/vault";
import React, { useEffect } from "react";
import styles from "screens/Home/styles.module.css";
import Bg from "static/img/bg try.png";
function Home(props) {
  return (
    <>
      <div className={styles.background}>
        <Header />
        <div className={styles.Core}>
          <Vault />
          <Partner />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
