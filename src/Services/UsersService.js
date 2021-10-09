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


const ContactUs = (FirstName,email,phone,message) => {
  let data = {FirstName,email,phone,message};
  return api().post("User/ContactUs", data)
  .then((response) => {  
    return response;
  });
};

const DeleteUser = (id) => {
  id = { id };
  return api().request({
    url: "Users/DeleteUser",
    method: "delete",
    data: id,
  });
};
const ChangePassword = (currentPassword, newPassword) => {
  let data = {currentPassword, newPassword };
  return api().post("Auth/changePassword", data)
  .then((response) => {  
    return response;
  });
};
const UpdateInfo = (Name,email,Image) => {
  let data = {Name,email,Image};
  return api().post("User/Update", data)
  .then((response) => {  
    return response;
  });
};
export default {
  GetAllUsers,
  SearchUser,
  GetSortedUsers,
  ChangeStatus,
  DeleteUser,
  SwitchRoles,
  ContactUs,
  ChangePassword,
  UpdateInfo
};


