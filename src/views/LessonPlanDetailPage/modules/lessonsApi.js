const URL = "https://lessondirectory-api.herokuapp.com/lesson-plans";

export const fetchAll = () =>
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      if (!Array.isArray(json)) json = [json];
      return json;
    });

export const fetchOne = (id) =>
  fetch(URL + "/" + id).then((response) => response.json());
