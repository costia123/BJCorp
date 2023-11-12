import React from "react";
import styles from "components/concrete/vault/style.module.css";
import Vimg from "static/img/modern-safe-with-code-lock-gray-close-storage-icon-on-transparent-background-3d-rendering-png.png";
import Card from "components/abstract/card";
import security from "static/img/2592258.png";
import expert from 'static/img/3721591.png'
function Vault() {
  return (
    <>
      <div className={styles.mainBox}>
        <h2>Nos services</h2>
        <div className={styles.CardBox}>
          <Card
            Title={"Coffre sécurisé"}
            Text={
              "Nous comprenons à quel point il est important de garder vos biens les plus précieux en sécurité. C'est pourquoi nous sommes fiers de vous proposer notre service de location de coffre sécurisé hautement fiable et professionnel. Avec nous, vous pouvez avoir l'esprit tranquille."
            }
            btnTxt={"500$/semaines"}
            img={Vimg}
          />
            <Card
            Title={"Expertise"}
            Text={
              "L'expertise en pierre précieuse, un art millénaire alliant savoir-faire et passion. Des gemmologues expérimentés scrutent chaque éclat, évaluant couleur, pureté, taille et origine. Leur connaissance pointue guide le choix éclairé des joyaux, assurant éternelle beauté et valeur inestimable"
            }
            btnTxt={"300$/Expertise"}
            img={expert}
          />
          <Card
            Title={"Expert Sécurité"}
            Text={
              " trésors précieux sous haute protection. Surveillance vidéo 24/7, alarmes sophistiquées, accès restreint, et gardes expérimentés assurent la sûreté des joyaux. Tranquillité d'esprit pour les clients et employés. Chaque détail compte pour protéger ces éclats de luxe."
            }
            btnTxt={"Inclut dans nos services"}
            img={security}
          />
        </div>
      </div>
    </>
  );
}
export default Vault;
