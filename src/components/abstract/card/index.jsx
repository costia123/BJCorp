import React from "react";
import styles from "components/abstract/card/styles.module.css";
import PriceBtn from "../priceBtn";
function Card(props) {
  const { Text, Title, img, btnTxt } = props;
  return (
    <>
      <div className={styles.mainbox}>
        <img src={img} className={styles.img} />
        <h4>{Title}</h4>
        <p className={styles.Text}>{Text}</p>
        {btnTxt ? <PriceBtn Text={btnTxt} /> : null}
      </div>
    </>
  );
}
export default Card;
