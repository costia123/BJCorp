import React from "react";
import styles from "components/abstract/CardSmall/styles.module.css";
import Skeleton from '@mui/material/Skeleton';
function CardSmall(props) {
  const { Title, logo, price, noMarge } = props;
    return (
      <>
        <div className={noMarge ? styles.mainBox2 : styles.mainBox}>
          <div className={styles.logoWChart}>
            {logo ? (
              <img src={logo} className={styles.logo} />
            ) : (
              <Skeleton variant="circular" width={40} height={40} />
            )}
          </div>
          <div>
            {Title ? (
              <h4>{Title}</h4>
            ) : (
              <Skeleton variant="rectangular" width={150} height={20} />
            )}
            {price ? (
              <h4>{price}$</h4>
            ) : (
              <Skeleton variant="rectangular" width={100} height={20} />
            )}
          </div>
        </div>
      </>
    );
}
export default CardSmall;
