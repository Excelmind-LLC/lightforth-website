import { GetStarted } from "./components/question-view/GetStarted";
import { LetsGo } from "./components/question-view/lets-go";
import { QuestionOne } from "./components/question-view/question-one";
import { QuestionTwo } from "./components/question-view/QuestionTwo";
import { QuestionThree } from "./components/question-view/question-three";
import { Results } from "./components/question-view/results";
import { DispatchType, Steps } from "./types";
import { QuestionTwoGo } from "./components/question-view/QuestionTwoGo";
import { QuestionFour } from "./components/question-view/question-four";
import { Congratulations } from "./components/question-view/congratulation";
import { QuestionFive } from "./components/question-view/question-five";
import { QuestionSix } from "./components/question-view/question-six";
import { QuestionSeven } from "./components/question-view/question-seven";
import { QuestionEight } from "./components/question-view/question-eight";
import { QuestionNine } from "./components/question-view/question-nine";
import { QuestionTen } from "./components/question-view/question-ten";
import { QuestionEleven } from "./components/question-view/question-eleven";

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
  "question 4": QuestionFour,
  congratulations: Congratulations,
  "question 5": QuestionFive,
  "question 6": QuestionSix,
  "question 7": QuestionSeven,
  "question 8": QuestionEight,
  "question 9": QuestionNine,
  "question 10": QuestionTen,
  "question 11": QuestionEleven,
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
