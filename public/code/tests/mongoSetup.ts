import { clearDbAndRestartCounters } from './clearDatabase';
import { connectMongoose } from './connectMongoose';
import { disconnectMongoose } from './disconnectMongoose';

// a function to create a connection to MongoDB
// and enable mongoose to use the connection
beforeAll(connectMongoose);

// a function to clear the database by dropping it
// and restarting all fixtures the counters
beforeEach(clearDbAndRestartCounters);

// a function to disconnect from MongoDB
afterAll(disconnectMongoose);
