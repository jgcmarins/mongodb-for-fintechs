import type { Document, Model, Types } from 'mongoose';
import mongoose from 'mongoose';

import type { ICompany } from '@woovi/company';

const { ObjectId } = mongoose.Schema.Types;

const Schema = new mongoose.Schema(
  {
    // fields
    company: {
      type: ObjectId,
      ref: 'Company',
      description: 'Company that this document belongs to',
      required: true,
      index: true,
    },
    // other fields
  },
  {
    timestamps: true,
    collection: 'User',
  },
);

export type IUser = {
  company: Types.ObjectId | ICompany;
} & Document;

const UserModel: Model<IUser> = mongoose.model('User', Schema);

export default UserModel;
