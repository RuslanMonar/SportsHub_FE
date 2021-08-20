import "../../css/ToastNotification.css";
import { DefaultToast } from "react-toast-notifications";

export const ErrorNotification = ({ children, ...props }) => (
  <DefaultToast className={"toast-container"} {...props}>
    <span style = {{fontWeight:'bold',fontFamily:"16px"}}>{children.error}</span>
    <span>{children.message}</span>
  </DefaultToast>
);
