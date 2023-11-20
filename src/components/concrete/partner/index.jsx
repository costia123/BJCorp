import React, { useEffect } from "react";
import styles from "components/concrete/vault/style.module.css";
import Vimg from "static/img/modern-safe-with-code-lock-gray-close-storage-icon-on-transparent-background-3d-rendering-png.png";
import Card from "components/abstract/card";
import security from "static/img/2592258.png";
import expert from "static/img/3721591.png";
import { useDispatch, useSelector } from "react-redux";
import { getPartner } from "redux/strapi/action";
import Banner from "components/abstract/jus";
function Partner() {
  const strapi = useSelector((state) => state.strapi);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!strapi.partner) {
      dispatch(getPartner());
    }
  }, [strapi]);

  return (
    <>
      <div className={styles.mainBox}>
        <h2 style={{ color: "white" }}>Nos Partenaires</h2>
        <div className={styles.CardBox}>
          {strapi.partner ? (
            <Banner
              images={strapi.partner}
              speed={30000}
            />
          ) : null}

          {/* {
            strapi.services ? strapi.services.map((itm, idx) => {
              return(
                <Card 
                Title={itm.attributes.Titre}
                Text={itm.attributes.Text}
                btnTxt={itm.attributes.BTN}
                img={itm.attributes.Image.data.attributes.url}
                />
              )
            })
            : null
          } */}
        </div>
      </div>
    </>
  );
}
export default Partner;
