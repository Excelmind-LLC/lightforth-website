import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionTen = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>Are You Open to Relocation?</Card.Heading>
        <Card.Text>
          Location matters, but sometimes a dream job requires a change of
          scenery. How far are you willing to go?{" "}
        </Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          {
            label: "Yes, I’m ready to relocate!",
            value: "High-growth startups",
          },
          { label: "Changing industries", value: "Mid-sized companies" },
          {
            label: "No, I prefer staying local.",
            value: "Top-tier established companies",
          },
          {
            label: "Maybe, depending on the opportunity.",
            value: "Nonprofits or mission-driven organizations",
          },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 11")}
      >
        Next Step
      </Button>
    </Card>
  );
};