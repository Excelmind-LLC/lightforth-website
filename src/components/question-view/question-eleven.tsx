import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionEleven = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <Card>
      <ProgressBar width={75} onClick={() => updateQuestion("question 10")} />
      <Card.Container>
        <Card.Heading>
          Would You Prefer a Full-Time or Part-Time Role?
        </Card.Heading>
        <Card.Text>
          Flexibility is key. Which type of position fits best with your
          lifestyle?
        </Card.Text>
      </Card.Container>
      <Card.Body>
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
      </Card.Body>

      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 12")}
      >
        Let’s turn this into results.
      </Button>
    </Card>
  );
};
