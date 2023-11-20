import React, { useEffect } from "react";
import styles from "components/concrete/contact/style.module.css";
import { getContact } from "redux/strapi/action";
import { useDispatch, useSelector } from "react-redux";
import CardContact from "components/abstract/CardContact";

function Contact() {
  const strapi = useSelector((state) => state.strapi);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!strapi.contact) {
      dispatch(getContact());
    }
  }, [strapi, dispatch]);
  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.topFlex}>
          <h3 style={{color: "white"}}>Nos employées</h3>
        </div>
        <div className={styles.CardFlex}>
          {strapi.contact
            ? strapi.contact.map((itm, index) => {
                return (
                  <>
                    <CardContact
                      index={index}
                      Name={itm.attributes.Nom}
                      Title={itm.attributes.role}
                      logo={itm.attributes.head.data ? itm.attributes.head.data.attributes.url : "https://admincar.costiadevelopmentagency.fr/uploads/utilisateur_be33bc3d9c.png"}
                      Number={itm.attributes.number}
                    />
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
export default Contact;
