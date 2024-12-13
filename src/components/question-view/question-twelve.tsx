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
      <div className="w-[629px] h-[401px] pt-12 pb-7 bg-[#F9F9F9] rounded-xl flex flex-col gap-9 justify-center items-center">
        <img
          src="/ai.png"
          alt="lightforth ai"
          className="w-[161px] h-[196px] object-center object-cover"
        />
        <div className="w-[508px] h-[97px] border border-[#EAEAEA] rounded-full flex items-center justify-center">
          <p className="text-primary-300 font-medium text-base font-clash-grotesk w-[420px]">
            Users who leverage Lightforth’s AI have landed 10x more interviews
            within weeks than their peer—you could be next!
          </p>
        </div>
      </div>
      <Button onClick={() => updateQuestion("question 13")}>
        Get Started Now!
      </Button>
    </Card>
  );
};
