import { Charge } from '@woovi/charge';
import { getStageFromExplanation } from '@woovi/shared';
import { cleanupTest, connectMongoose, disconnectMongoose } from '@woovi/test';

beforeAll(connectMongoose);

beforeEach(cleanupTest);

afterAll(disconnectMongoose);

it('should query with ixscan if charge is queried by transactionID', async () => {
  await Charge.syncIndexes();

  const chargeCursor = Charge.find({ transactionID: 'ixscan' });

  chargeCursor.explain();

  const chargeCursorExplained = await chargeCursor;

  expect(getStageFromExplanation(chargeCursorExplained)).toEqual('IXSCAN');
});
