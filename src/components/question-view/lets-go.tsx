import { DispatchType, Steps } from "../../types";
import { Button, Card } from "../ui";

export const LetsGo = ({
  updateQuestion,
}: {
  updateQuestion: DispatchType<Steps>;
}) => {
  return (
    <Card>
      <Button onClick={() => updateQuestion("question 1")}>Let's Go!</Button>
    </Card>
  );
};
