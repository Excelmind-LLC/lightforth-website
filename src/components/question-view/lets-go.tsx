import { CircleIcon } from "../../assets/icon";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";

export const LetsGo = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  return (
    <Card animate>
      <ProgressBar width={5} onClick={() => updateQuestion("get started")} />

      <CircleIcon className="size-80 w-full flex items-center justify-center" />
      <div className="w-full flex flex-col items-center gap-[9px]">
        <h2 className="text-black font-medium text-[41px] leading-[57px]">
          Congratulations
        </h2>
        <p className="text-[21px] leading-[31px] text-primary-500 max-w-sm text-center">
          You’re about to experience the future of job searching with
          Lightforth.”
        </p>
      </div>

      <Button onClick={() => updateQuestion("question 1")}>
        Let’s make progress!
      </Button>
    </Card>
  );
};
