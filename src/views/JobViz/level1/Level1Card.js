import React from "react";

export const Level1Card = (props) => {
  const job = props.job;
  const category = props.category;
  const parent = job.parent[0];
  const jobId = job.id;
  console.log(category);

  return (
    <>
      <div
        className="card-child"
        onClick={() => {
          props.history.push(`/jobviz/${parent}/${jobId}`);
        }}
      >
        <p id={job.id} className="listed-categories">
          {job.title}
        </p>
      </div>
    </>
  );
};
