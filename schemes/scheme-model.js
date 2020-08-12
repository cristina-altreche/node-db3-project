const db = require("../data/schemes.db3");

module.exports ={
    find,
}

function find() {
    return db("schemes")
}
