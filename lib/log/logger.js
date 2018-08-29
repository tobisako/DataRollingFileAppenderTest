var log4js = require("log4js");
var config = require("../../config/log4js.config.js");
var console, access;

log4js.configure(config);

console = log4js.getLogger();

access = log4js.getLogger("access");

module.exports = {
  console,
  access
};
