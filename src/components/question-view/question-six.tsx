import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionSix = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <ProgressBar width={50} onClick={() => updateQuestion("question 5")} />
      <Card.Container>
        <Card.Heading>What Is Your Ideal Salary Range?</Card.Heading>
        <Card.Text>
          Knowing your worth is crucial. Let Lightforth match you to jobs that
          fit your salary expectations. What’s your ideal range?
        </Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          { label: "$50k - $70k", value: "$50k - $70k" },
          { label: "$70k - $100k", value: "$70k - $100k" },
          { label: "$100k+", value: "$100k+" },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 7")}
      >
        Let’s Get to Work!
      </Button>
    </Card>
  );
};
