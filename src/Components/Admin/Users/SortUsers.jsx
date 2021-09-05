import { React, useState, useEffect } from "react";
import Dropdown, {DropdownContent, DropdownTrigger} from 'react-simple-dropdown';
import "../../../css/Admin/Users.css";
import UsersService from "../../../Services/UsersService";


export const  SortUsers = ({setLoader, setUsers}) => {

    const options = [ 
        {value: 0, label: 'Active'},
        {value: 1, label: 'Blocked'},
        {value: 2, label: 'Online'},
        {value: 3, label: 'Offline'},
    ];
    const[data, setData] = useState();
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if (data) {
            setLoader(true);
            UsersService.GetSortedUsers(data).then((response) => {
              setUsers(response.data.users);
              setTimeout(() => {
                setLoader(false);
              }, 500);
            });
            }
        }, 1000);
        return () => clearTimeout(delayDebounceFn);
      }, [data]);
    
    return(
        <div className={"father"}> 
            <div class="sort-box">
                <button class="filter-btn" onClick={myFunction}>
                        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                        </svg>
                </button>
                <div id="myDIV">
                    <Dropdown className="dropdown">
                 
                        <DropdownContent>
                            <div className="dropdown__identity dropdown__segment">
                                <b> Sort by </b>
                            </div>
                                <ul className="dropdown__quick-links dropdown__segment">
                                        <li className="dropdown__link">
                                            <button onClick={myFunction}
                                                     value={options[0].value}
                                                     class="option-btn" 
                                                     onChange={(e) => setData(e.target.value)}>
                                                Active
                                            </button>    
                                        </li>
                                        <li className="dropdown__link">
                                            <button onClick={myFunction} 
                                                    value={options[1].value} 
                                                    class="option-btn" 
                                                    onChange={(e) => setData(e.target.value)}>
                                                Blocked
                                            </button>
                                        </li>
                                        <li className="dropdown__link">
                                            <button onClick={myFunction} 
                                                    value={options[2].value}
                                                     class="option-btn"
                                                      onChange={(e) => setData(e.target.value)}>
                                                Online
                                            </button>
                                        </li>
                                        <li className="dropdown__link">
                                            <button onClick={myFunction}
                                                     value={options[3].value}
                                                      class="option-btn"
                                                       onChange={(e) => setData(e.target.value)}>
                                                Offline
                                            </button>
                                        </li>
                                </ul>
                        </DropdownContent>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}