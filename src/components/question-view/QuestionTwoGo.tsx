import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";

export const QuestionTwoGo = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  return (
    <Card animate>
      <ProgressBar width={20} onClick={() => updateQuestion("question 2")} />

      <div className="w-full flex flex-col items-center">
        <img
          src="/goal.gif"
          alt="cv-resume"
          className="w-auto h-[348px] object-cover object-center mx-auto"
        />
        <h2 className="text-black font-medium text-[41px] leading-[57px]">
          Congratulations
        </h2>
        <p className="text-[21px] leading-[31px] text-primary-500 max-w-md text-center">
          Based on your choices, Lightforth already has{" "}
          <span className="text-[#1F1F1F] font-semibold">20,000 jobs</span> that
          match your profile.”
        </p>
      </div>

      <Button onClick={() => updateQuestion("question 3")}>Let's Go!</Button>
    </Card>
  );
};
