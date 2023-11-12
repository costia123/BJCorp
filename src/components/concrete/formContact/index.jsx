import React, { useState } from "react";
import styles from "components/concrete/formContact/style.module.css";
import Hbutton from "components/abstract/HButton";
import logoP from "static/img/risnobg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendContact } from "redux/strapi/action";
import { Alert } from "@mui/material";
function FormContact() {
  const dispatch = useDispatch();
  const strapi = useSelector((state) => state.strapi);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [reason, setReason] = useState();
  const [alert, setAlert] = useState();
  const [sended, setSended] = useState(false);
  function send() {
    if (name && phone && reason && message) {
      dispatch(sendContact(name, phone, reason, message));
      setAlert(false);
      setSended(true);
    } else {
      setAlert(true);
    }
  }
  return (
    <>
      <div className={styles.MainBox}>
        <h3>Contactez-nous</h3>
        {alert ? (
          <Alert style={{ marginTop: 15 }} variant="outlined" severity="error">
            Veuillez remplir tous les champs
          </Alert>
        ) : null}
        {sended ? (
          <Alert
            style={{ marginTop: 15 }}
            variant="outlined"
            severity="success"
          >
            Votre demande a bien été transmise
          </Alert>
        ) : (
          <>
            <div className={styles.Form}>
              <select
                className={styles.Input2}
                name="Choissez une raison"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                value={reason}
              >
                <option value="">Choissez une raison</option>
                <option value="Ventes de pierres brut">
                  Ventes de pierres brutes
                </option>
                <option value="Ventes de pierres précieuses">
                  Ventes de pierres précieuses
                </option>
                <option value="Acceder ou loué un coffre">
                  Acceder ou loué un coffre
                </option>
                <option value="Acheter des pierres précieuses">
                  Acheter des pierres précieuses
                </option>
              </select>

              <input
                className={styles.Input}
                placeholder="Prénom et nom"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="name"
                autoComplete={false}
              />

              <input
                className={styles.Input}
                placeholder="Numéro de téléphone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <input
                className={styles.Input}
                placeholder="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button className={styles.Btn} onClick={send}>
                Envoyez la demande
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default FormContact;
