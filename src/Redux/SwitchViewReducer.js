
export const ADMIN = "ADMIN";
export const USER = "USER";

var user = JSON.parse(localStorage.getItem("user"));
var hasView = { hasView: null };

if (user && user.isAdmin){
    hasView = { hasView: "Admin" };
} else{
    hasView = { hasView: "User" }
}

export const SwitchViewReducer = (state = hasView, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN:
      return {
        ...state,
        hasView: "Admin"
      };
    case USER:
      return {
        ...state,
        hasView: "User"
      };
    default:
      return state;
  }
};
