const path = require("path");
const lessonsApi = require("./src/views/LessonPlanDetailPage/data");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ actions: { createPage } }) => {
  const lessons = await lessonsApi.fetchAll();

  createPage({
    path: "lessons",
    component: path.resolve("src/views/LessonsPage/LessonsPage.js"),
    context: { lessons },
  });

  lessons.forEach((lesson) => {
    createPage({
      path: `lessons/${lesson.id}`,
      component: path.resolve("src/views/LessonPlanDetailPage/index.js"),
      context: { lesson },
    });
  });
};
