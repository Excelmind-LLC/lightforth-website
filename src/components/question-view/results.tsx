import { Button, Card, ProgressBar } from "../ui";

export const Results = () => {
  return (
    <Card>
      <ProgressBar />
      <Card.Container>
        <Card.Heading>
          Ready to See the Results of Using Lightforth?
        </Card.Heading>
        <Card.Text>
          No more endless scrolling. With Lightforth, you’ll see results faster
          than ever before. Check out what others have experienced.
        </Card.Text>
      </Card.Container>
      <div className="w-full h-[401px] rounded-xl bg-[#F9F9F9] flex flex-col items-center">
        <div className="w-[508px] h-24 rounded-full bg-[#EAEAEA] flex items-center gap-3 justify-center">
          <p className="text-[#0A2A60] font-semibold text-[46.829px] leading-[68px] font-clash-grotesk">
            80%
          </p>
          <p className="text-primary-300 font-medium text-base w-[300px]">
            of Lightforth users significantly increased their job offers within
            just <span className="font-semibold">3 months.</span>
          </p>
        </div>
      </div>
      <Button>Next Step!</Button>
    </Card>
  );
};
