import React, { useState, useEffect } from "react";

export const Level2Card = (props) => {
  const job = props.job;
  const category = props.category;
  const grandparent = job.grandparent[0];
  const parent = job.parent[0];
  const jobId = job.id;
  console.log(category);

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
            props.history.push(`/jobviz/${grandparent}/${parent}/${jobId}`);
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
                `/jobviz/${grandparent}/${parent}/${jobId}/endpoint`
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
