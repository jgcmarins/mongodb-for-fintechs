import type {
  ChangeStreamDeleteDocument,
  ChangeStreamUpdateDocument,
  ChangeStreamInsertDocument,
} from 'mongodb';
import type { Model } from 'mongoose';

export type AllowedChangeStreams =
  | ChangeStreamInsertDocument
  | ChangeStreamUpdateDocument
  | ChangeStreamDeleteDocument;

export type OperationType = AllowedChangeStreams['operationType'];

export type ChangeStreamData<T> = {
  _id: Record<string, unknown>;
  operationType: OperationType;
  wallTime: Date;
  fullDocument: T;
  ns: Record<string, unknown>;
};

export const changeStreamListen = async <T extends any>(
  model: Model<T>,
  fn: (data: ChangeStreamData<T>) => void,
) => {
  const stream = model.watch([], {
    fullDocument: 'updateLookup',
  });

  stream.on('change', fn).on('error', (err) => {
    // handle error
  });
};
