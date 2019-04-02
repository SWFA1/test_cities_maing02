"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class CityMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1}, {unique: true});
    await super.createIndex({ awid: 1, name: 1});
    await super.createIndex({ awid: 1, population: 1});
    await super.createIndex({ awid: 1, averageGrade: 1});
    await super.createIndex({ awid: 1, country: 1});
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    return await super.findOne({awid, id});
  }

  async list(awid, filterInfo, pageInfo = {}) {
    return await super.find({awid, ...filterInfo}, pageInfo);
  }

  async update(city) {
    return await super.findOneAndUpdate({awid: city.awid, id: city.id}, city, "NONE");
  }

}

module.exports = CityMongo;
