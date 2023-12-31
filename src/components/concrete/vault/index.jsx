import React, { useEffect } from "react";
import styles from "components/concrete/vault/style.module.css";
import Vimg from "static/img/modern-safe-with-code-lock-gray-close-storage-icon-on-transparent-background-3d-rendering-png.png";
import Card from "components/abstract/card";
import security from "static/img/2592258.png";
import expert from 'static/img/3721591.png'
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "redux/strapi/action";
function Vault() {
  const strapi = useSelector((state) => state.strapi);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!strapi.services) {
      dispatch(getServices());
    }
  }, [strapi, dispatch]);
  return (
    <>
      <div className={styles.mainBox}>
        <h2 style={{color: "white"}}>Nos services</h2>
        <div className={styles.CardBox}>
          {
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
          }
        </div>
      </div>
    </>
  );
}
export default Vault;
