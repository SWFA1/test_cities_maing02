"use strict";
const CitiesMainUseCaseError = require("./cities-main-use-case-error.js");

const AddGrade = {

  UC_CODE: `${CitiesMainUseCaseError.ERROR_PREFIX}addGrade/`,

  InvalidDtoIn: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddGrade.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CityDoesNotExist: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddGrade.UC_CODE}cityDoesNotExist`;
      this.message = "City with given id does not exist.";
    }
  },

  AddGradeByDaoFailed: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddGrade.UC_CODE}addGradeByDaoFailed`;
      this.message = "Add grade by Dao update failed.";
    }
  },

};

const RefreshAverageGrade = {

  UC_CODE: `${CitiesMainUseCaseError.ERROR_PREFIX}refreshAverageGrade/`,

  InvalidDtoIn: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddGrade.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CityDoesNotExist: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddGrade.UC_CODE}cityDoesNotExist`;
      this.message = "City with given id does not exist.";
    }
  },

  RefreshAverageGradeByDaoFailed: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddGrade.UC_CODE}refreshAverageGradeByDaoFailed`;
      this.message = "Refresh average grade by Dao update failed.";
    }
  },

};

module.exports = {
  AddGrade,
  RefreshAverageGrade
};
