import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";
import JobManager from "../modules/JobManager";
import { addIdPathway } from "../Helper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import AccountTreeIcon from "@material-ui/icons/AccountTree";
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

import { ModalTable } from "../modalTable/ModalTable";

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

export const Level4Card = (props) => {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const titleParent = props.titleParent;
  const job = props.job;
  const grandparent = job.grandparent[0];
  const greatGrandparent = job.greatGrandparent[0];
  const greatGreatGrandparent = job.greatGreatGrandparent[0];
  const parent = job.parent[0];
  const jobId = job.id;
  const title = makeUrlPath(job.title);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

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

  //If URL path has word enpoint the modal for that endpoint will now be open on page load
  const checkIfUrlStringHasEndpoint = () => {
    // console.log(typeof props.location.pathname);
    let e = props.location.pathname.includes("endpoint");

    let j = props.location.pathname.includes(title);

    if (e === true && j === true) {
      setClassicModal(true);
    }
  };

  useEffect(() => {
    checkIfUrlStringHasEndpoint(props.location);
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, [props.location]);

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

  useEffect(() => {
    getCategoryObject(jobId);
  }, [props.location.pathway, jobs]);

  return (
    <>
      <Card className={classes.textCenter} style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>{categoryObject.title}</h4>

          <Button
            onClick={() => {
              props.history.push(
                `/jobviz/${greatGreatGrandparent}/${greatGrandparent}/${grandparent}/${parent}/${jobId}/${title}/endpoint`
              );
              setClassicModal(true);
            }}
            color={"primary"}
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
            onClick={() => {
              props.history.push(
                `/jobviz/${greatGreatGrandparent}/${greatGrandparent}/${grandparent}/${parent}/${titleParent}`
              );
              setClassicModal(false);
            }}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <ModalTable jobObject={categoryObject} />
            <DialogActions className={classes.modalFooter}>
              <Button
                onClick={() => {
                  props.history.push(
                    `/jobviz/${greatGreatGrandparent}/${greatGrandparent}/${grandparent}/${parent}/${titleParent}`
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
    </>
  );
};
