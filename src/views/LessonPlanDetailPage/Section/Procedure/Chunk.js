import { Box } from "@material-ui/core";
import React from "react";

import Step from "./Step";

const LessonChunk = ({ chunkTitle, chunkDur, steps = [] }) => {
  return (
    <div className="LessonChunk">
      <Box boxShadow={3} className="duration">
        <p>{chunkDur} minutes</p>
        <h5>{chunkTitle}</h5>
      </Box>
      {steps.map((step, i) => (
        <Step key={i} {...step} />
      ))}
    </div>
  );
};

export default LessonChunk;
