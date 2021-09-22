import IconButton from "@material-ui/core/IconButton";
import ReactTooltip from "react-tooltip";
import "../../../css/Admin/Sidebar.css";
import { Link } from "react-router-dom";

export const LeftMenu = () => {
  return (
    <div className="left-menu">
      <IconButton classNmae="lefMenuIcons" data-tip data-for="Surveys">
        <img
          src="./media/Surveys.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="Surveys" place="right" effect="solid">
        Surveys
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="Banners">
        <img
          src="./media/Banners.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="Banners" place="right" effect="solid">
        Banners
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="Languages">
        <img
          src="./media/Langueges.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="Languages" place="right" effect="solid">
        Languages
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="Footer">
        <img
          src="./media/Footer.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="Footer" place="right" effect="solid">
        Footer
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="SocialNetwork">
        <img
          src="./media/Shares.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="SocialNetwork" place="right" effect="solid">
        Social Network
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="Users">
        <img
          src="./media/MyUsers.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="Users" place="right" effect="solid">
        Users
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="IA">
        <img
          src="./media/IA.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="IA" place="right" effect="solid">
        IA
      </ReactTooltip>
      <br />
      <Link to="/teams">
        <IconButton data-tip data-for="Teams">
          <img
            src="./media/teams.svg"
            alt="Example1"
            width="26"
            height="26"
            className="filterit"
          />
        </IconButton>
      </Link>
      <ReactTooltip id="Teams" place="right" effect="solid">
        Teams
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="NewsPartners">
        <img
          src="./media/NewsPartnerds.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="NewsPartners" place="right" effect="solid">
        News Partners
      </ReactTooltip>
      <br />
      <IconButton data-tip data-for="Advertising">
        <img
          src="./media/Group147.svg"
          alt="Example1"
          width="26"
          height="26"
          className="filterit"
        />
      </IconButton>
      <ReactTooltip id="Advertising" place="right" effect="solid">
        Advertising
      </ReactTooltip>
    </div>
  );
};
