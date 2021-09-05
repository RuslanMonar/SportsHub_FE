import { api } from "./../Config/Axios";
const GetSortedUsers = (data) => {
    return api().post(`Users/GetSortedUsers?data=`+ data)
}
export default {GetSortedUsers};