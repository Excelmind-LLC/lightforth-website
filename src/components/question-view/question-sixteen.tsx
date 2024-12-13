import { CloudUploadIcon } from "../../assets/icon";
import { UpdateQuestionStep } from "../../types";
import { Button, Card, ProgressBar } from "../ui";

export const QuestionSixteen = ({ updateQuestion }: UpdateQuestionStep) => {
  return (
    <Card>
      <ProgressBar width={100} onClick={() => updateQuestion("question 15")} />
      <Card.Container>
        <Card.Heading className="pr-4">
          Upload Your Resume for ATS & Other Checks
        </Card.Heading>
        <Card.Text className="pr-4">
          Now, let’s make sure your resume is truly ready for the job market.
          Upload your resume below, and we’ll run it through our ATS
          compatibility check and other advanced screenings to ensure it’s
          perfect.
        </Card.Text>
      </Card.Container>
      <div className="w-[461px] border-[1.41px] border-[#838383] rounded-[5.63px] border-dashed flex justify-center items-center mx-auto py-12 px-9.5 font-satoshi">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <CloudUploadIcon />
          <p className="flex flex-col items-center justify-center font-bold text-[20px] leading-[38px] text-black">
            Drag and drop your upload here or{" "}
            <span className="text-[#52AB74]">Choose a file</span>
          </p>
        </div>
      </div>
      <Button onClick={() => updateQuestion("question 16")}>
        Analyze My Resume
      </Button>
    </Card>
  );
};
