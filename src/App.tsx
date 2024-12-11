import { Card, Navbar } from "./components/ui";

export default function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center relative">
      <Navbar />
      <Card>All cards will be here</Card>
    </main>
  );
}