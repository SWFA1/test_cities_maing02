"use strict";
const GradeModel = require("../models/grade-model.js");

class GradeController {

  addGrade(ucEnv) {
    return GradeModel.addGrade(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  refreshAverageGrade(ucEnv) {
    return GradeModel.refreshAverageGrade(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new GradeController();
