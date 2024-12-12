import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionEight = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>
          What Type of Companies Do You Want to Work For?
        </Card.Heading>
        <Card.Text>
          Is your dream company a fast-growing startup, an established leader,
          or somewhere in between?
        </Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          { label: "High-growth startups", value: "High-growth startups" },
          { label: "Mid-sized companies", value: "Mid-sized companies" },
          {
            label: "Top-tier established companies",
            value: "Top-tier established companies",
          },
          {
            label: "Nonprofits or mission-driven organizations",
            value: "Nonprofits or mission-driven organizations",
          },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 9")}
      >
        Next Step
      </Button>
    </Card>
  );
};
