import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionEleven = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>
          Would You Prefer a Full-Time or Part-Time Role?
        </Card.Heading>
        <Card.Text>
          Flexibility is key. Which type of position fits best with your
          lifestyle?
        </Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          {
            label: "Full-time",
            value: "High-growth startups",
          },
          { label: "Part-time", value: "Mid-sized companies" },
          {
            label: "Open to both",
            value: "Top-tier established companies",
          },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 12")}
      >
        Next Step
      </Button>
    </Card>
  );
};
