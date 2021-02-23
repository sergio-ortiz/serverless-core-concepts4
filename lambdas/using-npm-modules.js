const faker = require("faker");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: `Hello ${faker.name.findName()}`,
  };
};
