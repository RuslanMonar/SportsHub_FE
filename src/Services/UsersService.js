import { api } from "./../Config/Axios";

const GetAllUsers = () => {
  return api().get("Users/GetAllUsers");
};

export default {
  GetAllUsers,
};
