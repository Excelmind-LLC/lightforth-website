import { useState } from "react";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";
import { UpdateQuestionStep } from "../../types";

export const QuestionSeven = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <ProgressBar width={55} onClick={() => updateQuestion("question 6")} />
      <Card.Container>
        <Card.Heading>How Many Interviews Do You Want to Land?</Card.Heading>
        <Card.Text>
          Knowing your worth is crucial. Let Lightforth match you to jobs that
          fit your salary expectations. What’s your ideal range?
        </Card.Text>
      </Card.Container>
      <Card.Body>
        <RadioInput
          options={[
            { label: "1-3 Interviews", value: "1-3" },
            { label: "4-6 Interviews", value: "4-6" },
            { label: "7+ Interviews", value: "7+" },
          ]}
          onSendValue={(value) => setRadioValue(value)}
        />
        <p className="text-black font-medium text-xl w-full text-center mt-4">
          {radioValue === "1-3"
            ? "🎯 Easy"
            : radioValue === "4-6"
              ? "🎯 Realistic"
              : radioValue === "7+"
                ? "🤔 Difficult but Doable with Lightforth"
                : null}
        </p>
      </Card.Body>
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 10")}
      >
        Let’s Make It Happen!
      </Button>
    </Card>
  );
};
