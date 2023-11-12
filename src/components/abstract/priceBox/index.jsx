import React from "react";
import styles from "components/abstract/priceBox/styles.module.css";
import { useNavigate } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Skeleton from '@mui/material/Skeleton';
function PriceBox(props) {
  const { Title, data, logo, price, pourcent, noMarge } = props;
  const navigate = useNavigate()
    return (
      <>
      {!Title && !data && !logo  && !price && null }
      {Title && data && logo  && price  && (

        <div className={noMarge ? styles.mainBox2 : styles.mainBox} onClick={() => {navigate(`/price/${Title}`)}}>
          <div className={styles.logoWChart}>
            {data ? (
              <img src={logo} className={styles.logo} />
              ) : (
                <Skeleton variant="circular" width={40} height={40} />
            )}
            <div className={styles.smallCharts}>
              {price ? (
                <Sparklines data={data.slice(-7)} margin={5}>
                  <SparklinesLine style={{ fill: "none" }} color={pourcent > 0 ? "green": "red"} />
                </Sparklines>
              ) : (
                <Skeleton variant="rectangular" width={100} height={80} />
              )}
            </div>
          </div>
          <div>
            {price ? (
              <h4>{Title}</h4>
            ) : (
              <Skeleton variant="rectangular" width={150} height={20} />
            )}
          </div>

          <div className={styles.priceWPour}>
            {price ? (
              <h4>{price}$</h4>
              ) : (
                <Skeleton variant="rectangular" width={100} height={20} />
            )}
            {price ? (
              <h4 className={pourcent > 0 ? styles.green : styles.red}>
                {pourcent? pourcent : 0} %
              </h4>
            ) : (
              <Skeleton variant="rectangular" width={100} height={20} />
            )}
          </div>
        </div>
      )}
      </>
    );
}
export default PriceBox;
