import React, { useState, useEffect, forwardRef } from "react";
import { jobData, makeUrlPath } from "../Helper";
import JobManager from "../modules/JobManager";
import { addIdPathway } from "../Helper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";

import { ModalTable } from "../modalTable/ModalTable";

import { cardTitle } from "assets/jss/material-kit-pro-react.js";

const Transition = forwardRef(function Transition(props, ref) {
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

  const [categoryObject, setCategoryObject] = useState(jobData);

  //If URL path has word enpoint the modal for that endpoint will now be open on page load
  const checkIfUrlStringHasEndpoint = () => {
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

  // I need to get the Endpoint job object
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
            onClose={() => {
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
                <Close className={classes.modalClose} />
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </CardBody>
      </Card>
    </>
  );
};
