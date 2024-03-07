import { cn } from "@/lib/utils";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface SektionGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const SektionGrid: FC<SektionGridProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] my-10 px-4",
        className,
      )}
      {...props}
    />
  );
};

export default SektionGrid;
