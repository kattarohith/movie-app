var config = {};

config.mongo = {
  database: 'watchlist',
  hostName: '52.232.229.118',
  port: 27017
}

config.mongo.url = 'mongodb://' + config.mongo.hostName + ':' + config.mongo.port + '/' + config.mongo.database;

module.exports = config;
