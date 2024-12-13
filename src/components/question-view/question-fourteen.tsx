import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";
import { ArrowLeftIcon } from "../../assets/icon";

export const QuestionFourteen = ({ updateQuestion }: UpdateQuestionStep) => {
  return <Card>
    <div className="w-full flex gap-4 items-center">
      <ArrowLeftIcon />
      <ProgressBar />
    </div>
    <div className="w-full flex flex-col items-center gap-2">
      <p className="text-[32px] leading-[45px] text-primary-500 max-w-xl font-medium text-center px-7">Your resume is your ticket to those interviews, and you want to make sure it’s optimized for both recruiters and Applicant Tracking Systems (ATS). Is your resume truly ready to stand out? Let’s find out!
      </p>

      <img
        src="/cv-resume.gif"
        alt="cv-resume"
        className="w-auto h-[348px] object-cover object-center"
      />
    </div>

    <Button onClick={() => updateQuestion("question 15")}>Let's Keep Going!</Button>
  </Card>;
};
