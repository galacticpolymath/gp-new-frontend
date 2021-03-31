import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";
import classNames from "classnames";
//material-ui icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import TrendingUpIcon from "@material-ui/icons/TrendingUp"; //percent change

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import { cardTitle } from "assets/jss/material-kit-pro-react.js";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
const useStyles = makeStyles(pricingStyle);
const style = {
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  gridItemStyle: {
    display: "grid",
    justifySelf: "left",
    alignContent: "end",
  },
};

export const ModalTable = (props) => {
  const jobObject = props.jobObject;
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const [employ2016, setEmploy2016] = useState("");
  const [employ2026, setEmploy2026] = useState("");
  const [formatedEmploy2016, setFormatedEmploy2016] = useState("");
  const [formatedEmploy2026, setFormatedEmploy2026] = useState("");
  const [percent, setPercent] = useState("");

  const makeCorrectValue = (x) => {
    const xVal = x;
    const newVal = xVal.replace(/,/g, "");
    let numVal = parseFloat(newVal);
    numVal = numVal * 1000.0;
    const stringVal = String(numVal).replace(/^\d+/, (number) =>
      [...number]
        .map(
          (digit, index, digits) =>
            (!index || (digits.length - index) % 3 ? "" : ",") + digit
        )
        .join("")
    );

    return stringVal;
  };

  function getNumberWithSign(input) {
    const stringPercent = String(input);
    if (stringPercent.includes("-")) {
      return stringPercent;
    } else {
      return `+${stringPercent}`;
    }
  }

  useEffect(() => {
    setEmploy2016(jobObject.Employment2016);
    setEmploy2026(jobObject.Employment2026);
    setPercent(jobObject.ChgEmploy2016to26Perc);

    if (employ2016 !== "" && employ2026 !== "") {
      setFormatedEmploy2016(makeCorrectValue(jobObject.Employment2016));
      setFormatedEmploy2026(makeCorrectValue(jobObject.Employment2026));
      setPercent(getNumberWithSign(jobObject.ChgEmploy2016to26Perc));
    }
  }, [jobObject]);
  return (
    <>
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <Button
          simple
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          onClick={() => setClassicModal(false)}
        >
          {" "}
          <Close className={classes.modalClose} />
        </Button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ fontWeight: "bold" }} className={classes.modalTitle}>
            {jobObject.title}
          </h4>
        </div>
      </DialogTitle>

      <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
      >
        <div className="table-parent">
          <h5>
            <strong>Definition:</strong> {jobObject.Def}
          </h5>
          <div className="table-mid">

        <GridContainer 
        className= "container1"
        >

          <GridItem
            xs={12} sm={12} md={4}
          >
            <div className="table-child">
              <AttachMoneyIcon style={{ color: "#363636" }} />
              <h5 style={{ fontWeight: "bold" }}>Median 2017 Annual Wage:</h5>
              <h5>{jobObject.MedianAnnualWage2017}</h5>
            </div>
          </GridItem>

          <GridItem
          xs={12} sm={12} md={4}
          >
            <div className="table-child">
              <SchoolIcon style={{ color: "#363636" }} />
              <h5 style={{ fontWeight: "bold" }}>Education Needed:</h5>
              <h5>{jobObject.TypicalEducationNeededForEntry}</h5>
            </div>
          </GridItem>

            {/* <div className="table-child">
              <WorkIcon style={{ "color": "#363636" }} />
              <h5 style={{ "fontWeight": "bold" }}>
                Work Experience In a Related Occupation Desired:
              </h5>
              <h5>{jobObject.WorkExperienceInARelatedOccupation}</h5>
            </div> */}

            <GridItem
            xs={12} sm={12} md={4}
            >
              <div className="table-child">
                <SupervisedUserCircleIcon style={{ color: "#363636" }} />
                <h5 style={{ fontWeight: "bold" }}>On-the-job Training:</h5>
                <h5>
                  {
                    jobObject.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation
                  }
                </h5>
              </div>
            </GridItem>
          </GridContainer>

        <GridContainer 
        className= "container2"
        >
          <GridItem
          xs={12} sm={12} md={4}
          >
            <div className="table-child">
              <DirectionsWalkIcon style={{ color: "#363636" }} />
              <h5 style={{ fontWeight: "bold" }}>2016 Employment:</h5>
              <h5>{formatedEmploy2016}</h5>
            </div>
          </GridItem>
            
          <GridItem
          xs={12} sm={12} md={4}
          >
            <div className="table-child">
              <TransferWithinAStationIcon style={{ color: "#363636" }} />
              <h5 style={{ fontWeight: "bold" }}>2026 Employment:</h5>
              <h5>{formatedEmploy2026}</h5>
            </div>
          </GridItem>
            
          <GridItem
          xs={12} sm={12} md={4}
          >
            <div className="table-child">
              <TrendingUpIcon style={{ color: "#363636" }} />
              <h5 style={{ fontWeight: "bold" }}>
                Percent change in Employment 2016 - 2026:
              </h5>
              <h4>{percent}%</h4>
            </div>
          </GridItem>
            </GridContainer>
          
          </div>
        </div>
      </DialogContent>
    </>
  );
};
