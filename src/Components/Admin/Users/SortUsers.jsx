import { React, useState, useEffect, useRef } from "react";
import Dropdown, {DropdownContent, DropdownTrigger} from 'react-simple-dropdown';
import "../../../css/Admin/Users.css";
import UsersService from "../../../Services/UsersService";

export const  SortUsers = ({setUsers}) => {
    function HideDropdown() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else { 
          x.style.display = "none";
        }
    }

    function SortedUsers(data) {
        if (data) {
            UsersService.GetSortedUsers(data).then((response) => {
                setUsers(response.data.users);
            });
        }
        return;
    }

    function changeColor(name){
        var coll = document.getElementsByName(name)
        var all = document.getElementsByClassName("option-btn");
        for(var i=0, len=all.length; i<len; i++)
        {
            all[i].style["background-color"] = "white"
            all[i].style["color"] = "black"
        }
        coll[0].style["background-color"] = "#fac0c0";
        coll[0].style["color"] = "red";
    }
    
    return(
        <div class="sort-box">
            <button class="filter-btn" onClick={HideDropdown}>
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                    </svg>
            </button>
            <div id="myDIV"style={{"display": "none"}}>
                <Dropdown className="dropdown">           
                    <DropdownContent>
                        <div className="dropdown__identity dropdown__segment">
                            <b> Sort by </b>
                        </div>
                            <ul className="dropdown__quick-links dropdown__segment">
                                    <li className="dropdown__link">
                                        <button onClick={() => {SortedUsers("Active"); HideDropdown(); changeColor("Active")}}                                            
                                                className="option-btn" name="Active" >
                                            Active
                                        </button>    
                                    </li>
                                    <li className="dropdown__link">
                                        <button onClick={() => {SortedUsers("Blocked"); HideDropdown(); changeColor("Blocked")}}  
                                                className="option-btn" name="Blocked">
                                            Blocked
                                        </button>
                                    </li>
                                    <li className="dropdown__link">
                                        <button onClick={() => {SortedUsers("Online"); HideDropdown(); changeColor("Online")}} 
                                                className="option-btn" name="Online">
                                            Online
                                        </button>
                                    </li>
                                    <li className="dropdown__link">
                                        <button onClick={() => {SortedUsers("Offline"); HideDropdown(); changeColor("Offline")}}
                                                className="option-btn" name="Offline">
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