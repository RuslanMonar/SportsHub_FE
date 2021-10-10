import "../../../css/Admin/Teams.css";

export default function TeamItem ({
    id,
    teamName,
    location,
    addedAt,
    categoryName,
    subCategoryName
}) {
    return(
            <div className="flex teams-list-items align-center teams-list-header-item">
                <div className="teams-header flex teams-item-font">
                    <span>
                        {teamName}
                    </span>
                </div>
                <div className="teams-header flex teams-item-font">
                    <span>
                        {location}
                    </span>
                </div>
                <div className="teams-header flex teams-item-font">
                    <span>
                        {addedAt}
                    </span>
                </div>
                <div className="teams-header flex teams-item-font">
                    <span>
                        {categoryName}
                    </span>
                </div>
                <div className="teams-header flex teams-item-font">
                    <span>
                        {subCategoryName}
                    </span>
                </div>
                <div className="teams-header flex teams-item-font">
                    <button className="additional-options-text">
                        Edit
                    </button>
                    <button className="trash-bin-icon">
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9063 2.84648C12.8088 2.47734 12.7438 2.27227 12.7438 2.27227C12.6382 1.89082 12.37 1.89082 11.9719 1.8252L9.81445 1.55039C9.5463 1.50527 9.5463 1.50527 9.44067 1.27148C9.08719 0.467578 8.9775 0 8.59152 0H4.40673C4.02075 0 3.91511 0.467578 3.56164 1.27559C3.45601 1.50527 3.45601 1.50527 3.18785 1.55449L1.02639 1.8293C0.632287 1.89492 0.347883 1.93184 0.242248 2.31328C0.242248 2.31328 0.193493 2.48144 0.0919205 2.84648C-0.0380925 3.33457 -0.0909103 3.28125 0.356009 3.28125H12.6422C13.0892 3.28535 13.0404 3.33457 12.9063 2.84648Z" fill="#B2B2B2"/>
                            <path d="M11.5137 4.59375H1.4865C0.812056 4.59375 0.779552 4.68398 0.820181 5.19668L1.57994 15.1471C1.64495 15.6516 1.69371 15.7541 2.29095 15.7541H10.7093C11.3065 15.7541 11.3553 15.6516 11.4203 15.1471L12.1801 5.19668C12.2207 4.67988 12.1882 4.59375 11.5137 4.59375Z" fill="#B2B2B2"/>
                        </svg>
                    </button>
                </div>
            </div>
    );
}