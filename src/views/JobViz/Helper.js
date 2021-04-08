export function makeStringPath(str) {
  str = str.replace(/-+/g, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function makeUrlPath(str) {
  str = str.split("&").join("and");
  str = str.split(",").join("");
  str = str.replace(/[()\\]/g, " ");
  str = str.replace(/\s+/g, "-").toLowerCase();
  return str;
}

export function removeDash(str) {
  return str.replace(/-+/g, " ");
}

export function splitTypeArray(arr) {
  return arr.join(" and ");
}

const findChildren = (parent, nodes) => {
  const children = [];
  const h = parent.Hierarchy;
  const level = `Level${h}`;
  nodes.forEach((n) => {
    if (n.Hierarchy === h + 1 && parent.ttl === n[level]) {
      children.push(n["id"]);
    }
  });
  // console.log("children", children);
  return children;
};

const findParent = (job, nodes) => {
  // console.log(nodes);
  const holdParent = [];
  const h = job.Hierarchy;
  const p = h - 1;
  const level = `Level${p}`;

  nodes.forEach((n) => {
    if (n.Hierarchy === h - 1 && n.ttl === job[level]) {
      holdParent.push(n.id);
    }
  });
  // console.log(parent);
  return holdParent;
};

const findGrandparent = (job, nodes) => {
  // console.log(nodes);
  const holdGrandparent = [];
  const h = job.Hierarchy;
  const p = h - 2;
  const level = `Level${p}`;

  nodes.forEach((n) => {
    if (n.Hierarchy === h - 2 && n.ttl === job[level]) {
      holdGrandparent.push(n.id);
    }
  });
  // console.log(parent);
  return holdGrandparent;
};
const findGreatGrandparent = (job, nodes) => {
  // console.log(nodes);
  const holdGreatGrandparent = [];
  const h = job.Hierarchy;
  const p = h - 3;
  const level = `Level${p}`;

  nodes.forEach((n) => {
    if (n.Hierarchy === h - 3 && n.ttl === job[level]) {
      holdGreatGrandparent.push(n.id);
    }
  });
  // console.log(parent);
  return holdGreatGrandparent;
};
const findGreatGreatGrandparent = (job, nodes) => {
  // console.log(nodes);
  const holdGreatGreatGrandparent = [];
  const h = job.Hierarchy;
  const p = h - 4;
  const level = `Level${p}`;

  nodes.forEach((n) => {
    if (n.Hierarchy === h - 4 && n.ttl === job[level]) {
      holdGreatGreatGrandparent.push(n.id);
    }
  });
  // console.log(parent);
  return holdGreatGreatGrandparent;
};

export function addIdPathway(originalJobs) {
  const jobWithChildren = [];
  const jobWithParent = [];
  const jobWithGrandparent = [];
  const jobWithGreatGrandparent = [];
  const jobWithGreatGreatGrandparent = [];
  originalJobs.forEach((job) => {
    job["children"] = findChildren(job, originalJobs);
    jobWithChildren.push(job);
  });
  jobWithChildren.forEach((job) => {
    job["parent"] = findParent(job, jobWithChildren);

    jobWithParent.push(job);
  });
  jobWithParent.forEach((job) => {
    job["grandparent"] = findGrandparent(job, jobWithParent);

    jobWithGrandparent.push(job);
  });
  jobWithGrandparent.forEach((job) => {
    job["greatGrandparent"] = findGreatGrandparent(job, jobWithGrandparent);

    jobWithGreatGrandparent.push(job);
  });
  jobWithGreatGrandparent.forEach((job) => {
    job["greatGreatGrandparent"] = findGreatGreatGrandparent(
      job,
      jobWithGreatGrandparent
    );

    jobWithGreatGreatGrandparent.push(job);
  });

  return jobWithGreatGreatGrandparent;
}

export function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const ttlA = a.ttl.toUpperCase();
  const ttlB = b.ttl.toUpperCase();

  let comparison = 0;
  if (ttlA > ttlB) {
    comparison = 1;
  } else if (ttlA < ttlB) {
    comparison = -1;
  }
  return comparison;
}

export const jobData = {
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
  TypicalEducationNeededForEntry: "",
  WorkExperienceInARelatedOccupation: "",
  TypicalOnTheJobTrainingNeededToAttainCompetencyInTheOccupation: "",
  ttl: "",
  Level0: "",
  Level4: "",
  Level3: "",
  Level2: "",
  Level1: "",
  pathString: "",
  Def: "",
  children: [],
  parent: [],
};
