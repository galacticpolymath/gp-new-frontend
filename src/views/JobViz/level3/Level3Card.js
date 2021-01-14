import React, { useState, useEffect } from "react";

import { makeUrlPath } from "../Helper";

export const Level3Card = (props) => {
  const job = props.job;
  const grandparent = job.grandparent[0];
  const greatGrandparent = job.greatGrandparent[0];
  const parent = job.parent[0];
  const jobId = job.id;
  const title = makeUrlPath(job.ttl);
  const [hasChildren, setHasChildren] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const checkJobHasChildren = () => {
    if (job.children.length === 0) {
      setHasChildren(false);
    } else {
      setHasChildren(true);
    }
  };

  useEffect(() => {
    checkJobHasChildren();
  }, [props.location.pathway]);

  return (
    <>
      {hasChildren ? (
        <div
          className="card-child"
          onClick={() => {
            props.history.push(
              `/jobviz/${greatGrandparent}/${grandparent}/${parent}/${jobId}/${title}`
            );
          }}
        >
          <p id={job.id} className="listed-categories">
            {job.title}
          </p>
        </div>
      ) : (
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
                `/jobviz/${greatGrandparent}/${grandparent}/${parent}/${jobId}/${title}/endpoint`
              );
            }}
          >
            <div>🍁</div>
            <p id={job.id} className="listed-categories">
              {job.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
