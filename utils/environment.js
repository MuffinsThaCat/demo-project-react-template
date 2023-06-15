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

var getMumbaiPrivateKey = function() {
  return readEnv("MUMBAI_PRIVATE_KEY");
};

var getGoerliPrivateKey = function() {
  return readEnv("GOERLI_PRIVATE_KEY");
};

var getGoerliProviderUrl = function() {
  return readEnv("GOERLI_PROVIDER_URL");
};

var getMumbaiProviderUrl = function() {
  return readEnv("MUMBAI_PROVIDER_URL");
};

module.exports = {
  readEnv: readEnv,
  getMumbaiPrivateKey: getMumbaiPrivateKey,
  getGoerliPrivateKey: getGoerliPrivateKey,
  getGoerliProviderUrl: getGoerliProviderUrl,
  getMumbaiProviderUrl: getMumbaiProviderUrl
};
