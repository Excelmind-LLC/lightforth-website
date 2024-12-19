import { useState } from "react";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { Checkbox } from "../form";

const options: string[] = [
  "Product",
  "Operations & Strategy",
  "Marketing",
  "Data",
  "Human Resources",
  "Finance & Legal",
  "Engineering",
  "Software Engineering",
  "Sales",
  "Design",
  "Therapy",
  "Other",
];

export const QuestionFour = ({ updateQuestion }: UpdateQuestionStep) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  return (
    <Card>
      <ProgressBar width={35} onClick={() => updateQuestion("results")} />
      <Card.Container>
        <Card.Heading>What Type of Jobs Are You Looking For?</Card.Heading>
        <Card.Text>
          Your dream job is waiting. Let’s make sure we know exactly what you’re
          looking for to match you with the best opportunities.
        </Card.Text>
      </Card.Container>
      <Card.Body>
        <Checkbox
          options={options}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />
        {selectedOptions.includes("Other") ? (
          <div className="w-full flex flex-col items-start gap-1.5">
            <label
              htmlFor="job"
              className="text-[#1F1F1F] text-sm font-medium font-clash-grotesk"
            >
              Job Name
            </label>
            <input
              id="job"
              name="job"
              className="w-full h-16 py-2.5 px-3.5 flex items-center rounded-md border border-gray-300 bg-white placeholder:text-[#aaa] placeholder:text-sm text-base text-[#1a1a1a] leading-6 focus:ring-0 focus:outline-none focus:border-[#1a1a1a]"
              placeholder="What job are you looking for?"
            />
          </div>
        ) : null}
      </Card.Body>

      <Button
        disabled={selectedOptions.length === 0}
        onClick={() => updateQuestion("congratulations")}
      >
        Let’s find your solution
      </Button>
    </Card>
  );
};
