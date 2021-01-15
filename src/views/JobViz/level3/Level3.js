/*eslint-disable*/
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
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

// sections for this page Added by JOB VIZ TEAM

import { Link } from "react-router-dom";

import JobManager from "../modules/JobManager";
import "../styling/Style.css";

import { compare, addIdPathway, makeUrlPath } from "../Helper";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Level3Card } from "./Level3Card";
// sections for this page Added by JOB VIZ TEAM

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export const Level3List = (props) => {
  const parent = props.level1;
  const level = props.level2;
  const [classicModal, setClassicModal] = React.useState(false);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  //alphabatized jobs Array
  const alphaList = jobs.sort(compare);
  const [parentName, setParentName] = useState("");
  const [jobTitleList, setJobTitleList] = useState([]);
  const [jobObject, setJobObject] = useState({
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

  //Make Parent and grandparent Names into url frienldy stirng
  const parentUrl = makeUrlPath(parentName);
  const title = makeUrlPath(jobObject.title);

  ////FETCH ORIGINAL JOB DATA
  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, []);

  /////// I need to get the jobObject
  const getJobObject = (level) => {
    jobs.map((job) => {
      if (parseInt(level) === job.id) {
        setJobObject(job);
      }
    });
  };
  ///Where I get name the parent from its Id
  ///THe name I get here I use for the navigation hyperlink crumbs
  const getJobTitles = (j) => {
    let nameStr = "";
    jobs.map((job) => {
      if (j === job.id) {
        nameStr = job.ttl;
      }
    });
    return nameStr;
  };

  ///Function that takes original data from Jobs and adds the Key:Value pair for
  ///Children, Parent, Grandparent
  useEffect(() => {
    setJobs(addIdPathway(originalJobs));
  }, [originalJobs]);

  useEffect(() => {
    // set get parent name from Id and then set name string to state
    setParentName(getJobTitles(parent));

    ///////Set jobObject to state as long as
    ////the argument jobs has ben set
    getJobObject(level);

    //get all job Title values for AutoSearch bar
    const getAllJobNames = (jobs) => {
      let jobTList = [];
      jobs.forEach((job) => {
        if (!jobTList.includes(job.title)) {
          jobTList.push(job.title);
        }
      });
      setJobTitleList(jobTList);
    };
    ////Call the Function
    getAllJobNames(jobs);
  }, [jobs, level, parent]);

  useEffect(() => {
    // console.log(jobs);
    //get all job Titles for AutoSearch
    const getAllJobNames = (jobs) => {
      let jobTList = [];
      jobs.forEach((job) => {
        if (!jobTList.includes(job.title)) {
          jobTList.push(job.title);
        }
      });
      setJobTitleList(jobTList);
    };
    ////Call the Function
    getAllJobNames(jobs);
  }, [jobs]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />

      <Parallax image={require("assets/img/bg12.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>JOB VIZ </h1>
              <h4>
                Explore career possibilites, see how fields relate and overlap,
                and get a glimpse at industry education and financial data.
              </h4>
              <h4>What do you want to be?</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.main}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              {/* //////////////// S E A R C H  C O M P O N E N T///////////////// */}
              <LrAutoSearchV2
                jobs={jobs}
                jobTitleList={jobTitleList}
                {...props}
              />
            </GridItem>
          </GridContainer>
        </div>

        <div className={classes.container}>
          {/* ///////    C  R  U  M  S      /////////////// */}

          <div className="crumbs">
            <small>
              <Link to={`/jobviz`}>Job Categories</Link>
            </small>
          </div>
          <div className="crumbs">
            <small>
              <Link to={`/jobviz/1/${parent}/${parentUrl}`}>{parentName}</Link>
            </small>
          </div>

          {/* //////////////// P A R E N T ////////////////// */}
          <div className="crumbs">
            <Card className={classes.textCenter} style={{ width: "20rem" }}>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={marc} alt="..." />
                </a>
              </CardAvatar>
              <CardBody>
                <h4 className={classes.cardTitle}>{jobObject.title}</h4>

                <Button
                  onClick={() => {
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
                      {jobObject.id}: {jobObject.title}
                    </h4>
                    <h6>Definition: {jobObject.Def}</h6>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <div className="table-parent">
                      <div className="table-mid">
                        <div className="table-child">
                          <h6>Median 2017 Annual Wage:</h6>
                          <small>{jobObject.MedianAnnualWage2017}</small>
                        </div>
                        <div className="table-child">
                          <h6>Education Needed:</h6>
                          <small>
                            {jobObject.TypicalEducationNeededForEntry}
                          </small>
                        </div>
                        <div className="table-child">
                          <h6>
                            Work Experience In a Related Occupation Desired:
                          </h6>
                          <small>
                            {jobObject.WorkExperienceInARelatedOccupation}
                          </small>
                        </div>
                        <div className="table-child">
                          <h6>On-the-job Training:</h6>
                          <small>
                            {
                              jobObject.TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation
                            }
                          </small>
                        </div>
                        <div className="table-child">
                          <h6>2016 Employement:</h6>
                          <small>{jobObject.Employment2016}</small>
                        </div>
                        <div className="table-child">
                          <h6>2026 Employement:</h6>
                          <small>{jobObject.Employment2026}</small>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </CardBody>
            </Card>
          </div>

          {/* Where children are mapped out to individual card component */}
          <div className="">
            <div className="card-child-container">
              {alphaList.map((job, k) => {
                for (let j = 0; j <= jobObject.children.length; j++) {
                  if (jobObject.children[j] === job.id) {
                    return (
                      <Level3Card
                        key={job.id}
                        parent={parent}
                        titleParent={title}
                        level={level}
                        job={job}
                        {...props}
                      />
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-pricing"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
};
