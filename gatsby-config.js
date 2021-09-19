const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, "src/components"),
          assets: path.resolve(__dirname, "src/assets"),
          views: path.resolve(__dirname, "src/views"),
        },
        extensions: [],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui"
  ],
};
