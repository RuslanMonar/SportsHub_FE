import React from 'react';
import { ContactUsForm } from '../../Components/Navigation/Contactus';

import { ToastProvider } from "react-toast-notifications";
import { ErrorNotification } from "../../Components/Additional/ToastNotification";

export const Contact = () => {
    return(
      <div>
      
      <ToastProvider components={{ Toast: ErrorNotification }}>
       <ContactUsForm/>
      </ToastProvider>   
    </div>
    
    );
}