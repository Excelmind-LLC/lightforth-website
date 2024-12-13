import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionFifteen = ({ updateQuestion }: UpdateQuestionStep) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>
          What’s Your Resume Status?
        </Card.Heading>
        <Card.Text>
          Location matters, but sometimes a dream job requires a change of scenery. How far are you willing to go?
        </Card.Text>
      </Card.Container>
      <RadioInput
        options={[
          { label: "I’m confident—it’s ready to go!", value: "I’m confident—it’s ready to go!" },
          { label: "I could use some improvements.", value: "I could use some improvements." },
          {
            label: "I haven’t updated it in a while.",
            value: "I haven’t updated it in a while.",
          },
          {
            label: "I’m not sure where to start.",
            value: "I’m not sure where to start.",
          },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button
        disabled={!radioValue}
        onClick={() => updateQuestion("question 16")}
      >
        Let's Keep Going!
      </Button>
    </Card>
  );
};
