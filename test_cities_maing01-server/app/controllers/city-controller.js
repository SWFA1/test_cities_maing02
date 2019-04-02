"use strict";
const CityModel = require("../models/city-model.js");

class CityController {

  createCity(ucEnv) {
    return CityModel.createCity(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listCities(ucEnv) {
    return CityModel.listCities(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new CityController();
