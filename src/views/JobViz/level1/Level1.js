import React, { useState, useEffect, forwardRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Footer from "components/Footer/Footer";

// @material-ui/core components

import brick1 from "assets/img/faces/brick1.jpg";
import vertBracket from "assets/img/jobviz-vert-bracket.png";

// core components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";
import CardAvatar from "components/Card/CardAvatar";

import Close from "@material-ui/icons/Close";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

// sections for this page Added by JOB VIZ TEAM \/
import JobVizHeader from "../modules/JobVizComponents";

// import { Link } from "react-router-dom";

import JobManager from "../modules/JobManager";
//custom JobViz Styling
import "../styling/Style.css";
import { ModalTable } from "../modalTable/ModalTable";
import { compare, addIdPathway } from "../Helper";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Level1Card } from "./Level1Card";
// sections for this page Added by JOB VIZ TEAM^^^^^

import JobVizStyle from "assets/jss/material-kit-pro-react/views/JobVizStyle";
import GPcopyrightFooter from "../../../components/Footer/GPcopyrightFooter";
import SectionSubscribe from "../../LandingPage/Sections/SectionSubscribe";
import { jobData } from "../Helper";

const useStyles = makeStyles(JobVizStyle);
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export const Level1List = (props) => {
  const level = props.level0;
  const [classicModal, setClassicModal] = useState(false);
  const classes = useStyles();
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  //alphabatized jobs Array
  const alphaList = jobs.sort(compare);
  const [jobTitleList, setJobTitleList] = useState([]);
  const [jobObject, setJobObject] = useState(jobData);
  //FETCH ORIGINAL JOB DATA
  useEffect(() => {
    JobManager.getAll().then((jobs) => {
      setOriginalJobs(jobs);
    });
  }, [setOriginalJobs]);

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
    //Set job object to state
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
    getAllJobNames(jobs);
  }, [jobs]);

  useEffect(() => {
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
    //Call the Function
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
                src={
                  "https://res.cloudinary.com/galactic-polymath/image/upload/v1614120470/assets_marketing/JobViz_updated_hqn1rz.png"
                }
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

        <div className={classes.container}>
          {/* //////////////// P A R E N T ////////////////// */}
          <div className="crumbs">
            <Card className={classes.textCenter} style={{ width: "20rem" }}>
              <CardAvatar profile>
                <img src={brick1} alt="..." />
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
      <SectionSubscribe />
      <Footer
        content={
          <div>
            <GPcopyrightFooter />
          </div>
        }
      />
    </div>
  );
};
