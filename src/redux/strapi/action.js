//r

import axios from 'axios'
import { api_link, api_link2, discordWebHook } from 'configlink'
import moment from 'moment'
import { strapi } from "redux/types"

export const setloading = (value) => dispatch => {
  dispatch({
      type : strapi.LOAD,
      payload: value
  })
}
export const getServices = () => dispatch => {
  dispatch(setloading(true))
  axios.get(`${api_link2}services?populate=*`).then((res) => {
      console.log(res)
      
      dispatch({
        type: strapi.GET_SERVICES,
        payload: res.data.data
      })
    })
    dispatch(setloading(false))
}
export const getPartner = () => dispatch => {
  dispatch(setloading(true))
  axios.get(`${api_link2}partenaires?populate=*`).then((res) => {
      console.log(res)
      
      dispatch({
        type: strapi.GET_PARTNER,
        payload: res.data.data
      })
    })
    dispatch(setloading(false))
}

export const getContact = () => dispatch => {
  dispatch(setloading(true))
  axios.get(`${api_link2}contacts?populate=*`).then((res) => {
      console.log(res)
      
      dispatch({
        type: strapi.GET_CONTACT,
        payload: res.data.data
      })
    })
    dispatch(setloading(false))
}

export const sendContact = (name, number, reason, message) => dispatch => {
  console.log(reason)
  dispatch(setloading(true))
  let embeds = [
    {

      title: `${reason}`,
      description: `${message}`,
      color: 2326507,
      fields: [
        {

          name: "Numéro de téléphone",
          value: `${number}`,
        }
      ],
      author: {
        name: `Prise de contact de ${name}`
      },
      footer: {
        text: "Formulaire de contact ",
        icon_url: "https://cdn.discordapp.com/attachments/1136656597066723379/1137854407845888111/risbg.png"
      },
      timestamp: moment().toISOString()
    }
  ];
  let data = JSON.stringify({ embeds })
  axios.post(`${discordWebHook}`,  {
    "content": "",
    "embeds": embeds
})
  dispatch(setloading(false))
}

export const login = (username, password) => dispatch => {
  axios.post(`${api_link}auth/local`, {
    identifier: username,
    password: password
  }).then((res) => {
    console.log(res)
    dispatch({
      type: strapi.LOGIN,
      payload: res.data
    })
    localStorage.setItem("token", res.data.jwt)
    localStorage.setItem("username", res.data.user.username)
    localStorage.setItem("role", res.data.user.eprole)
  }).catch((err) => {
    console.log(err)
    if (err.response.status === 400){
      dispatch({
        type: strapi.SET_NO_LOG_REASON,
        payload: "Identifiant ou mot de passe invalide"
      })
    }else{
      dispatch({
        type: strapi.SET_NO_LOG_REASON,
        payload: "Une erreur est survenue"
      })
    }
  })
}

export const localStorageLog = (data) => dispatch => {
    if(data){
      dispatch({
        type: strapi.LOCAL_STORAGE_LOG,
        payload: data
      })
    }
}