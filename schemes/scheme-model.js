const dbConfig = require("../data/db-config");
const mappers = require("./mappers");


module.exports ={
    find,
    findById,
    findSteps
}

function find() {
    return dbConfig("schemes")
}

function findById(id) {
    return dbConfig("schemes")
    .where({id})
    .first()
}

function findSteps(id) {
    return dbConfig("steps")
      .where("id", id)
      .then(steps => steps.map(step => mappers.stepsToBody(step)));
  }
