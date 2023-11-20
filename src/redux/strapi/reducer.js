import { strapi } from "redux/types";

const initialState = {
  services: null,
  diamondLastPrice: null,
  diamondPourcent: null,
  emeraldTable: null,
  emeraldLastPrice: null,
  emeraldPourcent: null,
  saphirTable: null,
  saphirLastPrice: null,
  saphirPourcent: null,
  rubyTable: null,
  rubyLastPrice: null,
  rubyPourcent: null,
  diamondDate: null,
  emeraldDate: null,
  saphirDate: null,
  rubyDate: null,
  loading: false,
  rocks: null,
  contact: null,
  logMessage: null,
  username: null,
  role: null,
  token: null,
  partner: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case strapi.GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case strapi.GET_PARTNER:
      return {
        ...state,
        partner: action.payload
      };
    case strapi.GET_SAPHIR:
      return {
        ...state,
        saphirTable: action.payload.table,
        saphirLastPrice: action.payload.LastPrice,
        saphirPourcent: action.payload.pourcent,
        saphirDate: action.payload.date,
      };
      case strapi.GET_RUBY:
      return {
        ...state,
        rubyTable: action.payload.table,
        rubyLastPrice: action.payload.LastPrice,
        rubyPourcent: action.payload.pourcent,
        rubyDate: action.payload.date,
      };
      case strapi.LOAD:
      return {
        ...state,
        loading: action.payload,   
      }; 
      case strapi.GET_ROCKS:
      return {
        ...state,
        rocks: action.payload,   
      }; 
      case strapi.GET_CONTACT:
      return {
        ...state,
        contact: action.payload,   
      }; 
      case strapi.SET_NO_LOG_REASON:
      return {
        ...state,
        logMessage: action.payload,   
      }; 
      case strapi.LOGIN:
        
      return {
        ...state,
        username: action.payload.user.username,
        role: action.payload.user.eprole,
        token: action.payload.jwt,
        
      };
      case strapi.LOCAL_STORAGE_LOG:
      return {
        ...state,
        username: action.payload.username,
        role: action.payload.role,
        token: action.payload.token,
        
      };
    default:
      return state;
  }
};
export default reducer;
