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
import {render, hydrate} from "react-dom";
import { CookiesProvider } from 'react-cookie';

import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<CookiesProvider><App /></CookiesProvider>, rootElement);
} else {
  render(<CookiesProvider><App /></CookiesProvider>, rootElement);
}