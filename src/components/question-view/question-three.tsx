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
      <ProgressBar width={25} onClick={() => updateQuestion("question 2 go")} />
      <Card.Container>
        <Card.Heading>
          Have You Tried Other Job Search Apps Before?
        </Card.Heading>
        <Card.Text>
          You’ve probably tried other tools, but what makes Lightforth different
          is its automation power. Let’s see if we’re a match.
        </Card.Text>
      </Card.Container>
      <Card.Body>
        <RadioInput
          name="tried_other_job_search_options"
          options={[
            { label: "Yes, I’ve tried other job search apps.", value: "yes" },
            { label: "No, this is my first time.", value: "no" },
          ]}
          onSendValue={(value) => setRadioValue(value)}
        />
      </Card.Body>

      <Button disabled={!radioValue} onClick={() => updateQuestion("results")}>
        Let’s move forward
      </Button>
    </Card>
  );
};
