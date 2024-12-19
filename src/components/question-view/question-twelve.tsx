import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";

export const QuestionTwelve = ({ updateQuestion }: UpdateQuestionStep) => {
  return (
    <Card>
      <ProgressBar width={80} onClick={() => updateQuestion("question 11")} />
      <Card.Container>
        <Card.Heading>
          Lightforth AI Will Land You More Interviews!
        </Card.Heading>
        <Card.Text>
          Ready to turbocharge your job search? Lightforth’s AI is designed to
          help you land interviews faster than ever before. Imagine 7+
          interviews in just a few weeks
        </Card.Text>
      </Card.Container>
      <Card.Body>
        <div
          className="w-[629px] h-full pt-12 pb-7 bg-cover bg-center rounded-xl flex gap-9 justify-center items-center"
          style={{
            backgroundImage: "url('/robot-handshake.jpg')",
          }}
        >
          <div className="w-5/6 h-[205px] border border-white bg-white/5 rounded-2xl backdrop-blur-[5px] px-6 py-12 flex items-center justify-center">
            <p className="text-white font-medium text-2xl font-clash-grotesk w-full">
              Users who leverage Lightforth’s AI have landed 10x more interviews
              within weeks than their peer—you could be next!
            </p>
          </div>
        </div>
      </Card.Body>

      <Button onClick={() => updateQuestion("question 13")}>
        Time to take action!
      </Button>
    </Card>
  );
};
