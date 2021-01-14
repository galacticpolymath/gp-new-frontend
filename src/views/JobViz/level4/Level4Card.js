import React, { useState } from "react";
import { makeUrlPath } from "../Helper";

export const Level4Card = (props) => {
  const job = props.job;
  const grandparent = job.grandparent[0];
  const greatGrandparent = job.greatGrandparent[0];
  const greatGreatGrandparent = job.greatGreatGrandparent[0];
  const parent = job.parent[0];
  const jobId = job.id;

  const title = makeUrlPath(job.ttl);

  const [highlight, setHighlight] = useState(false);

  return (
    <>
      <div className={highlight ? "endpointCard" : ""}>
        <div
          className="card-child"
          onClick={() => {
            if (!highlight) {
              setHighlight(true);
            } else {
              setHighlight(false);
            }
            props.history.push(
              `/jobviz/${greatGreatGrandparent}/${greatGrandparent}/${grandparent}/${parent}/${jobId}/${title}/endpoint`
            );
          }}
        >
          <div>🍁</div>
          <p id={job.id} className="listed-categories">
            {job.title}
          </p>
        </div>
      </div>
    </>
  );
};
