import Dropdown from "react-dropdown";
import "../../../css/Admin/Teams.css";
import "../../../css/GlobalStyles/main.css";
import Dropzone from "./DropZone";
import { useState } from "react";
import Input from "react-validation/build/input";
import { useEffect } from "react";
import TeamsService from "../../../Services/Admin/TeamsService";
import Form from "react-validation/build/form";



const TeamsSlector = ({searchInput , setSearchInput}) => {

  const [file, setFile] = useState([]);
  const [successful, setSuccessful] = useState(false);
  const [validateError, setValidateError] = useState(false);

  const [teamsData, setTeamsData] = useState();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subcategoryOptions, setSubCategoryOptions] = useState([]);

  const [categoryId, setCategoryId] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [teamName, setTeamName] = useState();

  const setCategories = (data) => {
    var result = [];
    var categories = data.categories;
    for(var ctg in categories){
        result.push(categories [ctg]["name"]);
    }
    setTeamsData(data);
    setCategoryOptions(result);
  }

  const handleCategoryChoose = (e) => {
    var idx = 0;
    var categories = teamsData.categories;
    for(var ctg in categories){
        if (categories [ctg]["name"] == e.label){
          idx = categories [ctg]["id"];
        };
    }
    var result = []
    var subcategories = teamsData.subCategories;
    for(var subctg in subcategories){
      if(subcategories[subctg]["categoryId"] == idx){
        result.push(subcategories[subctg]["name"]);
      }
    }
    setCategoryId(idx);
    setSubCategoryOptions(result);
  }

  const handleSubCategoryChoose = (e) => {
    var idx = 0;
    var subcategories = teamsData.subCategories;
    for(var subctg in subcategories){
        if (subcategories [subctg]["name"] == e.label){
          idx = subcategories [subctg]["id"];
        };
    }
    setSubCategoryId(idx);
  }



  const handleDropZoneChange = (event) => {
    setFile(event.target.files[0]);
  };

  const validateData = () => {
    if (searchInput.includes("undefined") || file == null ||
    !teamName){
      return false;
    }
    return true;
  }

  const handleSubmission = (e) => {
    
      e.preventDefault();
      if (validateData()){
        var data = new FormData();
        data.append("Name", teamName);
        data.append("Location", searchInput);
        data.append("CategoryId", categoryId);
        data.append("SubCategoryId", subCategoryId);
        data.append("Image", file);
        TeamsService.AddTeam(data)
        .then(() => {
          setTimeout(() => {
            setSuccessful(true);
          }, 2000);
        })
      } else{
        setValidateError(true);
        setTimeout(() => {
          setValidateError(false);
        }, 4000);
      }
  };

  const onChangeTeam = (e) => {
    const teamname = e.target.value;
    setTeamName(teamname);
  };

  if (teamsData == null){
    TeamsService.GetCategories().then(data => {
      setCategories(data);
    });
  }

  return (
    <Form  className="dropdowns-container">
      <div  className="dropdown-option">
        <span>SELECT LOCATION</span>
        <input disabled value={searchInput} className="teams-selector" />       
      </div>
      <div className="dropdown-option">
        <span>SELECT CATEGORY</span>
        <Dropdown
          className="teams-selector"
          options={categoryOptions}
          placeholder="Select an option"
          onChange={handleCategoryChoose}
        />
      </div>
      <div className="dropdown-option">
        <span>SELECT SUBCATEGORY</span>
        <Dropdown
          className="teams-selector"
          options={subcategoryOptions}
          placeholder="Select an option"
          onChange={handleSubCategoryChoose}
        />
      </div>
      <div className="dropdown-option">
        <span>TEAM NAME</span>
        <Input
                  type="text"
                  className="form-input"
                  placeholder="Input an option"
                  value={teamName}
                  onChange={onChangeTeam}
                  validations={[]}
                />
      </div>
      <input name="teamLogo" type="file" onChange={handleDropZoneChange} />
      <Dropzone/>
      <div
        onClick={handleSubmission}
        className="teams-dropdown-button teams-dropdown-button-red"
      >
        Add to list
      </div>
      <div className="teams-dropdown-button">Cancel</div>
      {successful ? <div>Successfully added team!</div>: null}
      
    </Form>
  );
};

export default TeamsSlector;
