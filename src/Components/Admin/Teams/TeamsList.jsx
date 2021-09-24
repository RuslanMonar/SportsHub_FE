import "../../../css/Admin/Teams.css";
import { Loader } from "../../Additional/Loader"
import Dropdown from "react-dropdown";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

export const TeamsList = () => {
    const [loader, setLoader] = useState(true);
    let teams = [], max = 200;
    for(var i=1; teams.push(i++) < max;);
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
                <div className={"teams-list-item align-center"}>
                    <div className={"flex team align-center"}>
                        <h1> {team} </h1>
                    </div>
                </div>
            );
        })

    const [pageCount, setPageCount] = useState(Math.ceil(teams.length / teamsPerPage))
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
                <> <div className="flex team-list-container">
                        <div className="flex teams-list-item align-center teams-list-header">
                            <div className="teams-header flex teams-list-header-font">
                                <span>TEAMS</span>
                            </div>
                            <div className="teams-header flex teams-list-header-font">
                                <span>LOCATION</span>
                            </div>
                            <div className="teams-header flex teams-list-header-font">
                                <span>ADDED AT</span>
                            </div>
                            <div className="teams-header flex teams-list-header-font">
                                <span>CATEGORY</span>
                            </div>
                            <div className="teams-header flex teams-list-header-font">
                                <span>SUBCATEGORY</span>
                            </div>
                            <div className="teams-header flex teams-list-header-font">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div>
                    {allTeams}
                    </div> </>
            );
        }
        return (
            <><div className="flex team-list-container">
                <div className="flex teams-list-item align-center teams-list-header">
                    <div className="teams-header flex teams-list-header-font">
                        <span>TEAMS</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>LOCATION</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>ADDED AT</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>CATEGORY</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span>SUBCATEGORY</span>
                    </div>
                    <div className="teams-header flex teams-list-header-font">
                        <span></span>
                    </div>
                </div>
            </div>
            {allTeams}
            <div className="flex team-list-container">
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
            </div></>
        );
    }
    return(
        displayTeams()
    );
    
};