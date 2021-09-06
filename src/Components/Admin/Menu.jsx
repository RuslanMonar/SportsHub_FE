import React,{useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import ReactTooltip from "react-tooltip";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../../css/Sidebar.css";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}



function IAIcon() {
  return (
     <img src='./media/IA.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}

function SurveysIcon() {
  return (
    //  <img src='./media/Surveys.svg' viewBox="1 46.35 26.82 30.41" className="filterit"/>
     <img src='./media/Surveys.svg' alt="Example1" width="26" height="26"  className="filterit"/> 
  );
}

function BannersIcon() {
  return (
     <img src='./media/Banners.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}

function LanguagesIcon() {
  return (
     <img src='./media/Langueges.svg' alt="Example1" width="26" height="26"  className="filterit"/>
  );
}

function SharesIcon() {
  return (
     <img src='./media/Shares.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}
function UsersIcon() {
  return (
     <img src='./media/MyUsers.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}
function NewsIcon() {
  return (
     <img src='./media/NewsPartnerds.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}
function FooterIcon() {
  return (
     <img src='./media/Footer.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}
function TeamsIcon() {
  return (
     <img src='./media/teams.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}
function AdvertisingIcon() {
  return (
     <img src='./media/Group147.svg' alt="Example1" width="26" height="26" className="filterit"/>
  );
}

  
export default function SimpleTooltips() {

  const [value, setValue] = React.useState('HOME');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  return (
    <div>
    <h5>{value}</h5>
   
    <div>
     <TabPanel  value={value} index={0}>
        HOME
      </TabPanel>
      <TabPanel value={value} index={1}>
        NBA
      </TabPanel>
      <TabPanel value={value} index={2}>
        NFL
      </TabPanel>
      <TabPanel value={value} index={3}>
        MLB
      </TabPanel>
      <TabPanel value={value} index={4}>
        NHL
      </TabPanel>
      <TabPanel value={value} index={5}>
        CBB
      </TabPanel>
      <TabPanel value={value} index={6}>
        CFB
      </TabPanel>
      <TabPanel value={value} index={7}>
       NASCAR
      </TabPanel>
      <TabPanel value={value} index={8}>
       GOLF
      </TabPanel>
      <TabPanel value={value} index={9}>
      VIDEO
      </TabPanel>
      <TabPanel value={value} index={10}>
      LIFESTYLE
      </TabPanel>
      <TabPanel value={value} index={11}>
      DEALBOOK
      </TabPanel>
      <div >
        <Tabs
          style={{ backgroundColor: '#FFFFFF'}}
          indicatorColor="none"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className="tabitemstyle" label="HOME" {...a11yProps(0)} onClick={() => setValue('HOME')} />
          <Tab className="tabitemstyle" label="NBA" {...a11yProps(1)} onClick={() => setValue('NBA')} />
          <Tab className="tabitemstyle" label="NFL" {...a11yProps(2)} onClick={() => setValue('NFL')}/>
          <Tab className="tabitemstyle" label="MLB" {...a11yProps(3)} onClick={() => setValue('MLB')}/>
          <Tab className="tabitemstyle"  label="NHL" {...a11yProps(4)} onClick={() => setValue('NHL')}/>
          <Tab className="tabitemstyle" label="CBB" {...a11yProps(5)} onClick={() => setValue('CBB')} />
          <Tab className="tabitemstyle" label="CFB" {...a11yProps(6)} onClick={() => setValue('CFB')} />
          <Tab className="tabitemstyle" label="NASCAR" {...a11yProps(7)} onClick={() => setValue('NASCAR')}/>
          <Tab className="tabitemstyle" label="GOLF" {...a11yProps(8)} onClick={() => setValue('GOLF')}/>
          <Tab className="tabitemstyle" label="VIDEO" {...a11yProps(9)} onClick={() => setValue('VIDEO')}/>
          <Tab className="tabitemstyle" label="LIFESTYLE" {...a11yProps(10)} onClick={() => setValue('LIFESTYLE')}/>
          <Tab className="tabitemstyle" label="DEALBOOk" {...a11yProps(11)} onClick={() => setValue('DEALBOOK')}/>
        </Tabs>
        </div>
    </div>
    <div className="sidebarrect">
      <IconButton data-tip data-for="Surveys"  onClick={() => setValue('Surveys')}>
       <img src='./media/Surveys.svg' alt="Example1" width="26" height="26"  className="filterit"/> 
        </IconButton>
      <ReactTooltip id="Surveys" place="right" effect="solid" >
      Surveys
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="Banners"  onClick={() => setValue('Banners')}>
      <BannersIcon />
        </IconButton>
      <ReactTooltip id="Banners" place="right" effect="solid" >
      Banners
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="Languages" onClick={() => setValue('Languages')}>
      <LanguagesIcon/>
        </IconButton>
      <ReactTooltip id="Languages" place="right" effect="solid" >
      Languages
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="Footer" onClick={() => setValue('Footer')}>
      <FooterIcon />
        </IconButton>
      <ReactTooltip id="Footer" place="right" effect="solid" >
      Footer
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="SocialNetwork" onClick={() => setValue('Social Network')}>
        <SharesIcon />
        </IconButton>
      <ReactTooltip id="SocialNetwork" place="right" effect="solid" >
      Social Network
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="Users" onClick={() => setValue('Users')}>
          <UsersIcon />
        </IconButton>
      <ReactTooltip id="Users" place="right" effect="solid" >
      Users
      </ReactTooltip>
      <br/> 
      <IconButton data-tip data-for="IA" onClick={() => setValue('IA')}>
          <IAIcon />
        </IconButton>
      <ReactTooltip id="IA" place="right" effect="solid" >
       IA
      </ReactTooltip>
      <br/> 
      <IconButton data-tip data-for="Teams" onClick={() => setValue('Teams')}>
          <TeamsIcon />
        </IconButton>
      <ReactTooltip id="Teams" place="right" effect="solid" >
      Teams
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="NewsPartners" onClick={() => setValue('News Partners')}>
          <NewsIcon />
        </IconButton>
      <ReactTooltip id="NewsPartners" place="right" effect="solid" >
      News Partners
      </ReactTooltip>
      <br/>
      <IconButton data-tip data-for="Advertising" onClick={() => setValue('Advertising')}>
          <AdvertisingIcon />
        </IconButton>
      <ReactTooltip id="Advertising" place="right" effect="solid" >
       Advertising
      </ReactTooltip>
    </div>
    </div>
  );
 }

