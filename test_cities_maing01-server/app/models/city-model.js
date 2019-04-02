"use strict";
const Path = require("path");
const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../errors/city-error.js");

const schema = 'city';

const WARNINGS = {

  createCityUnsupportedKeys: {
    code: `${Errors.CreateCity.UC_CODE}unsupportedKeys`
  },
  listCitiesUnsupportedKeys: {
    code: `${Errors.ListCities.UC_CODE}unsupportedKeys`
  }

};

class CityModel {

  constructor() {
    this.validator = new Validator(Path.join(__dirname, "..", "validation-types", "city-types.js"));
    this.dao = DaoFactory.getDao(schema);
  }

  async createCity(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("createCityDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createCityUnsupportedKeys.code,
      Errors.CreateCity.InvalidDtoIn
    );

    // HDS 3
    let dtoOut;
    try {
      dtoIn.awid = awid;
      dtoIn.grades = [];
      dtoIn.averageGrade = 0;
      dtoOut = await this.dao.create(dtoIn)
    }catch(e){
      // A3
      throw new Errors.CreateCity.CreateCityByDaoFailed({uuAppErrorMap}, e)
    }

    // HDS 4
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  // todo 1.1 Dokončit implementaci funkce aby správně vracela seznam měst a uuAppErrorMap
  async listCities(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("listCitiesDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listCitiesUnsupportedKeys.code,
      Errors.ListCities.InvalidDtoIn
    );

    // HDS 3
    let filterMap = dtoIn.filterMap ? dtoIn.filterMap : {};
    let pageInfo = dtoIn.pageInfo ? dtoIn.pageInfo : {};
    await this.dao.list(awid, filterMap, pageInfo);
  }

}

module.exports = new CityModel();
