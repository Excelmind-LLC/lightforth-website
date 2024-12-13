import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { ArrowLeftIcon, CalendarIcon } from "../../assets/icon";

export const QuestionThirteen = ({ updateQuestion }: UpdateQuestionStep) => {
  return (
    <Card>
      <div className="w-full flex gap-4 items-center">
        <ArrowLeftIcon />
        <ProgressBar />
      </div>
      <div className="w-full flex flex-col items-center gap-14">
        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="text-black font-medium text-[41px] leading-[57px]">Congratulations</h2>
          <p className="text-[21px] leading-[31px] text-primary-500 max-w-md font-medium text-center pr-2">Based on your responses, Lightforth is on track to help you land 7+ interviews by
          </p>
        </div>
        <div className="rounded-full border-[1.5px] bg-white flex items-center justify-center gap-2 py-[14px] px-4 border-[#8C8C8C]">
          <CalendarIcon />
          <p className="text-[21px] leading-[31px] font-medium text-black">
            January 21, 2025]! 🚀 </p>
        </div>
        <p className="text-[21px] leading-[31px] text-primary-500 max-w-md text-center">With Lightforth’s powerful AI-driven job matching system, your next job is closer than you think. You’ve made all the right moves. Now, let’s make sure your resume gets you those interviews!
        </p>
      </div>

      <Button onClick={() => updateQuestion("question 14")}>Continue</Button>
    </Card>
  );
};
