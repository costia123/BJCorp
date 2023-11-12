import React from "react";
import styles from "components/concrete/PinkD/style.module.css";
import Pink from "static/img/705859.png"
function PinkDiamant(props) {
  const { Text, Title, img, btnTxt } = props;
  return (
    <>
      <div className={styles.mainbox}>
        <img src={Pink} className={styles.img} />
        <div className={styles.TextBox}>
        <h4>Diamant rose</h4>
        <p className={styles.Text2}>Les diamants roses sont des produits créés en laboratoire alliant luxe et technologie. Ils ne sont liés à aucun cours, étant vendus et achetés à un prix fixe de 16 000 $.</p>
        </div>
      </div>
    </>
  );
}
export default PinkDiamant;
