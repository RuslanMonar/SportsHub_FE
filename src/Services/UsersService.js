import { api } from "./../Config/Axios";


const GetAllUsers = () => {
  return api().get("Users/GetAllUsers");
};
const SearchUser = (name) => {
  return api().get(`/Users/SearchUser?name=${name}`)
};
<<<<<<< HEAD
const GetSortedUsers = (data) => {
    return api().post(`Users/GetSortedUsers?data=`+ data)
}

const ChangeStatus = (id) => {
  var data = {id}
  return api().put(`/Users/ChangeStatus`,data)
}
=======
const DeleteUser = (id) => {
    return api().delete(`Users/DeleteUser?id=${id}`)
};
>>>>>>> Added styles for confirm alert to delete button

export default {
  GetAllUsers,
  SearchUser,
<<<<<<< HEAD
  GetSortedUsers,
  ChangeStatus
=======
  DeleteUser
>>>>>>> Added styles for confirm alert to delete button
};


