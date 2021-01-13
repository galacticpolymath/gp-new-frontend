import React, { useState, useEffect } from "react";
import "../styling/Style.css";
import { makeUrlPath } from "../Helper";

export const LrAutoSearchV2 = (props) => {
  const jobs = props.jobs;
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const jobTitleList = props.jobTitleList;
  const [selectedJobObj, setSelectedJobObj] = useState({
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
    children: [],
    parent: [],
    grandparent: [],
    greatGrandparent: [],
    greatGreatGrandparent: [],
    ttl: "",
    Level0: "",
    Level4: "",
    Level3: "",
    Level2: "",
    Level1: "",
    pathString: "",
    Def: "",
  });

  ////Here is where you filter through array of listed job titles
  const onChange = (e) => {
    setUserInput(e.currentTarget.value);
    setShowOptions(true);
    setFilteredOptions(
      jobTitleList.filter(
        (optionName) =>
          optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    );
  };

  // console.log(filteredOptions.length, "Filtered Options")

  const onClick = (e) => {
    setSelectedJob(e.currentTarget.innerText);
    setShowOptions(false);
  };

  useEffect(() => {
    const getSelectedJobObject = () => {
      jobs.forEach(function (job) {
        if (job.title === selectedJob) {
          setSelectedJobObj(job);
        }
      });
    };
    getSelectedJobObject();
  }, [selectedJob, jobs]);

  useEffect(() => {
    const goToJobUrl = (selectedJobObj) => {
      // console.log(selectedJobObj);
      const children = selectedJobObj.children;
      const title = selectedJobObj.title;
      const id = selectedJobObj.id;
      const parent = selectedJobObj.parent;
      const grandparent = selectedJobObj.grandparent;
      const greatGrandparent = selectedJobObj.greatGrandparent;
      const greatGreatGrandparent = selectedJobObj.greatGreatGrandparent;

      if (title === "" && parent.length === 0) {
        return;
      } else if (title !== "" && parent.length === 0) {
        props.history.push(`/jobviz/1`);
      } else if (
        title !== "" &&
        grandparent.length === 0 &&
        children.length !== 0
      ) {
        props.history.push(`/jobviz/${parent}/${id}`);
      } else if (
        title !== "" &&
        grandparent.length === 0 &&
        children.length === 0
      ) {
        props.history.push(`/jobviz/${parent}/${id}/endpoint`);
      } else if (
        title !== "" &&
        greatGrandparent.length === 0 &&
        children.length !== 0
      ) {
        props.history.push(`/jobviz/${grandparent}/${parent}/${id}`);
      } else if (
        title !== "" &&
        greatGrandparent.length === 0 &&
        children.length === 0
      ) {
        props.history.push(`/jobviz/${grandparent}/${parent}/${id}/endpoint`);
      } else if (
        title !== "" &&
        greatGreatGrandparent.length === 0 &&
        children.length !== 0
      ) {
        props.history.push(
          `/jobviz/${greatGrandparent}/${grandparent}/${parent}/${id}`
        );
      } else if (
        title !== "" &&
        greatGreatGrandparent.length === 0 &&
        children.length === 0
      ) {
        props.history.push(
          `/jobviz/${greatGrandparent}/${grandparent}/${parent}/${id}/endpoint`
        );
      } else if (
        title !== "" &&
        greatGreatGrandparent.length !== 0 &&
        children.length === 0
      ) {
        props.history.push(
          `/jobviz/${greatGreatGrandparent}/${greatGrandparent}/${grandparent}/${parent}/${id}/endpoint`
        );
      } else {
        return;
      }
    };

    goToJobUrl(selectedJobObj);
  }, [selectedJobObj]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setUserInput(filteredOptions[activeOption]);
      setShowOptions(false);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        // console.log(activeOption, "activeOption");
        return;
      }
      setActiveOption({ activeOption: activeOption + 1 });
    }
  };

  return (
    <React.Fragment>
      <div className="jobviz-parent">
        <div className="searchBoxParent">
          <div id="search_border" className="search">
            <input
              id="search_bar"
              type="text"
              placeholder="Search Jobs"
              className="search-box"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
            />
            <div className="searchIcon">
              <input type="submit" value="" className="search-icon" />
            </div>
          </div>
          <div id="float-options">
            {showOptions &&
              userInput &&
              (filteredOptions.length > 0 ? (
                <ul className="options">
                  {filteredOptions.map((optionName, index) => {
                    let className;
                    if (index === activeOption) {
                      className = "option-active";
                    }
                    return (
                      <li
                        className="{className}, option"
                        key={optionName}
                        onClick={onClick}
                      >
                        {optionName}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="no-options">
                  <em>No Option!</em>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
