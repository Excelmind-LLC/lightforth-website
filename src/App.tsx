import { RadioInput } from "./components/form";
import { Button, Card, Navbar } from "./components/ui";

export default function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center relative">
      <Navbar />
      <Card>
        <RadioInput
          name="test"
          options={[
            {
              label: "YES! I'm ready to take the shortcut to my dream job.",
              value: "yes",
            },
            { label: "Maybe! Not sure... show me more!", value: "maybe" },
          ]}
        />
        <Button>Let’s Get Started!</Button>
      </Card>
    </main>
  );
}
