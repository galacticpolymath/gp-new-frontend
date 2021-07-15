const axios = require("axios");

const URL =
  process.env.REACT_APP_API_URL || "https://lessondirectory-api.herokuapp.com";

const LESSONS_URL = URL + "/lesson-plans";

module.exports = {
  fetchAll() {
    return axios.get(LESSONS_URL).then(({ data }) => {
      if (!Array.isArray(data)) {
        return [data];
      }
      return data;
    });
  },
  fetchOne(id) {
    return axios.get(LESSONS_URL + "/" + id).then(({ data }) => data);
  },
};
