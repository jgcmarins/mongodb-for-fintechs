import type {
  ChangeStreamDeleteDocument,
  ChangeStreamInsertDocument,
  ChangeStreamUpdateDocument,
} from 'mongodb';

import { publishChargeCreated } from './publishChargeCreated';
import { publishChargeStatusUpdated } from './publishChargeStatusUpdated';
import type { ICharge } from '@woovi/charge';

type AllowedChangeStreams =
  | ChangeStreamInsertDocument
  | ChangeStreamUpdateDocument
  | ChangeStreamDeleteDocument;

type OperationType = AllowedChangeStreams['operationType'];

export type UpdateDescription = {
  updatedFields: Record<string, unknown>;
  removedFields: any[];
  truncatedArrays: any[];
};

export type Data = {
  _id: Record<string, unknown>;
  operationType: OperationType;
  wallTime: Date;
  fullDocument: ICharge;
  ns: Record<string, unknown>;
  updateDescription: UpdateDescription;
};

export const chargePubSub = async (data: Data) => {
  const validOperations = ['insert', 'update'];

  if (!validOperations.includes(data?.operationType)) {
    return;
  }

  if (!data?.fullDocument) {
    return;
  }

  const charge = data.fullDocument;

  if (data?.operationType === 'update' && data?.updateDescription?.updatedFields?.status) {
    await publishChargeStatusUpdated({
      charge: charge._id.toString(),
    });

    return;
  }

  if (data?.operationType === 'insert') {
    await publishChargeCreated({
      chargeId: charge._id.toString(),
    });
  }
};
