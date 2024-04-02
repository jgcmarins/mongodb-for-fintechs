import type {
  ChangeStreamDeleteDocument,
  ChangeStreamUpdateDocument,
  ChangeStreamInsertDocument,
} from 'mongodb';

import { publishChargeCreated } from './publishChargeCreated';
import { publishChargeStatusUpdated } from './publishChargeStatusUpdated';
import type { ICharge } from '@woovi/charge';

type AllowedChangeStreams =
  | ChangeStreamInsertDocument
  | ChangeStreamUpdateDocument
  | ChangeStreamDeleteDocument;

type OperationType = AllowedChangeStreams['operationType'];

export type Data = {
  _id: Record<string, unknown>;
  operationType: OperationType;
  wallTime: Date;
  fullDocument: ICharge;
  ns: Record<string, unknown>;
};

export const chargeChangeStreamHandler = async (data: Data) => {
  try {
    const validOperations = ['insert', 'update'];

    if (!validOperations.includes(data?.operationType)) {
      return;
    }

    const charge = data.fullDocument;

    if (data?.operationType === 'update') {
      await publishChargeStatusUpdated({ charge: charge._id.toString() });
      return;
    }

    if (data?.operationType === 'insert') {
      await publishChargeCreated({ chargeId: charge._id.toString() });
    }
  } catch (err) {
    // handle error
  }
};
