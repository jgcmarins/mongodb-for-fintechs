import {
  Title,
  Whoami,
  Roadmap,
  SetupAndInfrastructure,
  HighAvailabilityMongoDB,
  ShowDontTell,
  SelfHosted,
  MongoDBK8sSetup,
  Woovi,
  WooviAbout,
  MongoDBDeployment,
  MongoDBReplicaSet,
  ReplicaSetInit,
  HiddenMongo,
  HiddenMongoInit,
  BackupService,
  MongoDBBackup,
  EntriaMongoDBBackupDocker,
  BackupMongodbToS3,
  MigrationService,
  MultiTenant,
  Ledger,
  Publisher,
  AutomatedTests,
  EventualConsistency,
  LedgerSQL,
  LedgerConditionalPut,
  LedgerEntry,
  WooviStack,
  References,
  Thanks,
  PublisherChangeStream,
  PublisherHandler,
  PublishSubscriber,
  TestSetup,
  TestRun,
  TestPerformance,
  TestPerformanceExplanation,
  EventualConsistencySolution,
  LedgerChallenge,
} from '@/slides';

const slides = [
  {
    title: 'Title',
    slide: <Title title='Beyond the Basics: Leveraging MongoDB for Fintech Disruption' />,
  },
  {
    title: 'whoami',
    context: 'whoami',
    slide: <Whoami />,
  },
  {
    title: 'Woovi',
    slide: <Woovi />,
  },
  {
    title: 'About Woovi',
    slide: <WooviAbout />,
  },
  {
    title: 'Woovi Stack',
    slide: <WooviStack />,
  },
  {
    title: 'Roadmap',
    slide: <Roadmap />,
  },
  {
    title: 'Setup & Infrastructure',
    slide: <SetupAndInfrastructure />,
  },
  {
    title: 'Self Hosted (K8s)',
    context: 'Setup & Infrastructure',
    slide: <SelfHosted />,
  },
  {
    title: 'MongoDB K8s Setup',
    context: 'Setup & Infrastructure',
    slide: <MongoDBK8sSetup />,
  },
  {
    title: 'MongoDB Deployment',
    context: 'Setup & Infrastructure',
    slide: <MongoDBDeployment />,
  },
  {
    title: 'MongoDB Replica Set',
    context: 'Setup & Infrastructure',
    slide: <MongoDBReplicaSet />,
  },
  {
    title: 'Replica Set Init',
    context: 'Setup & Infrastructure',
    slide: <ReplicaSetInit />,
  },
  {
    title: 'High Availability MongoDB',
    slide: <HighAvailabilityMongoDB />,
  },
  {
    title: 'Hidden Mongo',
    context: 'High Availability MongoDB',
    slide: <HiddenMongo />,
  },
  {
    title: 'Hidden Mongo Init',
    context: 'High Availability MongoDB',
    slide: <HiddenMongoInit />,
  },
  {
    title: 'Backup Service',
    context: 'High Availability MongoDB',
    slide: <BackupService />,
  },
  {
    title: 'MongoDB Backup K8s CronJob',
    context: 'High Availability MongoDB',
    slide: <MongoDBBackup />,
  },
  {
    title: 'entria/mongodb-backup-docker',
    context: 'High Availability MongoDB',
    slide: <EntriaMongoDBBackupDocker />,
  },
  {
    title: 'Backup Script',
    context: 'High Availability MongoDB',
    slide: <BackupMongodbToS3 />,
  },
  {
    title: 'Migration Service',
    context: 'High Availability MongoDB',
    slide: <MigrationService />,
  },
  {
    title: "Show Don't Tell",
    slide: <ShowDontTell />,
  },
  {
    title: 'Multi Tenant',
    context: "Show Don't Tell",
    slide: <MultiTenant />,
  },
  {
    title: 'Ledger',
    context: "Show Don't Tell",
    slide: <Ledger />,
  },
  {
    title: 'Ledger Challenge',
    context: "Show Don't Tell",
    slide: <LedgerChallenge />,
  },
  {
    title: 'Ledger SQL',
    context: "Show Don't Tell",
    slide: <LedgerSQL />,
  },
  {
    title: 'Conditional Put',
    context: "Show Don't Tell",
    slide: <LedgerConditionalPut />,
  },
  {
    title: 'Ledger Entry',
    context: "Show Don't Tell",
    slide: <LedgerEntry />,
  },
  {
    title: 'Publisher',
    context: "Show Don't Tell",
    slide: <Publisher />,
  },
  {
    title: 'Publisher Change Stream',
    context: "Show Don't Tell",
    slide: <PublisherChangeStream />,
  },
  {
    title: 'Publisher Handler',
    context: "Show Don't Tell",
    slide: <PublisherHandler />,
  },
  {
    title: 'Publisher Subscriber',
    context: "Show Don't Tell",
    slide: <PublishSubscriber />,
  },
  {
    title: 'Automated Tests',
    context: "Show Don't Tell",
    slide: <AutomatedTests />,
  },
  {
    title: 'Test Setup',
    context: "Show Don't Tell",
    slide: <TestSetup />,
  },
  {
    title: 'Test Run',
    context: "Show Don't Tell",
    slide: <TestRun />,
  },
  {
    title: 'Test Performance',
    context: "Show Don't Tell",
    slide: <TestPerformance />,
  },
  {
    title: 'Test Performance Explanation',
    context: "Show Don't Tell",
    slide: <TestPerformanceExplanation />,
  },
  {
    title: 'Eventual Consistency',
    context: "Show Don't Tell",
    slide: <EventualConsistency />,
  },
  {
    title: 'Eventual Consistency Solution',
    context: "Show Don't Tell",
    slide: <EventualConsistencySolution />,
  },
  {
    title: 'References',
    slide: <References />,
  },
  {
    title: 'Thanks',
    slide: <Thanks />,
  },
];

export default slides;
