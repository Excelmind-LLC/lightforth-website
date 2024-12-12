import { useState } from "react";
import { ArrowLeftIcon } from "../../assets/icon";
import { DispatchType, Steps } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import Checkbox from "../form/checkbox";

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
      <div className="w-full flex gap-2 items-center">
        <ArrowLeftIcon />
        <ProgressBar />
      </div>
      <div className="w-full flex flex-col items-start gap-3 pr-20">
        <Card.Heading>What’s the #1 Thing You Want in Your Next Job?</Card.Heading>
        <Card.Text>
          Your dream job is waiting. Let’s make sure we know exactly what you’re looking for to match you with the best opportunities.
        </Card.Text>
      </div>
      <p className="text-primary-300 text-[18px] leading-[26px]">Select as many as you want 🙂</p>
      <div className="w-full">
        <Checkbox
          options={options}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />
      </div>
      <Button disabled={selectedOptions.length === 0} onClick={() => updateQuestion("question 2 go")}>Next Step!</Button>
    </Card>
  );
};
