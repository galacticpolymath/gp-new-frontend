import React from "react";
import { Helmet } from "react-helmet";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// Lesson Directory
import LessonPlanDetailsPage from "views/LessonPlanDetailPage/index.js";

// JobViz
import { Level1List } from "views/JobViz/level1/Level1.js";
import { Level2List } from "views/JobViz/level2/Level2.js";
import { Level3List } from "views/JobViz/level3/Level3.js";
import { Level4List } from "views/JobViz/level4/Level4.js";

// UiKit
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import Lessons from "views/LessonsPage/LessonsPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import HireUsPage from "views/HireUs/HireUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js"; // import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
// import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
// import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
// import EcommercePage from "views/EcommercePage/EcommercePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
// import PresentationPage from "views/PresentationPage/PresentationPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import ProductPage from "views/ProductPage/ProductPage.js";
// import SectionsPage from "views/SectionsPage/SectionsPage.js";
// import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
// import SignupPage from "views/SignupPage/SignupPage.js";
// import ErrorPage from "views/ErrorPage/ErrorPage.js";

var hist = createBrowserHistory();

/* eslint-disable react/prop-types */
const App = () => (
  <Router history={hist}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Galactic Polymath</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta
        name="description"
        content="We are an education studio. We translate current research into creative, interdisciplinary lessons for grades 5+ that are free for everyone."
      />
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

      {/* <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} /> */}

      {/* This path matches anything, so it goes last. */}
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
);

export default App;
