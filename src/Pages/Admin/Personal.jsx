import { TopMenu } from "./../../Components/Admin/Menu/TopMenu";
import { LeftMenu } from "../../Components/Admin/Menu/LeftMenu";
import { PersonalPage } from "./../../Components/Admin/PersonalPage/PersonalPage";
import { ToastProvider } from "react-toast-notifications";
import { ErrorNotification } from "../../Components/Additional/ToastNotification";
export default function Personal() {
  return (
    <div>
      <TopMenu />
      <div className="flex central-content">
        <LeftMenu />
        <ToastProvider components={{ Toast: ErrorNotification }}>
          <PersonalPage />
        </ToastProvider>   
      </div>
    </div>
  );
}