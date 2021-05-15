import React from "react";

import Step from "./Step";

const orderSteps = (steps) => {
  if (!steps) return [];
  return Object.values(steps[0]).sort(
    ({ Step: Step1 }, { Step: Step2 }) => Step1 - Step2
  );
};

const LessonChunk = ({ chunkTitle, steps = [] }) => {
  return (
    <div className="LessonChunk">
      <div>part duration graphic placeholder</div>
      <h5>{chunkTitle}</h5>
      {orderSteps(steps).map((step, i) => (
        <Step key={i} {...step} />
      ))}
    </div>
  );
};

export default LessonChunk;
