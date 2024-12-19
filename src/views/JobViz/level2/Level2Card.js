import React, { useState, useEffect, forwardRef } from "react";
import { jobData, makeUrlPath } from "../Helper";
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
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import { ModalTable } from "../modalTable/ModalTable";

import { cardTitle } from "assets/jss/material-kit-pro-react.js";
import Close from "@material-ui/icons/Close";

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

  const [categoryObject, setCategoryObject] = useState(jobData);

  const [copied, setCopied] = useState(false);
  //If URL path has word enpoint the modal for that endpoint will now be open on page load
  const checkIfUrlStringHasEndpoint = () => {
    let e = props.location.pathname.includes("endpoint");

    let j = props.location.pathname.includes(title);

    if (e === true && j === true) {
      setClassicModal(true);
    }
  };

  useEffect(() => {
    checkIfUrlStringHasEndpoint(props.pathname);
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

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    console.log(el.value);
    document.body.appendChild(el);
    console.log(document.body.appendChild(el));
    el.select();
    console.log(el.select());
    el.focus();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

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
              color="info"
            >
              <AccountTreeIcon />
              More Jobs
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
              onClose={() => {
                props.history.push(
                  `/jobviz/${grandparent}/${parent}/${titleParent}`
                );
                setClassicModal(false);
              }}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
            >
              <ModalTable jobObject={categoryObject} />
              <DialogActions className={classes.modalFooter}>
                <Button onClick={copy}>
                  {!copied ? "Copy link" : "Link Copied!"}
                </Button>
                <Button
                  onClick={() => {
                    props.history.push(
                      `/jobviz/${grandparent}/${parent}/${titleParent}`
                    );
                    setClassicModal(false);
                    setCopied(false);
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
      )}
    </>
  );
};
