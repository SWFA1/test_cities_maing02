"use strict";
const Path = require("path");
const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const {SysProfileModel} = require("uu_appg01_server").Workspace;
const Errors = require("../errors/cities-main-error.js");

const WARNINGS = {

  initUnsupportedKeys: {
    code: `${Errors.Init.UC_CODE}unsupportedKeys`
  }

};

class CitiesMainModel {

  constructor() {
    this.validator = new Validator(Path.join(__dirname, "..", "validation-types", "cities-main-types.js"));
  }

  async init(awid, dtoIn) {
    // HDS 1
    let validationResult = this.validator.validate("initDtoInType", dtoIn);
    // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.initUnsupportedKeys.code,
      Errors.Init.InvalidDtoIn
    );

    // HDS 2
    const schemas = ["citiesMain", "city"];
    let schemaCreateResults = schemas.map(async schema => {
      try {
        return await DaoFactory.getDao(schema).createSchema();
      } catch (e) {
        // A3
        throw new Errors.Init.SchemaDaoCreateSchemaFailed({ uuAppErrorMap }, { schema }, e);
      }
    });
    await Promise.all(schemaCreateResults);

    // HDS 3
    return {
      uuAppErrorMap: uuAppErrorMap
    };
  }

}

module.exports = new CitiesMainModel();
