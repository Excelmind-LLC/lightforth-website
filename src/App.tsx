import { useState } from "react";
import { Navbar } from "./components/ui";
import { QuestionView } from "./QuestionView";
import { Steps } from "./types";

export default function App() {
  const [question, setQuestion] = useState<Steps>("get started");
  return (
    <main className="w-screen h-screen flex items-center justify-center relative font-clash-grotesk">
      <Navbar />
      <QuestionView question={question} updateQuestion={setQuestion} />
    </main>
  );
}
