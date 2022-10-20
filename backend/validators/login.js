const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  username: { type: "string" },
  password: { type: "string" },
};

const checker = v.compile(schema);

module.exports = checker;
