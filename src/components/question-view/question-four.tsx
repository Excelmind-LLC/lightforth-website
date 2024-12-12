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
      <ProgressBar />
      <Card.Container>
        <Card.Heading>What Type of Jobs Are You Looking For?</Card.Heading>
        <Card.Text>
          Your dream job is waiting. Let’s make sure we know exactly what you’re
          looking for to match you with the best opportunities.
        </Card.Text>
      </Card.Container>
      <Checkbox
        options={options}
        selectedOptions={selectedOptions}
        onChange={setSelectedOptions}
      />
      <Button
        disabled={selectedOptions.length === 0}
        onClick={() => updateQuestion("congratulations")}
      >
        Next Step!
      </Button>
    </Card>
  );
};
