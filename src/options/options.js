/*
OptMeowt is licensed under the MIT License
Copyright (c) 2020 Kuba Alicki, Abdallah Salia, Sebastian Zimmeck
privacy-tech-lab, https://privacy-tech-lab.github.io/
*/

/*
options.js
================================================================================
options.js starts the process of rendering the main options page
*/

import { mainView } from "./views/main-view/main-view.js";

/**
 * Intializes scripts that build the options page
 */
document.addEventListener("DOMContentLoaded", (event) => {
  mainView();
});
