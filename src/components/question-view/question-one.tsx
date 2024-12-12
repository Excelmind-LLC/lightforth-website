import { DispatchType, Steps } from "../../types";
import { Button, Card } from "../ui";

export const QuestionOne = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  return (
    <Card>
      {/* jumping to question 3 for my sake cos that's where i'm starting from */}
      <Button onClick={() => updateQuestion("question 3")}>Let’s Go!</Button>
    </Card>
  );
};
