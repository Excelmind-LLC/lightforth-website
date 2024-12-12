import { useState } from "react";
import { RadioInput } from "../form";
import { ArrowLeftIcon } from "../../assets/icon";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";

export const QuestionOne = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <div className="w-full flex gap-2 items-center">
        <ArrowLeftIcon />
        <ProgressBar />
      </div>
      <div className="w-full flex flex-col items-start gap-3">
        <Card.Heading>Are You Actively Looking for a New Job?</Card.Heading>
        <Card.Text>
          The job market is moving fast, and the best opportunities won’t wait around. How soon do you want to make your next big move?
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

      <Button disabled={!radioValue} onClick={() => updateQuestion("question 2")}>Let’s Go!</Button>
    </Card>
  );
};
