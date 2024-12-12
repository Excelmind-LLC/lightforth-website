
import { Navbar } from "./components/ui";
import QuestionView from "./components/question-view";

export default function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center relative font-clash-grotesk">
      <Navbar />
      <QuestionView
        heading="Your Job Search on Autopilot"
        question="Imagine waking up to new job opportunities every day without lifting a finger. Just set it, forget it, and watch your career soar. Ready to turn your job search on autopilot?"
        options={[
          {
            label: "YES! I'm ready to take the shortcut to my dream job.",
            value: "yes",
          },
          { label: "Maybe! Not sure... show me more!", value: "maybe" },
        ]}
      />    

    </main>
  );
}
