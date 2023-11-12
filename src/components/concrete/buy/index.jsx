import React, { useEffect } from "react";
import styles from "components/concrete/buy/style.module.css";
import diamond from "static/img/765093.png";
import emerald from "static/img/Emerald-Stone-PNG-Free-Download.png";
import saphir from "static/img/5bab83a4554c7f08176ec014.png";
import ruby from "static/img/58c582a409e8bc1b42c7794d.png";
import CardSmall from "components/abstract/CardSmall";
import { getRocks } from "redux/strapi/action";
import { useDispatch, useSelector } from "react-redux";
function Buy() {
  const strapi = useSelector((state) => state.strapi);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!strapi.rocks) {
      dispatch(getRocks());
    }
  }, [strapi, dispatch]);
  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.topFlex}>
          <h3>Nous rachetons vos pierres</h3>
          <p>Le prix peut fluctuer et dépend de la qualité de vos pierres</p>
        </div>
        <div className={styles.CardFlex}>
          {strapi.rocks ? (
            <>
              <CardSmall
                Title={strapi.rocks[0].attributes.Nom}
                logo={diamond}
                price={`~${strapi.rocks[0].attributes.price}`}
                noMarge={true}
              />
              <CardSmall
                Title={strapi.rocks[1].attributes.Nom}
                logo={emerald}
                price={`~${strapi.rocks[1].attributes.price}`}
              />
              <CardSmall
                Title={strapi.rocks[2].attributes.Nom}
                logo={saphir}
                price={`~${strapi.rocks[2].attributes.price}`}
              />
              <CardSmall
                Title={strapi.rocks[3].attributes.Nom}
                logo={ruby}
                price={`~${strapi.rocks[3].attributes.price}`}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default Buy;
