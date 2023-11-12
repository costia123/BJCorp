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
export const getDiamond = () => dispatch => {
  dispatch(setloading(true))
    axios.get(`${api_link}diamants?_sort=date:DESC`).then((res) => {
        console.log(res)
        
        dispatch(setDiamond(res.data.data))
    })
}

export const setDiamond = (res) => dispatch => {
    console.log('first', res)
    const priceTable = [];
    const date = []
    res.map((itm, index) => {
        priceTable.push(parseInt(itm.attributes.price))
       date.push(new Date (itm.attributes.date))
      })
      if(priceTable.length === res.length ){
        console.log(priceTable)
        const LastPrice =  priceTable[priceTable.length -1]
        const sliced = priceTable.slice(-7)
        console.log("eee", sliced)
        const pourcent = Math.round((LastPrice - sliced[0]) / priceTable[0] * 100 * 100) / 100;
        const data = {table : priceTable, LastPrice: LastPrice, pourcent: pourcent, date: date }
        dispatch({
          type: strapi.GET_DIAMOND,
          payload: data
        })
        dispatch(setloading(false))
      }else{
        console.log("bug")
      }
}
export const getEmerald = () => dispatch => {
  axios.get(`${api_link}emeraudes`).then((res) => {
      console.log(res)
      dispatch(setEmerald(res.data.data))
  })
}

export const setEmerald = (res) => dispatch => {
  console.log('first', res)
  const priceTable = [];
  const date = []
  res.map((itm, index) => {
      priceTable.push(parseInt(itm.attributes.price))
     date.push(new Date (itm.attributes.date))
    })
    if(priceTable.length === res.length ){
      console.log(priceTable)
      const LastPrice =  priceTable[priceTable.length -1]
      const sliced = priceTable.slice(-7)
      const pourcent = Math.round((LastPrice - sliced[0]) / priceTable[0] * 100 * 100) / 100;
      const data = {table : priceTable, LastPrice: LastPrice, pourcent: pourcent, date: date }
      dispatch({
        type: strapi.GET_EMERALD,
        payload: data
      })
    }else{
      console.log("bug")
    }
}
export const getSaphir = () => dispatch => {
  axios.get(`${api_link}saphirs`).then((res) => {
      console.log(res)
      dispatch(setSaphir(res.data.data))
  })
}

export const setSaphir = (res) => dispatch => {
  console.log('first', res)
  const priceTable = [];
  const date = []
  res.map((itm, index) => {
      priceTable.push(parseInt(itm.attributes.price))
     date.push(new Date (itm.attributes.date))
    })
    if(priceTable.length === res.length ){
      console.log(priceTable)
      const LastPrice =  priceTable[priceTable.length -1]
      const sliced = priceTable.slice(-7)
      const pourcent = Math.round((LastPrice - sliced[0]) / priceTable[0] * 100 * 100) / 100;
      const data = {table : priceTable, LastPrice: LastPrice, pourcent: pourcent, date: date }
      dispatch({
        type: strapi.GET_SAPHIR,
        payload: data
      })
    }else{
      console.log("bug")
    }
}
export const getRuby = () => dispatch => {
  axios.get(`${api_link}rubies`).then((res) => {
      console.log(res)
      dispatch(setRuby(res.data.data))
  })
}

export const setRuby = (res) => dispatch => {
  console.log('first', res)
  const priceTable = [];
  const date = []
  res.map((itm, index) => {
      priceTable.push(parseInt(itm.attributes.price))
      date.push(new Date (itm.attributes.date))
    })
    if(priceTable.length === res.length ){
      console.log(priceTable)
      const LastPrice =  priceTable[priceTable.length -1]
      const sliced = priceTable.slice(-7)
      const pourcent = Math.round((LastPrice - sliced[0]) / priceTable[0] * 100 * 100) / 100;
      const data = {table : priceTable, LastPrice: LastPrice, pourcent: pourcent, date: date }
      dispatch({
        type: strapi.GET_RUBY,
        payload: data
      })
    }else{
      console.log("bug")
    }
}

export const getRocks = () => dispatch => {
  dispatch(setloading(true))
  axios.get(`${api_link}rocks`).then((res) => {
      console.log(res)
      
      dispatch({
        type: strapi.GET_ROCKS,
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