import { ArrowLeftIcon, } from "../../assets/icon";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import goal from "../../assets/goal.png";

export const QuestionTwoGo = ({
   updateQuestion,
}: {
   updateQuestion: DispatchType<Steps>;
}) => {

   return (
      <Card>
         <div className="w-full flex gap-2 items-center">
            <ArrowLeftIcon />
            <ProgressBar />
         </div>

         <div className="w-full flex flex-col items-center">
            <img src={goal} className="max-w-xs mx-auto" />
            <h2 className="text-black font-medium text-[41px] leading-[57px]">Congratulations</h2>
            <p className="text-[21px] leading-[31px] text-primary-500 max-w-md text-center">Based on your choices, Lightforth already has <span className="text-black-500 font-semibold">15,000 jobs</span> that match your profile.”</p>
         </div>

         <Button onClick={() => updateQuestion("question 3")}>Let's Go!</Button>
      </Card>
   );
};
