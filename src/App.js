import React from "react";
import { Helmet } from "react-helmet";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import TagManager from 'react-gtm-module'

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// Lesson Directory
import LessonPlanDetailsPage from "views/LessonPlanDetailPage";

// JobViz
import { Level1List } from "views/JobViz/level1/Level1";
import { Level2List } from "views/JobViz/level2/Level2";
import { Level3List } from "views/JobViz/level3/Level3";
import { Level4List } from "views/JobViz/level4/Level4";

// UiKit
import AboutUsPage from "views/AboutUsPage/AboutUsPage";
import Lessons from "views/LessonsPage/LessonsPage";
import LandingPage from "views/LandingPage/LandingPage";
import HireUsPage from "views/HireUs/HireUsPage";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
import CustomGPfooter from "views/GPfooter/CustomGPfooter";


const tagManagerArgs = {
  gtmId: 'G-8B58Y7HD3T'
};
TagManager.initialize(tagManagerArgs)

var hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Galactic Polymath</title>
      <meta name="description" content="We provide teachers with high-quality, FREE lessons for grades 5-12. Our lessons are contracted by researchers & brands who care about informing the public." />
      
      <meta property="og:url" content="https://www.galacticpolymath.com" />
      <meta property="og:determiner" content="" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Galactic Polymath Education Studio" />
      <meta property="og:image" content="https://res.cloudinary.com/galactic-polymath/image/upload/v1593304395/logos/GP_full_stacked_grad_whiteBG_llfyal.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GalacticPM" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/hire-us" component={HireUsPage} />

      {/* Lessson Directory */}
      <Route exact path="/lessons" component={Lessons} />
      <Route path="/lessons/:lessonId" component={LessonPlanDetailsPage} />

      {/* JobViz */}
      <Route
        exact
        path="/jobviz"
        render={(props) => {
          return <Level1List level0={1} {...props} />;
        }}
      />
      <Route
        exact
        path="/jobviz/:level0/:level1/:title"
        render={(props) => {
          return (
            <Level2List
              level0={1}
              level1={parseInt(props.match.params.level1)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/jobviz/:level0/:level1/:level2/:title/endpoint"
        render={(props) => {
          return (
            <Level2List
              level0={1}
              level1={parseInt(props.match.params.level1)}
              level2={parseInt(props.match.params.level2)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/jobviz/:level0/:level1/:level2/:title"
        render={(props) => {
          return (
            <Level3List
              level0={1}
              level1={parseInt(props.match.params.level1)}
              level2={parseInt(props.match.params.level2)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/jobviz/:level0/:level1/:level2/:level3/:title/endpoint"
        render={(props) => {
          return (
            <Level3List
              level0={1}
              level1={parseInt(props.match.params.level1)}
              level2={parseInt(props.match.params.level2)}
              level3={parseInt(props.match.params.level3)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/jobviz/:level0/:level1/:level2/:level3/:title"
        render={(props) => {
          return (
            <Level4List
              level0={1}
              level1={parseInt(props.match.params.level1)}
              level2={parseInt(props.match.params.level2)}
              level3={parseInt(props.match.params.level3)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/jobviz/:level0/:level1/:level2/:level3/:level4/:title/endpoint"
        render={(props) => {
          return (
            <Level4List
              level0={1}
              level1={parseInt(props.match.params.level1)}
              level2={parseInt(props.match.params.level2)}
              level3={parseInt(props.match.params.level3)}
              level4={parseInt(props.match.params.level4)}
              {...props}
            />
          );
        }}
      />
      {/* End JobViz */}

      {/* This path matches anything, so it goes last. */}
      <Route path="/" component={LandingPage} />
    </Switch>
    <CustomGPfooter />
  </Router>
);

export default App;
