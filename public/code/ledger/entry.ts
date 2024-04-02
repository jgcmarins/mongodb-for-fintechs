const entryIdempotencyIdGet = async (account: Account) => {
  const [lastEntry] = await Entry.find({ account }).sort({ _id: -1 });

  if (!lastEntry) {
    return account._id;
  }

  return lastEntry._id;
};

const entryCreate = async ({ account, ...args }) => {
  const idempotencyId = await entryIdempotencyIdGet(account);

  const entry = await new Entry({
    ...args,
    account,
    idempotencyId,
  }).save();

  if (!entry) {
    return new Error('Error message');
  }

  return entry;
};
