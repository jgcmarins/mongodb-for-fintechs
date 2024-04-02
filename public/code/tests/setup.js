const fs = require('fs');
const MMS = require('mongodb-memory-server-global');
const { join } = require('path');

const cwd = process.cwd();
const globalConfigPath = join(cwd, 'globalConfig.json');
const { MongoMemoryServer } = MMS;

module.exports = async () => {
  const mongod = await MongoMemoryServer.create({
    binary: {
      systemBinary: process.env.MONGODB_BINARY,
      skipMD5: true,
    },
  });

  const mongoConfig = { mongoUri: mongod.getUri() };

  // save mongo uri to be reused in each test
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

  global.__MONGOD__ = mongod;
};
