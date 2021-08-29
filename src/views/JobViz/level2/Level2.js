/*eslint-disable*/
import React, { useState, useEffect, forwardRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import { ModalTable } from "../modalTable/ModalTable";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardAvatar from "components/Card/CardAvatar.js";
import brick1 from "assets/img/faces/brick1.jpg";
import branch2 from "assets/img/faces/branch2.jpg";
import vertBracket from "assets/img/jobviz-vert-bracket.png";
import vertStem from "assets/img/jobviz-vert-stem.png";

import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

// sections for this page Added by JOB VIZ TEAM
import { Link } from "react-router-dom";

import JobManager from "../modules/JobManager";
//Custom Jobviz Styling
import "../styling/Style.css";
import { makeUrlPath, compare, addIdPathway, jobData } from "../Helper";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Level2Card } from "./Level2Card";
// sections for this page Added by JOB VIZ TEAM

import JobVizHeader from "../modules/JobVizComponents";
import JobVizStyle from "assets/jss/material-kit-pro-react/views/JobVizStyle.js";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles(JobVizStyle);

export const Level2List = (props) => {
  const level = props.level1;
  const [classicModal, setClassicModal] = useState(false);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  //alphabatized jobs Array
  const alphaList = jobs.sort(compare);
  const [jobTitleList, setJobTitleList] = useState([]);
  const [jobObject, setJobObject] = useState(jobData);

  //Make Parent and grandparent Names into url frienldy stirng
  const title = makeUrlPath(jobObject.title);

  //FETCH ORIGINAL JOB DATA
  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, []);

  const getJobObject = (level) => {
    jobs.map((job) => {
      if (parseInt(level) === job.id) {
        setJobObject(job);
      }
    });
  };

  useEffect(() => {
    setJobs(addIdPathway(originalJobs));
  }, [originalJobs]);

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
  useEffect(() => {
    //Set job object to state
    getJobObject(level);

    getAllJobNames(jobs);
  }, [jobs, level]);

  //THis causes the page to jump to top and it's super not helpful with all the navigation buttons
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
      />

      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer style={{ placeItems: "center" }}>
            <GridItem
              xs={12}
              sm={12}
              md={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
            >
              <JobVizHeader />
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
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
                width="120%"
                style={{ paddingTop: "2rem" }}
                alt={"horizontal lines with bubbles, background pattern"}
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

        {/* //////////////// C R U M B S////////////////// */}
        <div className={classes.container}>
          <div id="crumb-container">
            <div className="crumb-img-container">
              <img
                style={{ height: "40px", width: "40px" }}
                src={brick1}
                alt="brick nodes"
              />

              <h6>
                <Link to={`/jobviz`}>Job Categories</Link>
              </h6>
            </div>
            <div className="crumb-img-container">
              <img className="vert-stem-img" src={vertStem} alt="..." />
            </div>
          </div>
          {/* //////////////// P A R E N T ////////////////// */}
          <div className="crumbs">
            <Card className={classes.textCenter} style={{ width: "20rem" }}>
              <CardAvatar profile>
                {/*<a href="" onClick={(e) => e.preventDefault()}>*/}
                <img src={branch2} alt="..." />
                {/*</a>*/}
              </CardAvatar>
              <CardBody>
                <h4 className={classes.cardTitle}>{jobObject.title}</h4>

                <Button
                  onClick={() => {
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
                  maxWidth={"lg"}
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
                      <Close className={classes.modalClose} />
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
              {alphaList.map((job) => {
                for (let j = 0; j <= jobObject.children.length; j++) {
                  if (jobObject.children[j] === job.id) {
                    return (
                      <Level2Card
                        titleParent={title}
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
          <div className={classes.attribution}>
            <h5>
              <b>Data Source: </b>
              <a
                href={
                  "https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                US Bureau of Labor Statistics
              </a>
            </h5>
          </div>
        </div>
      </div>

      <hr />
      <Footer
        content={
          <div>
            {/*<div className={classes.left}>*/}
            {/*  <List className={classes.list}>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Creative Tim*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        About us*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a href="//blog.creative-tim.com/" className={classes.block}>*/}
            {/*        Blog*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/license?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Licenses*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*  </List>*/}
            {/*</div>*/}
          </div>
        }
      />
    </div>
  );
};
