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

// @material-ui/core components

import brick1 from "assets/img/faces/brick1.jpg";
import vertBracket from "assets/img/jobviz-vert-bracket.png";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";
// import marc from "assets/img/faces/marc.jpg";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
// import Close from "@material-ui/icons/Close";
import { cardTitle } from "assets/jss/material-kit-pro-react.js";

// sections for this page Added by JOB VIZ TEAM \/
import JobVizHeader from "../modules/JobVizComponents";

import { Link } from "react-router-dom";

import JobManager from "../modules/JobManager";
import "../styling/Style.css";
import { ModalTable } from "../modalTable/ModalTable";
import { compare, addIdPathway } from "../Helper";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Level1Card } from "./Level1Card";
// sections for this page Added by JOB VIZ TEAM^^^^^

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);
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

export const Level1List = (props) => {
  const level = props.level0;
  const [classicModal, setClassicModal] = React.useState(false);
  const classes = useStyles();
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  //alphabatized jobs Array
  const alphaList = jobs.sort(compare);
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
  ////FETCH ORIGINAL JOB DATA
  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, []);

  /////// I need to get the jobObject
  const getJobObject = (jobs) => {
    jobs.map((job) => {
      if (parseInt(level) === job.id) {
        setJobObject(job);
      }
    });
  };

  useEffect(() => {
    setJobs(addIdPathway(originalJobs));
  }, [originalJobs]);

  useEffect(() => {
    ///Set job object to state
    getJobObject(jobs);

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

  //THis causes the page to jump to top and it's super not helpful with all the navigation buttons
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });

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

      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              md={6}
              sm={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
            >
              {/*<>*/}
              {/*<h1 className={classes.title}>JOBVIZ </h1>*/}
              {/*<h4>*/}
              {/*  For middle and high school students to explore career possibilities. See how fields relate and overlap,*/}
              {/*  and get a glimpse at industry education and financial data.*/}
              {/*</h4>*/}
              {/*<h4>What do you want to be?</h4>*/}
              {/*  </>*/}
              <JobVizHeader />
            </GridItem>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(
                classes.hideLogo,
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
            >
              <img
                src={require("assets/img/hero-images/JobViz_Bubble.svg")}
                height="auto"
                width="150%"
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.main}>
          <GridContainer>
            <GridItem>
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
          {/* //////////////// P A R E N T ////////////////// */}
          <div className="crumbs">
            <Card className={classes.textCenter} style={{ width: "20rem" }}>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={brick1} alt="..." />
                </a>
              </CardAvatar>
              <CardBody>
                <h4 className={classes.cardTitle}>Job Categories</h4>

                <Button onClick={() => setClassicModal(true)} color="primary">
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
                  <ModalTable jobObject={jobObject} />
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
          <div className={classes.container}>
            <img className="vert-bracket-img" src={vertBracket} alt="..." />

            <div className="card-child-container">
              {alphaList.map((job, k) => {
                for (let j = 0; j <= jobObject.children.length; j++) {
                  if (jobObject.children[j] === job.id) {
                    return (
                      <Level1Card
                        jobs={jobs}
                        key={job.id}
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
