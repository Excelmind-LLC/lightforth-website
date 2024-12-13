import { useState } from "react";
import { RadioInput } from "../form";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { SemicolonIcon } from "../../assets/icon";

export const QuestionOne = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <ProgressBar width={10} onClick={() => updateQuestion("lets go")} />
      <div className="w-full flex flex-col items-start gap-3">
        <Card.Heading>Are You Actively Looking for a New Job?</Card.Heading>
        <Card.Text>
          The job market is moving fast, and the best opportunities won’t wait
          around. How soon do you want to make your next big move?
        </Card.Text>
      </div>
      <RadioInput
        name="test"
        options={[
          {
            label: "YES! I’m actively applying right now.",
            value: "yes",
          },
          { label: "Kind of... just browsing for now.", value: "maybe" },
          { label: "Nope, not looking right now.", value: "not sure" },
        ]}
        onSendValue={(value) => {
          setRadioValue(value);
        }}
      />
      {radioValue !== null ? (
        <div className="w-full flex flex-col gap-3.5 items-center">
          <SemicolonIcon />
          <p className="text-black font-medium text-lg text-center">
            No matter where you are in your search, Lightforth adapts to your
            pace, getting you closer to your next opportunity.
          </p>
        </div>
      ) : null}

      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 2")}
      >
        Let’s Go!
      </Button>
    </Card>
  );
};
