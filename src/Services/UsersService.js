import { api } from "./../Config/Axios";


const GetAllUsers = () => {
  return api().get("Users/GetAllUsers");
};
const SearchUser = (name) => {
  return api().get(`/Users/SearchUser?name=${name}`);
};
const GetSortedUsers = (data) => {
    return api().post(`Users/GetSortedUsers?data=`+ data)
}
const ChangeStatus = (id) => {
  var data = {id}
  return api().put(`/Users/ChangeStatus`,data)
}
const SwitchRoles = (id) => {
  var data = {id}
  return api().put(`/Users/SwitchRoles`,data)
}
const DeleteUser = (id) => {
  id = { id };
  return api().request({
    url: "Users/DeleteUser",
    method: "delete",
    data: id,
  });
};

export default {
  GetAllUsers,
  SearchUser,
  GetSortedUsers,
  ChangeStatus,
  DeleteUser,
  SwitchRoles
};


