const dbConfig = require("../data/db-config");

module.exports ={
    find,
}

function find() {
    return dbConfig("schemes")
}
