/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import Lessons from "views/LessonsPage/LessonsPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import HireUsPage from "views/HireUs/HireUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import LessonPlanDetailsPage from "views/LessonPlanDetailPage/index.js";
// J O B  V I Z

import { Level1List } from "views/JobViz/level1/Level1.js";
import { Level2List } from "views/JobViz/level2/Level2.js";

import { Level3List } from "views/JobViz/level3/Level3.js";
import { Level4List } from "views/JobViz/level4/Level4.js";
// import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";

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

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutUsPage} />
      <Route exact path="/lessons" component={Lessons} />
      <Route path="/lessons/:lessonId" component={LessonPlanDetailsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/hire-us" component={HireUsPage} />
      {/* ///This is here to help visulize all of Material Kit React's built in component features */}
      {/* <Route path="/components" component={ComponentsPage} /> */}

      {/* J O B V I Z */}
      {/* <Route
        exact
        path="/jobviz"
        render={(props) => {
          return <Level0List {...props} />;
        }}
      /> */}
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
  </Router>,
  document.getElementById("root")
);
