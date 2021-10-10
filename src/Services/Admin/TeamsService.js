import { api } from '../../Config/Axios';

const GetCategories = () => {
    return api().get("Teams/categories/get").then
    ((response) => {
      return response.data;
    })
  }; 
  
  const AddTeam = (form_data) => {
    return api().post("Teams/add", form_data)
      .then((response) => { 
        return response;
      });
  };

  export default {
    GetCategories,
    AddTeam
  };
  