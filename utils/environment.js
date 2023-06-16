var dotenv = require("dotenv");
dotenv.config();

// function that reads a string environment variable and throws if it is not set
var readEnv = function(name) {
  var value = process.env[name];
  if (value === undefined) {
    throw new Error("Environment variable " + name + " is not set");
  }
  return value;
};
