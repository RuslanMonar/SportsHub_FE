import Dropdown from "react-dropdown";
import "../../../css/Admin/Teams.css";
import Dropzone from "./DropZone";
import { useState } from "react";
import { useEffect } from "react";
import TeamsService from "../../../Services/Admin/TeamsService";



const TeamsSlector = ({searchInput , setSearchInput}) => {

  const [file, setFile] = useState([]);


  const [teamsData, setTeamsData] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subcategoryOptions, setSubCategoryOptions] = useState([]);

  const [categoryId, setCategoryId] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);


  TeamsService.GetCategories().then(data => {
    setTeamsData(data);
    setCategories();
  });

  const setCategories = () => {
    var result = [];
    var categories = teamsData.categories;
    for(var ctg in categories){
        result.push(categories [ctg]["name"]);
    }
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



  const handleDropZoneChange = (files) => {
    setFile(
      files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const handleSubmission = (e) => {
      e.preventDefault();
      var data = new FormData();
      data.append("Name", "Sevilla FC");
      data.append("Location", "Sevilla");
      data.append("CategoryId", category);
      data.append("SubCategoryId", 5);
      data.append("Image", file);
      TeamsService.AddTeam(data);
  };

  return (
    <div  className="dropdowns-container">
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
      
      <Dropzone onChange={handleDropZoneChange} />

      <div
        onClick={() => console.log(file)}
        className="teams-dropdown-button teams-dropdown-button-red"
      >
        Add to list
      </div>
      <div className="teams-dropdown-button">Cancel</div>
    </div>
  );
};

export default TeamsSlector;
