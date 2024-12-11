import { Logo } from "./logo";

export const Navbar = () => (
  <nav className="absolute top-[74px] left-0 px-16 w-full flex items-center justify-between">
    <Logo />
    <p className="text-black text-lg font-medium underline underline-offset-2">Get help</p>
  </nav>
);
