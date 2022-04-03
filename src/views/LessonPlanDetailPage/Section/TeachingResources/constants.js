import React from "react";

import SchoolIcon from "@material-ui/icons/School";
import RemoteIcon from "@material-ui/icons/Laptop";

export const METHODS = {
  REMOTE: "remote",
  IN_PERSON: "in_person",
};

export const TITLES = {
  [METHODS.REMOTE]: "Remote Teaching Materials",
  [METHODS.IN_PERSON]: "Classroom/In-person Teaching Materials",
};

export const COPY = {
  [METHODS.REMOTE]: (
    <p>
      Designed for remote teaching, using the Nearpod platform.
      It can also be used in-person, and the student-paced version is great for a sub plan.
    </p>
  ),
  [METHODS.IN_PERSON]: (
    <p>
      Designed to be led by a non-specialist teacher, in person.
    </p>
  ),
};

export const ICONS = {
  [METHODS.REMOTE]: <RemoteIcon />,
  [METHODS.IN_PERSON]: <SchoolIcon />,
};
