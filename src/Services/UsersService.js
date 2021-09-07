import { api } from "./../Config/Axios";

const GetAllUsers = () => {
  return api().get("Users/GetAllUsers");
};
const SearchUser = (name) => {
  return api().get(`/Users/SearchUser?name=${name}`)
};

const ChangeStatus = (id) => {
  var data = {id}
  return api().put(`/Users/ChangeStatus`,data)
}

export default {
  GetAllUsers,
  SearchUser,
  ChangeStatus
};
