import { GetStarted } from "./components/question-view/GetStarted";
import { LetsGo } from "./components/question-view/lets-go";
import { QuestionOne } from "./components/question-view/question-one";
import { QuestionThree } from "./components/question-view/question-three";
import { DispatchType, Steps } from "./types";

const views: Record<
  Steps,
  ({ updateQuestion }: { updateQuestion: DispatchType<Steps> }) => JSX.Element
> = {
  "get started": GetStarted,
  "lets go": LetsGo,
  "question 1": QuestionOne,
  "question 3": QuestionThree,
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
