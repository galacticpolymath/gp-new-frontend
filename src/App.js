import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import TagManager from 'react-gtm-module'
import { renderMetaTags } from "utils/meta";

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
import CustomGPfooter from "views/GPfooter/CustomGPfooter";
import NotFoundPage from "views/NotFound";

//import lessons from "./views/LessonPlanDetailPage/data/lessons.json";

var hist = createBrowserHistory();

export default function App () {

  const [lessons, setLessons] = useState([])

  useEffect(() => {
    fetch("https://catalog.galacticpolymath.com/index.json")
      .then(res => res.json())
      .then(result => setLessons(result))
  }, []);

  return(
    <Router history={hist}>
      <Helmet>
        <meta charSet="utf-8" />

        <meta property="og:url" content="https://www.galacticpolymath.com" />
        <meta property="og:determiner" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Galactic Polymath Education Studio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GalacticPM" />
      </Helmet>
      {renderMetaTags({
        description: 'Galactic Polymath (GP) is an education studio. We help scientists, nonprofits, and sustainable companies achieve outreach at scale by translating complex, cutting-edge research into FREE, mind-blowing lessons for grades 5+. We specialize in making science communication (scicomm), NSF Broader Impacts, and K-12 STEM outreach in general, much easier and more effective. We do the heavy lifting: creating and disseminating mind-expanding STEM and STEAM lessons that grow public understanding and engagement in the topics our clients care about. We create fully interdisciplinary, culturally responsive lessons that connect knowledge across subjects to foster science lieteracy, data literacy, and critical thinking.',
        image: 'https://res.cloudinary.com/galactic-polymath/image/upload/v1593304395/logos/GP_full_stacked_grad_whiteBG_llfyal.png'
      })}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/hire-us" component={HireUsPage} />

        {/* Lessson Directory */}

        <Route exact path="/lessons" render={() => <Lessons lessons={lessons} />} />
        <Route path="/lessons/:lessonId" render={({location}) => <LessonPlanDetailsPage location={location} lessons={lessons} />} />

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
        <Route component={NotFoundPage} />
      </Switch>
      <CustomGPfooter />
    </Router>
  );
}
