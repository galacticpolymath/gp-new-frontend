import React from "react";
import { makeUrlPath } from "../Helper";

export const Level1Card = (props) => {
  const job = props.job;
  const parent = job.parent[0];
  const jobId = job.id;
  const title = makeUrlPath(job.title);

  return (
    <>
      <div
        className="card-child"
        onClick={() => {
          props.history.push(`/jobviz/${parent}/${jobId}/${title}`);
        }}
      >
        <p id={job.id} className="listed-categories">
          {job.title}
        </p>
      </div>
    </>
  );
};
