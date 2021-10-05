import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChangePasswordForm } from '../../Components/Admin/PersonalPage/ChangePassword';
import { ToastProvider } from "react-toast-notifications";
import { ErrorNotification } from "../../Components/Additional/ToastNotification";
export const MainPage = () => {
    var user = useSelector(state => state.AuthReducer)
    return(
        <div>
            <h1>Main page</h1>
            <h2>{JSON.stringify(user)}</h2>
            <Link to="/login"> Login </Link>
            <br/>
            <Link to="/register"> Register </Link>
            <ToastProvider components={{ Toast: ErrorNotification }}>
            <ChangePasswordForm/>
            </ToastProvider>   
        </div>
    );
}
