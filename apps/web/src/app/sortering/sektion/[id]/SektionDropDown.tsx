"use client";
import { cn } from "@/lib/utils";
import { CategoryProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useQuery } from "react-query";
import SektionGrid from "../SektionGrid";

type TypesProps = {
  id: number;
  title: string;
  rules: {
    is_allowed: boolean;
    is_station: boolean;
    is_home: boolean;
  };
};

interface SektionDropDownProps {
  category: CategoryProps;
  title: string;
  sektionId?: string;
  typeId?: string;
}

const SektionDropDown: FC<SektionDropDownProps> = ({
  category: category,
  title,
  sektionId,
  typeId,
}) => {
  const categoryContainer = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(sektionId === category.title ? true : false);

  const { data: types } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:4000/category/details/${category.id}`,
      );

      return data.types as TypesProps[];
    },
    queryKey: [`category-${category.id}`],
  });

  useEffect(() => {
    if (categoryContainer.current) {
      if (category.title === sektionId) {
        categoryContainer.current.scrollIntoView();
      }
    }
  }, [categoryContainer]);

  return (
    <div
      ref={categoryContainer}
      id={`category-${category.title}`}
      className="bg-[#F8F8F8] rounded-2xl relative"
    >
      <div className="px-5 py-10 ">
        <div className="flex items-center gap-10">
          <Image
            src={category.icon_filepath.replace(
              "http://localhost:3000/Assets",
              "",
            )}
            alt={category.title}
            width={109}
            height={109}
            className="rounded-xl "
          />
          <h2 className="font-bold text-3xl">{category.title}</h2>
        </div>
        <IoIosArrowDropdownCircle
          className={`absolute bottom-0 left-2/4 translate-y-2/4 -translate-x-2/4 text-3xl ${open ? "rotate-180" : ""} transition-transform`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && types && (
        <div className="pb-10">
          <h3 className="text-center text-2xl font-semibold mb-5">
            Hvad modtager vi?
          </h3>
          <div className="w-full border-b-2 border-[#ccc]" />
          <SektionGrid>
            {types
              .filter((type) => type.rules.is_allowed)
              .map((type) => (
                <div
                  className={cn("flex gap-5 justify-between", {
                    "outline outline-red-700 outline-offset-2 rounded":
                      parseInt(typeId ? typeId : "0") === type.id,
                  })}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-[#696974]">
                      {type.title}
                    </h4>
                    <p className="text-[#92929D]">{title}</p>
                  </div>

                  <p className="bg-[#D8EADB] text-[#3F7749] mb-auto px-4 py-0.5 rounded">
                    Ja tak
                  </p>
                </div>
              ))}
          </SektionGrid>
          <h3 className="text-center text-2xl font-semibold mb-5">
            Hvad modtager vi ikke
          </h3>
          <div className="w-full border-b-2 border-[#ccc]" />
          <SektionGrid>
            {types
              .filter((type) => !type.rules.is_allowed)
              .map((type) => (
                <div
                  className={cn("flex justify-between gap-5", {
                    "outline outline-red-700 outline-offset-2 rounded":
                      parseInt(typeId ? typeId : "0") === type.id,
                  })}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-[#696974]">
                      {type.title}
                    </h4>
                    <p className="text-[#92929D]">{title}</p>
                  </div>

                  <p className="bg-[#EAD8D8] text-[#773F3F] mb-auto px-4 py-0.5 rounded">
                    Nej tak
                  </p>
                </div>
              ))}
          </SektionGrid>
        </div>
      )}
    </div>
  );
};

export default SektionDropDown;
