import "../../../css/Admin/Users.css";
import { useState, useEffect } from "react";
import UsersService from "../../../Services/UsersService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';


export const Delete = (id) => {
    const submit = () => {
      confirmAlert({
        customUI: ({ onClose }) => {
            return (
              <div className='alert' >
                <b>You are about to delete this user!</b>
                <div>This user will be deleted from Sports Hub</div>
                <div>Are you sure? </div>
                <div className='alert-btnblock'>
                    <button className='alert-cancelbtn' onClick={onClose}>Cancel</button>
                    <button className='alert-deletebtn'
                    onClick={() => {
                        UsersService.DeleteUser(id).then(() => {onClose();});
                    }}
                        >
                        Delete
                    </button>
                </div>            
              </div>
            );
          }
      });
    };

    return (
        <div className='container'>
          <button onClick={submit}>Delete</button>
        </div>
      );
  }

  