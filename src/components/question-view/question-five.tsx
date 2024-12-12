import { useState } from "react";
import { RadioInput } from "../form";
import { Button, Card, ProgressBar } from "../ui";
import { UpdateQuestionStep } from "../../types";

export const QuestionFive = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>What’s Your Ideal Job Location?</Card.Heading>
        <Card.Text></Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          {
            label: "Remote",
            value: "remote",
          },
          { label: "Local (city-specific)", value: "local" },
          { label: "Global (anywhere in the world)", value: "Global" },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 6")}
      >
        Let’s Narrow It Down!
      </Button>
    </Card>
  );
};
