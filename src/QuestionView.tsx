import { GetStarted } from "./components/question-view/GetStarted";
import { LetsGo } from "./components/question-view/lets-go";
import { QuestionOne } from "./components/question-view/question-one";
import { QuestionTwo } from "./components/question-view/QuestionTwo";
import { QuestionThree } from "./components/question-view/question-three";
import { Results } from "./components/question-view/results";
import { DispatchType, Steps } from "./types";
import { QuestionTwoGo } from "./components/question-view/QuestionTwoGo";

const views: Record<
  Steps,
  ({ updateQuestion }: { updateQuestion: DispatchType<Steps> }) => JSX.Element
> = {
  "get started": GetStarted,
  "lets go": LetsGo,
  "question 1": QuestionOne,
  "question 2": QuestionTwo,
  "question 2 go": QuestionTwoGo,
  "question 3": QuestionThree,
  results: Results,
};

type QuestionViewProps = {
  question: Steps;
  updateQuestion: DispatchType<Steps>;
};

export const QuestionView = ({
  question,
  updateQuestion,
}: QuestionViewProps) => {
  const View = views[question];
  return <View updateQuestion={updateQuestion} />;
};
