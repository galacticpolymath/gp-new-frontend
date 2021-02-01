export default {
  getAll() {
    return fetch(`/api/jobdata.json`).then((result) => result.json());
  },
};
