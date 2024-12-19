import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";

export const Congratulations = ({ updateQuestion }: UpdateQuestionStep) => {
  return (
    <Card animate>
      <ProgressBar width={40} onClick={() => updateQuestion("question 4")} />
      <div className="w-[435px] flex flex-col items-center mx-auto">
        <img
          src="/congratulation.gif"
          alt="congratulations"
          className="w-auto h-[348px] object-cover object-center"
        />
        <p className="text-black font-medium text-[41px] leading-[56px]">
          Congratulations
        </p>
        <p className="text-xl text-[#545454] leading-[30px]">
          Lightforth found <span className="font-semibold">2,000</span> job
          openings for you right now. Your career is about to explode!”
        </p>
      </div>
      <Button onClick={() => updateQuestion("question 5")}>Let's Go!</Button>
    </Card>
  );
};
