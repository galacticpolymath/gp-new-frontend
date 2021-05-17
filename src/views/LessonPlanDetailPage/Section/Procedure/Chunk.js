import { Box } from "@material-ui/core";
import React from "react";

import Step from "./Step";

const orderSteps = (steps) => {
  if (!steps) return [];
  return Object.values(steps[0]).sort(
    ({ Step: Step1 }, { Step: Step2 }) => Step1 - Step2
  );
};

const LessonChunk = ({ chunkTitle, chunkDur, steps = [] }) => {
  return (
    <div className="LessonChunk">
      <Box boxShadow={3} className="duration">
        <p>{chunkDur} minutes</p>
        <h5>{chunkTitle}</h5>
      </Box>
      {orderSteps(steps).map((step, i) => (
        <Step key={i} {...step} />
      ))}
    </div>
  );
};

export default LessonChunk;
