"use strict";
const Path = require("path");
const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../errors/grade-error.js");

const citySchema = 'city';

const WARNINGS = {

  addGradeUnsupportedKeys: {
    code: `${Errors.AddGrade.UC_CODE}unsupportedKeys`
  },

  refreshAverageGradeUnsupportedKeys: {
    code: `${Errors.AddGrade.UC_CODE}unsupportedKeys`
  },

};

class CityModel {

  constructor() {
    this.validator = new Validator(Path.join(__dirname, "..", "validation-types", "grade-types.js"));
    this.cityDao = DaoFactory.getDao(citySchema);
  }

  // todo 1.2 Opravit implementaci funkce aby správně přidávala nové hodnocení
  async addGrade(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("addGradeDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.addGradeUnsupportedKeys.code,
      Errors.AddGrade.InvalidDtoIn
    );

    // HDS 3
    let city = await this.cityDao.get(awid, dtoIn.cityId);
    if(!city){
      // A3
      throw new Errors.AddGrade.CityDoesNotExist({uuAppErrorMap}, {cityId: dtoIn.cityId})
    }

    let grade = {
      grade: dtoIn.grade,
      dateOfCreation: new Date()
    };

    // HDS 4
    let dtoOut;
    try {
      city.grades = [grade];
      dtoOut = await this.cityDao.update(city)
    }catch(e){
      // A4
      throw new Errors.AddGrade.AddGradeByDaoFailed({uuAppErrorMap}, e)
    }

    // HDS 4
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async refreshAverageGrade(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("refreshAverageGradeDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.refreshAverageGradeUnsupportedKeys.code,
      Errors.RefreshAverageGrade.InvalidDtoIn
    );

    // HDS 3
    let city = await this.cityDao.get(awid, dtoIn.cityId);
    if(!city){
      // A3
      throw new Errors.RefreshAverageGrade.CityDoesNotExist({uuAppErrorMap}, {cityId: dtoIn.cityId})
    }

    // HDS 4
    let newAverageGrade = 10;

    // todo 1.3 Implementovat logiku výpočtu průmereného hodnocení města

    // HDS 5
    let dtoOut;
    try {
      city.averageGrade = newAverageGrade;
      dtoOut = await this.cityDao.update(city)
    }catch(e){
      // A4
      throw new Errors.RefreshAverageGrade.AddGradeByDaoFailed({uuAppErrorMap}, e)
    }

    // HDS 6
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new CityModel();
