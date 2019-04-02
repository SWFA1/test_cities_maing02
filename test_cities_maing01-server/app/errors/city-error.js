"use strict";
const CitiesMainUseCaseError = require("./cities-main-use-case-error.js");

const CreateCity = {

  UC_CODE: `${CitiesMainUseCaseError.ERROR_PREFIX}createCity/`,

  InvalidDtoIn: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateCity.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CreateCityByDaoFailed: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CreateCity.UC_CODE}createCityByDaoFailed`;
      this.message = "Create city by Dao create failed.";
    }
  },

};

const GetCity = {

  UC_CODE: `${CitiesMainUseCaseError.ERROR_PREFIX}getCity/`,

  InvalidDtoIn: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

const ListCities = {

  UC_CODE: `${CitiesMainUseCaseError.ERROR_PREFIX}listCities/`,

  InvalidDtoIn: class extends CitiesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

};

module.exports = {
  CreateCity,
  GetCity,
  ListCities
};
