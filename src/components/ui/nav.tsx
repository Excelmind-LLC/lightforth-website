import { Logo } from "./logo";

export const Navbar = () => (
  <nav className="absolute top-[74px] left-0 px-4 w-full flex items-center justify-between">
    <Logo />
    <p className="text-black text-lg underline">Get help</p>
  </nav>
);
