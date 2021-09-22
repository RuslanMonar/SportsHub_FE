import { SetAdminViewAction, SetUserViewAction } from '../ActionsCreator/UserActions';
import { LogOutAction } from '../ActionsCreator/AuthActions';
import store from '../Redux/store';

export const LogOut = () => {
  localStorage.clear();
  store.dispatch(LogOutAction());

}

export const SwitchRole = () => {
    if(!localStorage.getItem("hasAdminView")){
      localStorage.setItem("hasAdminView", false);
      store.dispatch(SetUserViewAction());
    }

    else if (localStorage.getItem("hasAdminView") == "true"){
      localStorage.setItem("hasAdminView", false);
      store.dispatch(SetUserViewAction());
    } else{
      localStorage.setItem("hasAdminView", true);
      store.dispatch(SetAdminViewAction());
    }
  }

export const SetRole = () => {
  if (localStorage.getItem("hasAdminView") == "true"){
    localStorage.setItem("hasAdminView", true);
    store.dispatch(SetAdminViewAction());
  } else{
    localStorage.setItem("hasAdminView", false);
    store.dispatch(SetUserViewAction());
  }
}