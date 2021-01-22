import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import { cardTitle } from "assets/jss/material-kit-pro-react.js";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "components/CustomButtons/Button.js";
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
};

export const ModalTable = (props) => {
  const jobObject = props.jobObject;
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  const makeCorrectValue = (x) => {
    // console.log(x);
    x = parseFloat(x);
    x = x * 1000.0;
    // add commas
    x= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // x = toString(x);
    return x;
  };

  const leadingPlus = (x)=> {
    return((x<0?"":"+")+x)
  }


  const employ2016 = makeCorrectValue(jobObject.Employment2016);
  const employ2026 = makeCorrectValue(jobObject.Employment2026);
  const changeEmploy2026= leadingPlus(jobObject.ChgEmploy2016to26Perc);
  // const Employment2016 = (
  //   parseFloat(employ2016.replace(",", "") * 1000.0
  // ).toLocaleString();

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
          <h2 className={classes.modalTitle}>{jobObject.title}</h2>
        </div>
      </DialogTitle>
      <DialogContent
        id="classic-modal-slide-description"
        className={classes.modalBody}
      >
        <div className="table-parent">
          <h4>Definition: {jobObject.Def}</h4>
          <div className="table-mid">
            <div className="table-child">
              <h5 className="jv-table-header">Median 2017 Annual Wage:</h5>
              <h5>{jobObject.MedianAnnualWage2017}</h5>
            </div>
            <div className="table-child">
              <h5 className="jv-table-header">Education Needed:</h5>
              <h5>{jobObject.TypicalEducationNeededForEntry}</h5>
            </div>
            <div className="table-child">
              <h5 className="jv-table-header">Work Experience In a Related Occupation Desired:</h5>
              <h5>{jobObject.WorkExperienceInARelatedOccupation}</h5>
            </div>
            <div className="table-child">
              <h5 className="jv-table-header">On-the-job Training:</h5>
              <h5>
                {
                  jobObject.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation
                }
              </h5>
            </div>
            <div className="table-child">
              <h5 className="jv-table-header">2016 Employment:</h5>
              <h5>{employ2016}</h5>
            </div>
            <div className="table-child">
              <h5 className="jv-table-header">2026 Employment:</h5>
              <h5>{employ2026}</h5>
            </div>
            <div className="table-child">
              <h5 className="jv-table-header">Percent change in Employment 2016 - 2026:</h5>
              <h5>{changeEmploy2026}%</h5>
            </div>
          </div>
        </div>
      </DialogContent>
    </>
  );
};
