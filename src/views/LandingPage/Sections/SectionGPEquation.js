import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
// import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";
import { primaryColor} from "assets/jss/material-kit-pro-react.js";
import { makeCloudinaryUrl } from "../../../components/shared/constants";
import { BarChart, ImportContacts, SearchOutlined, WorkOutline } from "@material-ui/icons";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  bubble1: {
    display: "inline-block",
    placeContent: "center",
    // border: "1px solid "+ grayColor[0],
    padding: "5px",
    borderRadius: "10px",
    margin: "0.75rem 0.5rem",
    "& .MuiSvgIcon-root":{
      fontSize: "1.2em",
      margin: "auto 0",
      align: "center",
    }

  },
  bubble2: {
    display: "inline-block",
    color: primaryColor[0],
    placeContent: "center",
    border: "2px solid " + primaryColor[0],
    padding: "5px",
    borderRadius: "10px",
    margin: "0.75rem 0.5rem",
  },
  narrowSection: {
    display:"flex",
    padding: "2%",
    placeContent: "center",

  },

  //Special styling for sm to medium devices
  "@media only screen and (min-width: 0px) and (max-width: 959px)": {},

  // Correct H3 size for medium screens where 4 columns are first displayed
  "@media only screen and (min-width: 960px) and (max-width: 1279px)": {}


};

const useStyles = makeStyles(style);

export default function SectionGPEquation() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.narrowSection)}>

      <h3>
        <div className={classes.bubble1}>
        <SearchOutlined className={classes.ic}/> Real Research
        </div>
        +
        <div className={classes.bubble1}>
         <ImportContacts/>  Real Stories
        </div>
        +
        <div className={classes.bubble1}>
         <BarChart /> Real Data
        </div>
        +
        <div className={classes.bubble1}>
          <WorkOutline/> Real Careers
        </div>
        =
        <div className={classes.bubble2}>
                <img
                  src={makeCloudinaryUrl("w_600/v1593304396/logos/GP_logo_grad_transBG_300_tbn4ei.jpeg")}
                  className={classNames(classes.mlAuto, classes.mrAuto)}
                  style={{
                    // width:"10"
                    width: "2rem", display: "inline-block", marginLeft: "1rem", marginRight: "0.25rem"
                  }}
                  alt={"The Galactic Polymath logo. A starburst of lines and dots, in blue, purple and pink."}
                /><b>Real&nbsp;learning</b>
              </div>

      </h3>
    </div>
  );
}
