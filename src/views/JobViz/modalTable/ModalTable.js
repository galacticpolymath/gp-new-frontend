import React, { useState, useEffect } from "react";
//material-ui icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SchoolIcon from "@material-ui/icons/School";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import TrendingUpIcon from "@material-ui/icons/TrendingUp"; //percent change

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import jobVizStyle from "assets/jss/material-kit-pro-react/views/JobVizStyle.js";
import DialogTitle from "@material-ui/core/DialogTitle";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(jobVizStyle);

export const ModalTable = (props) => {
  const jobObject = props.jobObject;
  const classes = useStyles();
  const [employ2016, setEmploy2016] = useState("");
  const [employ2026, setEmploy2026] = useState("");
  const [formattedEmploy2016, setFormattedEmploy2016] = useState("");
  const [formattedEmploy2026, setFormattedEmploy2026] = useState("");
  const [percent, setPercent] = useState("");

  const makeCorrectValue = (x) => {
    let newVal = parseFloat(x) * 1000;
    let out;
    out = newVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return out; /*stringVal;*/
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
      setFormattedEmploy2016(makeCorrectValue(jobObject.Employment2016));
      setFormattedEmploy2026(makeCorrectValue(jobObject.Employment2026));
      setPercent(getNumberWithSign(jobObject.ChgEmploy2016to26Perc));
    }
  }, [jobObject]);
  return (
    <div className={classes.modalContainer}>
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3 style={{ fontWeight: "bold" }} className={classes.modalTitle}>
            {jobObject.title}
          </h3>
        </div>
      </DialogTitle>

      <DialogContent className={classes.modalBody}>
        <div className={classes.jobDefHeader}>
          <h5>
            <strong>Definition:</strong> {jobObject.Def}
          </h5>
        </div>

        {/*MAIN STATS TABLE*/}
        <GridContainer className={classes.tileContainer}>
          <GridItem xs={12} sm={6} md={4} lg={4} className={classes.jobTile}>
            <AttachMoneyIcon style={{ color: "#363636" }} fontSize="large" />
            <h5 style={{ fontWeight: "bold" }}>Median 2017 Annual Wage:</h5>
            <h5>{jobObject.MedianAnnualWage2017}</h5>
          </GridItem>

          <GridItem xs={12} sm={6} md={4} lg={4} className={classes.jobTile}>
            <SchoolIcon style={{ color: "#363636" }} fontSize="large" />
            <h5 style={{ fontWeight: "bold" }}>Education Needed:</h5>
            <h5>{jobObject.TypicalEducationNeededForEntry}</h5>
          </GridItem>

          <GridItem xs={12} sm={6} md={4} lg={4} className={classes.jobTile}>
            <SupervisedUserCircleIcon
              style={{ color: "#363636" }}
              fontSize="large"
            />
            <h5 style={{ fontWeight: "bold" }}>On-the-job Training:</h5>
            <h5>
              {
                jobObject.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation
              }
            </h5>
          </GridItem>

          <GridItem xs={12} sm={6} md={4} lg={4} className={classes.jobTile}>
            <DirectionsWalkIcon style={{ color: "#363636" }} fontSize="large" />
            <h5 style={{ fontWeight: "bold" }}>2016 Employment:</h5>
            <h5>{formattedEmploy2016}</h5>
          </GridItem>

          <GridItem xs={12} sm={6} md={4} lg={4} className={classes.jobTile}>
            <TransferWithinAStationIcon
              style={{ color: "#363636" }}
              fontSize="large"
            />
            <h5 style={{ fontWeight: "bold" }}>2026 Employment:</h5>
            <h5>{formattedEmploy2026}</h5>
          </GridItem>

          <GridItem xs={12} sm={6} md={4} lg={4} className={classes.jobTile}>
            <TrendingUpIcon style={{ color: "#363636" }} fontSize="large" />
            <h5 style={{ fontWeight: "bold" }}>
              Percent change in Employment 2016&nbsp;-&nbsp;2026:
            </h5>
            <h4>{percent}%</h4>
          </GridItem>
        </GridContainer>
      </DialogContent>
    </div>
  );
};
