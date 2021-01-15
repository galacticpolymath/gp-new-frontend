import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";
import JobManager from "../modules/JobManager";
import { addIdPathway } from "../Helper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";
import marc from "assets/img/faces/marc.jpg";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";

import { cardTitle } from "assets/jss/material-kit-pro-react.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const style = {
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
};

const useStyles = makeStyles(style);

export const Level2Card = (props) => {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const titleParent = props.titleParent;
  const job = props.job;
  const jobId = job.id;

  const grandparent = job.grandparent[0];
  const parent = job.parent[0];

  const title = makeUrlPath(job.title);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [hasChildren, setHasChildren] = useState(false);

  const [categoryObject, setCategoryObject] = useState({
    id: 0,
    title: "",
    Hierarchy: "",
    OccupationType: "",
    Employment2016: 0,
    Employment2026: 0,
    ChgEmploy2016to26Num: 0,
    ChgEmploy2016to26Perc: 0,
    PercentSelfEmployed2016: 0,
    OccupationalOpenings2016to2026AnnualAverage: 0,
    MedianAnnualWage2017: "",
    TypicalEducationNeededForEntr: "",
    WorkExperienceInARelatedOccupation: "",
    TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation: "",
    ttl: "",
    Level0: "",
    Level4: "",
    Level3: "",
    Level2: "",
    Level1: "",
    pathString: "",
    Def: "",
    children: [],
    parent: [],
  });

  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, []);

  useEffect(() => {
    setJobs(addIdPathway(originalJobs));
  }, [originalJobs]);

  /////// I need to get the Endpoint job object
  const getCategoryObject = (jobId) => {
    jobs.map((job) => {
      if (jobId === job.id) {
        setCategoryObject(job);
      }
    });
  };

  const checkJobHasChildren = () => {
    if (job.children.length === 0) {
      setHasChildren(false);
      getCategoryObject(jobId);
    } else {
      setHasChildren(true);
    }
  };

  useEffect(() => {
    checkJobHasChildren();
  }, [props.location.pathway, jobs]);

  return (
    <>
      {hasChildren ? (
        <Card className={classes.textCenter} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>{job.title}</h4>

            <Button
              onClick={() => {
                props.history.push(
                  `/jobviz/${grandparent}/${parent}/${jobId}/${title}`
                );
              }}
              color="primary"
            >
              {" "}
              Select
            </Button>
          </CardBody>
        </Card>
      ) : (
        <Card className={classes.textCenter} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>{categoryObject.title}</h4>

            <Button
              onClick={() => {
                props.history.push(
                  `/jobviz/${grandparent}/${parent}/${jobId}/${title}/endpoint`
                );
                setClassicModal(true);
              }}
            >
              <LibraryBooks />
              Details
            </Button>

            <Dialog
              classes={{
                root: classes.modalRoot,
                paper: classes.modal,
              }}
              open={classicModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
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
                <h4 className={classes.modalTitle}>
                  {categoryObject.id}: {categoryObject.title}
                </h4>
                <h6>Definition: {categoryObject.Def}</h6>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
              >
                <div className="table-parent">
                  {/* <div className="table-top">
                            <div className="table-title">
                              <h4>Job id: {categoryObject.id}</h4>
                              <h4>Job: {categoryObject.title} </h4>
                              <h6>Definition: {categoryObject.Def}</h6>
                              <h6>Definition: {categoryObject.Def}</h6>
                            </div>
                          </div> */}
                  <div className="table-mid">
                    <div className="table-child">
                      <h6>Median 2017 Annual Wage:</h6>
                      <small>{categoryObject.MedianAnnualWage2017}</small>
                    </div>
                    <div className="table-child">
                      <h6>Education Needed:</h6>
                      <small>
                        {categoryObject.TypicalEducationNeededForEntry}
                      </small>
                    </div>
                    <div className="table-child">
                      <h6>Work Experience In a Related Occupation Desired:</h6>
                      <small>
                        {categoryObject.WorkExperienceInARelatedOccupation}
                      </small>
                    </div>
                    <div className="table-child">
                      <h6>On-the-job Training:</h6>
                      <small>
                        {
                          categoryObject.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation
                        }
                      </small>
                    </div>
                    <div className="table-child">
                      <h6>2016 Employement:</h6>
                      <small>{categoryObject.Employment2016}</small>
                    </div>
                    <div className="table-child">
                      <h6>2026 Employement:</h6>
                      <small>{categoryObject.Employment2026}</small>
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
                <Button
                  onClick={() => {
                    props.history.push(
                      `/jobviz/${grandparent}/${parent}/${titleParent}`
                    );
                    setClassicModal(false);
                  }}
                  color="danger"
                  simple
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </CardBody>
        </Card>
      )}
    </>
  );
};
