import { cn } from "@/lib/utils";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface CategoryGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const CategoryGrid: FC<CategoryGridProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "grid gap-2 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] my-10 px-4",
        className,
      )}
      {...props}
    />
  );
};

export default CategoryGrid;
