import { api } from "./../Config/Axios";

const GetAllUsers = () => {
  return api().get("Users/GetAllUsers");
};
const SearchUser = (name) => {
  return api().get(`/Users/SearchUser?name=${name}`)
};

export default {
  GetAllUsers,
  SearchUser,
};
