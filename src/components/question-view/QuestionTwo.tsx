import { useState } from "react";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { Checkbox } from "../form";

export const QuestionTwo = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = [
    "⚖️ Work-life balance",
    "📈 Fast career growth",
    "🥳 Great benefits",
    "💡Innovative technology",
    "🎩  Wearing many hats",
    "🕵 Job stability",
    "🚀 Exciting startup culture",
    "🧠 Collaborating with smart people",
    "💼 Challenging work",
    "🧩 Meaningful impact",
    "📝 Experienced leadership",
    "💰 Top-tier investors",
  ];

  return (
    <Card>
      <ProgressBar width={15} onClick={() => updateQuestion("question 1")} />
      <Card.Container>
        <Card.Heading>
          What’s the #1 Thing You Want in Your Next Job?
        </Card.Heading>
        <Card.Text>
          Your dream job is waiting. Let’s make sure we know exactly what you’re
          looking for to match you with the best opportunities.
        </Card.Text>
      </Card.Container>
      <Card.Body>
        <p className="text-primary-300 text-[18px] leading-[26px]">
          Select as many as you want 🙂
        </p>
        <div className="w-full">
          <Checkbox
            options={options}
            selectedOptions={selectedOptions}
            onChange={setSelectedOptions}
          />
        </div>
      </Card.Body>
      <Button
        disabled={selectedOptions.length === 0}
        onClick={() => updateQuestion("question 2 go")}
      >
        Next Step!
      </Button>
    </Card>
  );
};
