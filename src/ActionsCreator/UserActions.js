import {ADMIN, USER} from "../Redux/SwitchViewReducer";

export const SetAdminViewAction = (payload) => ({type:ADMIN, payload})
export const SetUserViewAction = (payload) => ({type:USER, payload})


