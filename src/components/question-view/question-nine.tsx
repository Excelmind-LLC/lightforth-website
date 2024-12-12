import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionNine = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>What’s Your #1 Career Goal Right Now?</Card.Heading>
        <Card.Text>
          Let’s pinpoint the goal you’re chasing, whether it’s promotion,
          skill-building, or a total career shift.
        </Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          { label: "Climbing the ladder", value: "High-growth startups" },
          { label: "Changing industries", value: "Mid-sized companies" },
          {
            label: "Gaining new skills/techniques",
            value: "Top-tier established companies",
          },
          {
            label: "Work-life balance",
            value: "Nonprofits or mission-driven organizations",
          },
          {
            label: "Starting something new (side project, business, etc.)",
            value: "Starting something new (side project, business, etc.)",
          },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 10")}
      >
        Next Step
      </Button>
    </Card>
  );
};
