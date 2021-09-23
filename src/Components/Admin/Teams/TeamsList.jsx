import "../../../css/Admin/Teams.css";
import { Loader } from "../../Additional/Loader"
import Dropdown from "react-dropdown";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

export const TeamsList = () => {
    let teams = [], max = 50;
    for(var i=1; teams.push(i++) < max;);
    const [pageNumber, setPageNumber] = useState(0)
    const options = [10, 15, 25, 50];
    const [teamsPerPage, setTeamsPerPage] = useState(options[0]);

    const changeTeamsPerPage = (e) =>{
        var result = options.findIndex((x) => x === e.value);
        setTeamsPerPage(options[result]);
        setPageCount(Math.ceil(teams.length / options[result]))
        setPageNumber(0)
    }
    const pageVisited = pageNumber * teamsPerPage;

    const displayTeams = teams
        .slice(pageVisited, pageVisited + teamsPerPage)
        .map((team) => {
            return(
                <div>
                    <h1> {team} </h1>
                </div>
            );
        })

    const [pageCount, setPageCount] = useState(Math.ceil(teams.length / teamsPerPage))
    const changePage = ({selected}) => {

        setPageNumber(selected)
    }
    const changePageResultStatus = ({currentPage, pagesCount, teamsCount}) =>{
        return(
            <div> {currentPage} - {pagesCount} of {teamsCount} results </div>
        );
    } 
    return (
        <><div className="flex team-list-container">
            <div className="flex teams-list-item align-center list-header">
                <div className="header flex list-header-font">
                    <span>TEAMS</span>
                </div>
                <div className="header flex list-header-font">
                    <span>LOCATION</span>
                </div>
                <div className="header flex list-header-font">
                    <span>ADDED AT</span>
                </div>
                <div className="header flex list-header-font">
                    <span>CATEGORY</span>
                </div>
                <div className="header flex list-header-font">
                    <span>SUBCATEGORY</span>
                </div>
                <div className="header flex list-header-font">
                    <span></span>
                </div>
            </div>
        </div>
        {displayTeams}
        <div className="flex team-list-container">
            <div className="flex teams-list-item align-center list-header">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    activeClassName={"paginationActive"}
                ></ReactPaginate>
                {changePageResultStatus({currentPage: pageNumber + 1, pagesCount: pageCount, teamsCount: teams.length})}
                <div className="drpdown">
                    Result per page
                </div>
                <Dropdown
                    className={"teamsperpage"}
                    options={options}
                    onChange={(e) => changeTeamsPerPage(e)}
                    placeholder={options[0]}
                />
            </div>
        </div></>
    );
};