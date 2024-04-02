import type { MongoExplanation6 } from './mongoExplanation6';
import type { MongoExplanation7 } from './mongoExplanation7';

type MongoExplanation = MongoExplanation6 | MongoExplanation7;

export const getStageFromExplanation = (explanation: MongoExplanation) => {
  // mongo 7
  if (explanation.queryPlanner.winningPlan.queryPlan) {
    return explanation.queryPlanner.winningPlan.queryPlan.inputStage.stage;
  }

  return explanation.queryPlanner.winningPlan.inputStage.stage;
};
