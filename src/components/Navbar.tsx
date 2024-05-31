import MaxWidthWrapper from "./MaxWidthWrapper";
import logo from "../assets/logo.png";
import { NAVLINKS } from "@/lib";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Dot, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  return (
    <>
      <div className="hidden bg-white w-full h-6 sm:flex items-center justify-center text-black font-semibold">
        <Dot />
        <h2>Contact +1111 111 1111 for a free consult</h2>
        <Dot />
      </div>
      <nav className="sticky z-50 h-20 inset-x-0 top-0 w-full border-b backdrop-blur bg-background/85">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} className="w-28 h-20 object-contain" />
            </a>

            <ul className="hidden sm:flex items-center justify-between gap-5">
              {NAVLINKS.map((item) => (
                <li
                  key={item.label}
                  className="relative transition-all"
                  onClick={() => setActive(item.label)}
                >
                  <a href={item.href} className="text-xl text-primary">
                    {item.label}
                    {item.label === active && (
                      <motion.span
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "tween" }}
                        layoutId="underline"
                        className="absolute left-0 top-full h-[2px] bg-primary w-full"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <DropdownMenu>
              <DropdownMenuTrigger className="block sm:hidden">
                <Menu color="white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mx-4 flex flex-col">
                {NAVLINKS.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
