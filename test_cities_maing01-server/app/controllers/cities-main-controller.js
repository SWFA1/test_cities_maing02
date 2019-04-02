"use strict";
const CitiesMainModel = require("../models/cities-main-model.js");

class CitiesMainController {

  init(ucEnv) {
    return CitiesMainModel.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new CitiesMainController();
