import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { CalendarIcon } from "../../assets/icon";

export const QuestionThirteen = ({ updateQuestion }: UpdateQuestionStep) => {
  return (
    <Card animate>
      <ProgressBar width={85} onClick={() => updateQuestion("question 12")} />
      <div className="w-full flex flex-col items-center gap-14">
        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="text-black font-medium text-[41px] leading-[57px]">
            Congratulations
          </h2>
          <p className="text-[21px] leading-[31px] text-primary-500 max-w-md font-medium text-center pr-2">
            Based on your responses, Lightforth has identified{" "}
            <span className="text-black">1,053 job</span> openings for you and
            is on track to help you secure{" "}
            <span className="text-black">7+</span> interviews by
          </p>
        </div>
        <div className="rounded-full border-[1.5px] bg-white flex items-center justify-center gap-2 py-[14px] px-4 border-[#8C8C8C]">
          <CalendarIcon />
          <p className="text-[21px] leading-[31px] font-medium text-black">
            January 21, 2025! 🚀{" "}
          </p>
        </div>
        <p className="text-[21px] leading-[31px] text-primary-500 max-w-md text-center">
          With Lightforth’s powerful AI-driven job matching system, your next
          job is closer than you think. You’ve made all the right moves. Now,
          let’s make sure your resume gets you those interviews!
        </p>
      </div>

      <Button onClick={() => updateQuestion("question 14")}>
        Let’s Find Out
      </Button>
    </Card>
  );
};
