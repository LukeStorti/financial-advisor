import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2 md:px-12", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
