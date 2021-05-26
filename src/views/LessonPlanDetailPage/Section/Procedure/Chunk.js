import { Box } from "@material-ui/core";
import React, {useState, useEffect} from "react";

import Step from "./Step";
import Graph from '../../../../components/ChunkGraph/Graph'



const LessonChunk = ({ chunkTitle, steps = [], chunkNum, durList }) => {
  
  return (
    <div className="LessonChunk">
      <Box boxShadow={3} className="duration">
        <Graph durList={durList} chunkNum={chunkNum} chunkTitle={chunkTitle} />
        
      </Box>
      {steps.map((step, i) => (
        <Step key={i} {...step} />
      ))}
    </div>
  );
};

export default LessonChunk;
