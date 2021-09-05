import { api } from "./../Config/Axios";
const GetSortedUsers = (data) => {
    return api().get(`/Users/GetSortedUsers`)
}
export default {GetSortedUsers};