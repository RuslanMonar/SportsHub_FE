import { React, useState, useEffect } from "react";
import Dropdown, {DropdownContent, DropdownTrigger} from 'react-simple-dropdown';
import "../../../css/Admin/Users.css";
import UsersService from "../../../Services/UsersService";


export const  SortUsers = ({setUsers}) => {
    function myFunction1() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    function myFunction2(data) {
        if (data) {
            UsersService.GetSortedUsers(data).then((response) => {
                setUsers(response.data.users);

            });
        }
        return;
    }
    
    return(
        <div class="sort-box" >
            <button class="filter-btn" onClick={myFunction1}>
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                    </svg>
            </button>
            <div id="myDIV" style={{"display": "none"}}>
                <Dropdown className="dropdown" >
                
                    <DropdownContent>
                        <div className="dropdown__identity dropdown__segment" >
                            <b> Sort by </b>
                        </div>
                            <ul className="dropdown__quick-links dropdown__segment">
                                    <li className="dropdown__link">
                                        <button onClick={() => {myFunction2("Active"); myFunction1()}}                                            
                                                    class="option-btn" 
                                                >
                                            Active
                                        </button>    
                                    </li>
                                    <li className="dropdown__link">
                                        <button onClick={() => {myFunction2("Blocked"); myFunction1()}}  
                                                class="option-btn"
                                                >
                                            Blocked
                                        </button>
                                    </li>
                                    <li className="dropdown__link">
                                        <button onClick={() => {myFunction2("Online"); myFunction1()}} 
                                                    class="option-btn"
                                                    >
                                            Online
                                        </button>
                                    </li>
                                    <li className="dropdown__link">
                                        <button onClick={() => {myFunction2("Offline"); myFunction1()}}
                                                    class="option-btn"
                                                >
                                            Offline
                                        </button>
                                    </li>
                            </ul>
                    </DropdownContent>
                </Dropdown>
            </div>
        </div>
    )
}