module.exports = function () {
  var redis = require('redis');
  return redis.createClient(6379, 'localhost', { no_ready_check: true });
};
