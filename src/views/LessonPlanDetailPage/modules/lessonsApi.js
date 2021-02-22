const URL =
  process.env.REACT_APP_API_URL || "https://lessondirectory-api.herokuapp.com";

const LESSONS_URL = URL + "/lesson-plans";

export const fetchAll = () =>
  fetch(LESSONS_URL)
    .then((response) => response.json())
    .then((json) => {
      if (!Array.isArray(json)) json = [json];
      return json;
    });

export const fetchOne = (id) =>
  fetch(LESSONS_URL + "/" + id).then((response) => response.json());
