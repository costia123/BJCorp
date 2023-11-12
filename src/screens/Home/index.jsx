import PinkDiamant from "components/concrete/PinkD";
import Buy from "components/concrete/buy";
import Contact from "components/concrete/contact";
import Footer from "components/concrete/footer";
import Header from "components/concrete/header";
import Rocks from "components/concrete/rocks";
import Vault from "components/concrete/vault";
import React, { useEffect } from "react";
import FormContact from "components/concrete/formContact"
import styles from "screens/Home/styles.module.css";
import Bg from "static/img/bg try.png";
function Home(props) {
  return (
    <>
      <div className={styles.background}>
        <Header />
        <div className={styles.Core}>
          <Rocks />
          <PinkDiamant />
          <Buy />
          <Vault />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
