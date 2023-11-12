import React, { useEffect, useState } from "react";
import Footer from "components/concrete/footer";
import Header from "components/concrete/header";
import styles from "screens/Login/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { localStorageLog, login } from "redux/strapi/action";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkLocalStorage, setCheckLocalStorage] = useState(false);
  const [localStorageData, setLocalStorageData] = useState(null);
  const strapi = useSelector((state) => state.strapi);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logUser() {
    if (username && password) {
      dispatch(login(username, password));
    }
  }
  useEffect(() => {
    if (!checkLocalStorage) {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      setLocalStorageData({ username, token, role });
      setCheckLocalStorage(true);
    }
    if (localStorageData) {
      dispatch(localStorageLog(localStorageData));
     
    }
    if(strapi.token){
      console.log('first')
      navigate("/logged")
    }
  }, [checkLocalStorage, strapi]);
  return (
    <>
      <div className={styles.background}>
        <Header />
        <div className={styles.Core}>
          {strapi.logMessage ? (
            <Alert severity="error">{strapi.logMessage}</Alert>
          ) : null}
          <div className={styles.Form}>
            <h3>EP Login</h3>
            <input
              className={styles.Input}
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              autoComplete={false}
            />
            <input
              className={styles.Input}
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button onClick={logUser} className={styles.Btn}> Login </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
