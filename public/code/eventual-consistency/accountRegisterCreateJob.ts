import type { Job } from 'bull';

import { Company } from '@woovi/company';

type Data = {
  companyId: string;
};

export const accountRegisterJob = async (job: Job<Data>) => {
  const { companyId } = job.data;

  const company = await Company.findOne({ _id: companyId }).read('primary');

  if (!company) {
    // handle company not found
    return null;
  }

  // do something with company
};
