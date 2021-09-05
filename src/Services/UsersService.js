import { api } from "./../Config/Axios";


const GetAllUsers = () => {
  return api().get("Users/GetAllUsers");
};
const SearchUser = (name) => {
  return api().get(`/Users/SearchUser?name=${name}`)
};
const GetSortedUsers = (data) => {
  return api().get(`/Users/GetSortedUsers`)
}
export default {GetSortedUsers};

export default {
  GetAllUsers,
  SearchUser,
};

