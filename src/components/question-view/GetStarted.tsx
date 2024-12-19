import { useState } from "react";
import { RadioInput } from "../form";
import { Button, Card, ProgressBar } from "../ui";
import { DispatchType, Steps } from "../../types";

export const GetStarted = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>Your Job Search on Autopilot!</Card.Heading>
        <Card.Text>
          Imagine waking up to new job opportunities every day without lifting a
          finger. Just set it, forget it, and watch your career soar. Ready to
          turn your job search on autopilot?
        </Card.Text>
      </Card.Container>

      <Card.Body>
        <RadioInput
          name="test"
          options={[
            {
              label: "YES! I'm ready to take the shortcut to my dream job.",
              value: "yes",
            },
            { label: "Maybe! Not sure... show me more!", value: "maybe" },
            { label: "Not sure... show me more!", value: "not sure" },
          ]}
          onSendValue={(value) => {
            setRadioValue(value);
          }}
        />
      </Card.Body>
      <Button disabled={!radioValue} onClick={() => updateQuestion("lets go")}>
        Let’s Get Started!
      </Button>
      <div className="flex items-center gap-3 w-full justify-center">
        <div className="flex -space-x-3">
          <img
            src="/woman-1.png"
            alt="person 1"
            className="size-8 rounded-full border-[1.75px] border-white object-center object-cover"
          />
          <img
            src="/man-1.png"
            alt="person 2"
            className="size-8 rounded-full border-[1.75px] border-white object-center object-cover"
          />
          <img
            src="/man-2.png"
            alt="person 3"
            className="size-8 rounded-full border-[1.75px] border-white object-center object-cover"
          />
        </div>
        <p className="text-[#242424] text-base font-medium">
          Trusted by 100,000+ job seekers.
        </p>
      </div>
    </Card>
  );
};
