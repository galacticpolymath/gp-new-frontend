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
// sections for this page Added by JOB VIZ TEAM
import { Link } from "react-router-dom";

import JobManager from "../modules/JobManager";
import "../styling/Style.css";
import { Title } from "../title/Title";
import { Table } from "../table/Table";
import { compare, addIdPathway, makeUrlPath } from "../Helper";
import { LrAutoSearchV2 } from "../search/LRautoSearchV2";
import { Level4Card } from "./Level4Card";
// sections for this page Added by JOB VIZ TEAM

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export const Level4List = (props) => {
  const grandparent = props.level1;
  const parent = props.level2;
  const level = props.level3;
  const [originalJobs, setOriginalJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  //alphabatized jobs Array
  const alphaList = jobs.sort(compare);
  const [parentName, setParentName] = useState("");
  const [grandparentName, setGrandparentName] = useState("");
  const [jobTitleList, setJobTitleList] = useState([]);

  ///Where I set the level job object to state
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
  const grandparentUrl = makeUrlPath(grandparentName);

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

    // set get grandparent name from Id and then set name string to state
    setGrandparentName(getJobTitles(grandparent));

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
  }, [jobs, level, parent, grandparent]);

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

      <Parallax image="" filter="dark" small>
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
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div>
            <Title />
          </div>
          <h6>Level 4 List</h6>
          <div>
            <LrAutoSearchV2
              jobs={jobs}
              jobTitleList={jobTitleList}
              {...props}
            />
          </div>
          <div className="">
            {/* ///////      N  A  V     C  R  U  M  S      /////////////// */}
            <div className="crumbs">
              <small>
                <Link to={"/jobviz"}>Jobs</Link>
              </small>
            </div>
            <div className="crumbs">
              <small>
                <Link to={`/jobviz/1`}>Job Categories </Link>
              </small>
            </div>
            <div className="crumbs">
              <small>
                <Link to={`/jobviz/1/${grandparent}/${grandparentUrl}`}>
                  {grandparentName}{" "}
                </Link>
              </small>
            </div>
            <div className="crumbs">
              <small>
                <Link to={`/jobviz/1/${grandparent}/${parent}/${parentUrl}`}>
                  {parentName}
                </Link>
              </small>
            </div>
          </div>

          <div className="">
            {/* //////////////// P A R E N T ////////////////// */}
          </div>
          <div className="">
            <div className="card-parent-container">
              <div className="card-parent">
                <p>{jobObject.ttl}</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="card-child-container">
              {alphaList.map((job, k) => {
                for (let j = 0; j <= jobObject.children.length; j++) {
                  if (jobObject.children[j] === job.id) {
                    return (
                      <div key={k}>
                        <Level4Card key={job.id} job={job} {...props} />
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
          <div>
            <Table jobObject={jobObject} {...props} />
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
