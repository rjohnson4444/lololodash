var _ = require("lodash");

var worker = function(object) {
   return _.filter(object, { active: true });
};

module.exports = worker;


