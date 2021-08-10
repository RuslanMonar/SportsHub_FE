import jwt_decode from "jwt-decode";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

var user = JSON.parse(localStorage.getItem("user"));
var initialState = { isLoggedIn: false, user: null };

if(user){
  user = jwt_decode(user);
  user = {"name":user.unique_name,"id":user.nameid,"email":user.email}
  initialState = {isLoggedIn: true,user};
}



export const AuthReducer = (state = initialState , action) => {
    const { type, payload } = action;
    
    switch(type){
        case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
        default:
            return state;
    }

}

