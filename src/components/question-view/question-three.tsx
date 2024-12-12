import { useState } from "react";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { RadioInput } from "../form";

export const QuestionThree = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>
          Have You Tried Other Job Search Apps Before?
        </Card.Heading>
        <Card.Text>
          You’ve probably tried other tools, but what makes Lightforth different
          is its automation power. Let’s see if we’re a match.
        </Card.Text>
      </Card.Container>
      <RadioInput
        name="tried_other_job_search_options"
        options={[
          { label: "Yes, I’ve tried other job search apps.", value: "yes" },
          { label: "No, this is my first time.", value: "no" },
        ]}
        onSendValue={(value) => setRadioValue(value)}
      />
      <Button disabled={!radioValue} onClick={() => updateQuestion("results")}>
        Next
      </Button>
    </Card>
  );
};
