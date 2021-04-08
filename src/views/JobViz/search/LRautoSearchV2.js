import React, { useState, useEffect } from "react";
import { makeUrlPath } from "../Helper";
// nodejs library that concatenates classes
import "../styling/Style.css";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

///Would like to get this working ????
// import CustomInput from "components/CustomInput/CustomInput.js";

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

  //Here is where you filter through array of listed job titles
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

  const goToJobUrl = (selectedJobObj) => {
    const children = selectedJobObj.children;
    const title = makeUrlPath(selectedJobObj.title);
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
      props.history.push(`/jobviz/${parent}/${id}/${title}`);
    } else if (
      title !== "" &&
      grandparent.length === 0 &&
      children.length === 0
    ) {
      props.history.push(`/jobviz/${parent}/${id}/${title}/endpoint`);
    } else if (
      title !== "" &&
      greatGrandparent.length === 0 &&
      children.length !== 0
    ) {
      props.history.push(`/jobviz/${grandparent}/${parent}/${id}/${title}`);
    } else if (
      title !== "" &&
      greatGrandparent.length === 0 &&
      children.length === 0
    ) {
      props.history.push(
        `/jobviz/${grandparent}/${parent}/${id}/${title}/endpoint`
      );
    } else if (
      title !== "" &&
      greatGreatGrandparent.length === 0 &&
      children.length !== 0
    ) {
      props.history.push(
        `/jobviz/${greatGrandparent}/${grandparent}/${parent}/${id}/${title}`
      );
    } else if (
      title !== "" &&
      greatGreatGrandparent.length === 0 &&
      children.length === 0
    ) {
      props.history.push(
        `/jobviz/${greatGrandparent}/${grandparent}/${parent}/${id}/${title}/endpoint`
      );
    } else if (
      title !== "" &&
      greatGreatGrandparent.length !== 0 &&
      children.length === 0
    ) {
      props.history.push(
        `/jobviz/${greatGreatGrandparent}/${greatGrandparent}/${grandparent}/${parent}/${id}/${title}/endpoint`
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    goToJobUrl(selectedJobObj);
  }, [goToJobUrl, selectedJobObj]);

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
        return;
      }
      setActiveOption({ activeOption: activeOption + 1 });
    }
  };

  return (
    <React.Fragment>
      {/* ///Cant figure out how this works!!!! */}
      {/* <CustomInput
          labelText="Search Jobs"
          id="float"
          // value={userInput}
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            value: userInput,
            onChange: { onChange() },
            onKeyDown: { onKeyDown() },
            type: "text",
          }}
        /> */}
      <div id="searchbar-container">
        <input
          id="search_bar"
          type="text"
          placeholder="Search Jobs"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />

        <div className="searchIcon">
          <input type="submit" value="" className="search-icon" />
        </div>
      </div>

      <div id="">
        {showOptions &&
          userInput &&
          (filteredOptions.length > 0 ? (
            <Card>
              <CardBody>
                {filteredOptions.map((optionName) => {
                  return (
                    <div
                      className="{className}, option"
                      key={optionName}
                      onClick={onClick}
                    >
                      {optionName}
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          ) : (
            <div className="no-options">
              <em>No Option!</em>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};
