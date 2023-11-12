import React from "react";
import styles from "components/abstract/priceBtn/styles.module.css";
function PriceBtn(props) {
  const { Text } = props;
  return (
    <>
      <button className={styles.button}>{Text}</button>
    </>
  );
}
export default PriceBtn;
