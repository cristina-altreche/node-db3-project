const dbConfig = require("../data/db-config");
const mappers = require("./mappers");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  remove,
  update,
};

function find() {
  return dbConfig("schemes");
}

function findById(id) {
  return dbConfig("schemes").where({ id }).first();
}

function findSteps(id) {
  return dbConfig("steps")
    .where("id", id)
    .then((steps) => steps.map((step) => mappers.stepsToBody(step)));
}

function add(scheme) {
  return dbConfig("schemes")
    .insert(scheme, "id")
    .then(([id]) => findById(id));
}

function update(changes, id) {
  return dbConfig("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return dbConfig("schemes").where("id", id).del();
}
