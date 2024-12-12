import { GetStarted } from "./components/question-view/GetStarted";
import { LetsGo } from "./components/question-view/lets-go";
import { QuestionTwo } from "./components/question-view/QuestionTwo";
import { DispatchType, Steps } from "./types";

const views: Record<
  Steps,
  ({ updateQuestion }: { updateQuestion: DispatchType<Steps> }) => JSX.Element
> = {
  "get started": GetStarted,
  "lets go": LetsGo,
  "question 1": QuestionTwo,
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
