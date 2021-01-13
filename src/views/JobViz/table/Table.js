import React from "react";

import "../styling/Style.css";

export const Table = (props) => {
  let jobObj = props.jobObject;

  if (jobObj === undefined) {
    return (
      <div className="table-parent">
        <div className="table-top">
          <div className="table-title">
            <h4>Job id: </h4>
            <h4>Job: </h4>

            <h6>Definition:</h6>
          </div>
        </div>
        <div className="table-mid">
          <div className="table-child">
            <h6>Median 2017 Annual Wage:</h6>
            <small></small>
          </div>
          <div className="table-child">
            <h6>Education Needed:</h6>
            <small></small>
          </div>
          <div className="table-child">
            <h6>Work Experience In a Related Occupation Desired:</h6>
            <small></small>
          </div>
          <div className="table-child">
            <h6>On-the-job Training:</h6>
            <small></small>
          </div>
          <div className="table-child">
            <h6>2016 Employement:</h6>
            <small></small>
          </div>
          <div className="table-child">
            <h6>2026 Employement:</h6>
            <small></small>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="table-parent">
          <div className="table-top">
            <div className="table-title">
              <h4>Job id: {jobObj.id}</h4>
              <h4>Job: {jobObj.title} </h4>

              <h6>Definition: {jobObj.Def}</h6>
            </div>
          </div>
          <div className="table-mid">
            <div className="table-child">
              <h6>Median 2017 Annual Wage:</h6>
              <small>{jobObj.MedianAnnualWage2017}</small>
            </div>
            <div className="table-child">
              <h6>Education Needed:</h6>
              <small>{jobObj.TypicalEducationNeededForEntry}</small>
            </div>
            <div className="table-child">
              <h6>Work Experience In a Related Occupation Desired:</h6>
              <small>{jobObj.WorkExperienceInARelatedOccupation}</small>
            </div>
            <div className="table-child">
              <h6>On-the-job Training:</h6>
              <small>
                {
                  jobObj.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation
                }
              </small>
            </div>
            <div className="table-child">
              <h6>2016 Employement:</h6>
              <small>{jobObj.Employment2016}</small>
            </div>
            <div className="table-child">
              <h6>2026 Employement:</h6>
              <small>{jobObj.Employment2026}</small>
            </div>
          </div>
        </div>
      </>
    );
  }
};
