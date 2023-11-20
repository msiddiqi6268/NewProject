import { REGISTER_REQUEST, LOGIN_REQUEST,  } from "./constants";

export const register = (query) => {
  return { type: REGISTER_REQUEST, query };
};

export const login  = (query) =>{
  return {type:LOGIN_REQUEST, query}
}
