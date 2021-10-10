import "../../../css/Admin/Teams.css";
import TeamService from "../../../Services/TeamService";
import TeamItem from "./TeamItem";
import { Loader } from "../../Additional/Loader"
import Dropdown from "react-dropdown";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

export const TeamsList = () => {
    const [teams, setTeams] = useState([]);
    TeamService.GetAllTeams().then((response) => {
        setTeams(response.data.teams);});
    const [pageNumber, setPageNumber] = useState(0)
    const options = [10, 25, 50];
    const [teamsPerPage, setTeamsPerPage] = useState(options[0]);

    const changeTeamsPerPage = (e) =>{
        var result = options.findIndex((x) => x === e.value);
        setTeamsPerPage(options[result]);
        setPageCount(Math.ceil(teams.length / options[result]))
        setPageNumber(0)
    }
    const pageVisited = pageNumber * teamsPerPage;
    const allTeams = teams
        .slice(pageVisited, pageVisited + teamsPerPage)
        .map((team) => {
            return(
                <TeamItem key={team.id} {...team}/>
            );
        })
    var pagesCount = Math.ceil(teams.length / teamsPerPage);
    const [pageCount, setPageCount] = useState(2);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const changePageResultStatus = ({currentPage, pagesCount, teamsCount}) =>{
        return(
            <div className={"current-page-line"}> {currentPage} - {pagesCount} of {teamsCount} results </div>
        );
    } 
    const displayTeams = () => {
        if(teams.length === 0){
            return(
                <div></div>
            );
        }
        else if(teams.length < options[0]){
            return(
                <>
                    <div className="flex teams-list-item align-center teams-list-header">
                        <div className="teams-header flex teams-list-header-font">
                            <span>Teams</span>
                            <button className="filter-button">
                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                                </svg>
                            </button>
                        </div>
                        <div className="teams-header flex teams-list-header-font">
                            <span>Location</span>
                            <button className="filter-button">
                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                                </svg>
                            </button>
                        </div>
                        <div className="teams-header flex teams-list-header-font">
                            <span>Added At</span>
                        </div>
                        <div className="teams-header flex teams-list-header-font">
                            <span>Category</span>
                        </div>
                        <div className="teams-header flex teams-list-header-font">
                            <span>SubCategory</span>
                        </div>
                        <div className="teams-header flex teams-list-header-font">
                            <span></span>
                        </div>
                    </div>
                    <div>
                        {allTeams}
                    </div>
                 </>
            );
        }
        return (
                <><div className="flex teams-list-item align-center teams-list-header">
                    <div className="teams-header flex teams-list-header-font">
                        <span>Teams</span>
                        <button className="filter-button">
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                            </svg>
                        </button>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>Location</span>
                        <button className="filter-button">
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5917 0H0.554688L5.3695 5.25556V8.88889L7.77691 10V5.25556L12.5917 0Z" fill="#B2B2B2"/>
                            </svg>
                        </button>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>Added At</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>Category</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>SubCategory</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span></span>
                    </div>
                </div>
                {allTeams}
                <div className="flex teams-list-item align-center teams-list-footer teams-list-footer-font">
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        forcePage={pageNumber}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        activeClassName={"paginationActive"}
                    ></ReactPaginate>
                    {changePageResultStatus({currentPage: pageNumber + 1, pagesCount: pageCount, teamsCount: teams.length})}
                    <div className="result-per-page-line">
                        Result per page
                    </div>
                    <div className="dropdown-per-page">
                        <Dropdown
                            className={"teamsperpage"}
                            options={options}
                            onChange={(e) => changeTeamsPerPage(e)}
                            placeholder={options[0]}
                        />
                    </div>
                </div>
                </>
        );
    }
    return(
        displayTeams()
    );
    
};