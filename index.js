var redisClient = require('./redis.js')();

redisClient.set('key', 'value');

var redisPub = require('./redis.js')();

redisPub.subscribe(['chat'], (value) => {
  console.log(value);
});

const message = {
  nickname: 'Dener',
  message: 'olá',
};
redisClient.publish('chat', message.toString(), (value) => {
  console.log(value);
});
