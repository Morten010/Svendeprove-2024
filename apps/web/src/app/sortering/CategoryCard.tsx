import { CategoryProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CategoryCardProps {
  category: CategoryProps;
  color?: string;
  urlRoute: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ category, color, urlRoute }) => {
  return (
    <Link
      // href={`/sortering/${urlRoute}/${category.id}`}
      href={urlRoute}
      className="rounded-2xl overflow-hidden h-full max-w-[350px]"
    >
      <div className="relative aspect-[1/1] w-full">
        <Image
          src={category.icon_filepath.replace(
            "http://localhost:3000/Assets",
            "",
          )}
          alt={category.title}
          fill
        />
      </div>
      <h3
        className="text-xl font-bold text-center px-3 py-2 h-full"
        style={{
          backgroundColor: color ? `#${color}` : "#2b2c2e",
          color: "white",
        }}
      >
        {category.title}
      </h3>
    </Link>
  );
};

export default CategoryCard;
