import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../Redux/AuthReducer";


export const RegisterSuccessAction = (payload) => ({type:REGISTER_SUCCESS, payload})
export const RegisterFailAction = () => ({type:REGISTER_FAIL})
export const LoginSuccessAction = (payload) => ({type:LOGIN_SUCCESS, payload})
export const LoginFailAction = (payload) => ({type:LOGIN_FAIL, payload})
export const LogoutAction = (payload) => ({type:LOGOUT, payload})


