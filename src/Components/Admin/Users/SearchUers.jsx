import "../../../css/Admin/Users.css";
import { useState, useEffect } from "react";

import UsersService from "../../../Services/UsersService";

export const SearchUsers = ({ setLoader, setUsers, setPerson}) => {
  const [name, setName] = useState("");

  //Таймер 1 секунда після якого спрацьовує автоматичне надсилання ім'я
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (name) {
        setLoader(true);
        UsersService.SearchUser(name).then((response) => {
          /*console.log("name")
          if (setPerson){
            console.log("name_ad1")*/
            setUsers(response.data.users);
          /*}
          else{
            console.log("name_ad2")
            console.log(response.data.users)
            setUsers(response.data.users.filter((x) => x.role == "Admin"));
          }*/
          setTimeout(() => {
            setLoader(false);
          }, 500);
        });
      } else {
        setLoader(true);
        UsersService.GetAllUsers().then((response) => {
          if(setPerson){
            setUsers(response.data.users.filter((x) => x.role != "Admin"));
          }
          else{
            setUsers(response.data.users.filter((x) => x.role == "Admin"));
          }
          setTimeout(() => {
            setLoader(false);
          }, 500);
        });
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [name, setPerson]);

  return (
    <div className={"search-container "}>
      <div class="search-box">
        <button onClick={() => console.log("search button")} class="btn-search">
          <svg
            fill="rgba(127, 136, 153, 1)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="20px"
            height="20px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </button>
        <input
          type="text"
          value={name}
          class="input-search"
          placeholder="Type a user name here"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};
