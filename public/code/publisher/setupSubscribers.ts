import { Charge } from '@woovi/charge';

import { changeStreamListen } from './changeStreamListen';
import { chargeChangeStreamHandler } from './chargeChangeStreamHandler';

export const setupSubscribers = async () => {
  await changeStreamListen(Charge, chargeChangeStreamHandler);
  // add more subscribers here
};
