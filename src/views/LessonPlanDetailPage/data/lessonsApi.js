import { fetchWithTimeout } from "./index";

const URL =
  process.env.REACT_APP_API_URL || "https://lessondirectory-api.herokuapp.com";

const LESSONS_URL = URL + "/lesson-plans";

export const fetchAll = (timeout = 0) =>
  fetchWithTimeout(LESSONS_URL, timeout).then((json) => {
    if (!Array.isArray(json)) json = [json];
    return json;
  });

export const fetchOne = (id, timeout = 0) =>
  fetchWithTimeout(LESSONS_URL + "/" + id, timeout);
