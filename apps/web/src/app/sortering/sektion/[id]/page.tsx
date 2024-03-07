import { CategoryProps } from "@/types";
import axios from "axios";
import Image from "next/image";
import { FC, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import SektionDropDown from "./SektionDropDown";

interface pageProps {
  params: { id: string }
  searchParams: { 
    category: string 
    type: string 
  }
}

const page: FC<pageProps> = async ({ params: { id }, searchParams }) => {
  
  
  const { data: sektion } = await axios.get(
    `http://localhost:4000/section/${id}`,
  );

  return (
    <main className="!py-20 max-w-screen-xl mx-auto p-5 md:p-5">
      {/* sektion */}
      <div className="mx-5 rounded-2xl overflow-hidden shadow-[0px_3px_6px_#00000029]">
        {/* top */}
        <div className="bg-[#017EC0] text-white flex justify-between items-center ">
          <h1 className="text-3xl p-12">{sektion.title}</h1>
          <Image
            src={sektion.filepath.replace("http://localhost:3000/Assets", "")}
            alt={sektion.title}
            width={238}
            height={197}
            loading="eager"
          />
        </div>
        {/* top */}

        {/* content */}
        <div className="p-10 flex flex-col gap-5 bg-white">
          {sektion.categories.map((category: CategoryProps) => (
            <SektionDropDown 
            title={sektion.title} 
            category={category} 
            sektionId={searchParams.category}
            typeId={searchParams.type}
            key={category.title + "dropdown"}
            />
          ))}
        </div>
        {/* content */}
      </div>
      {/* sektion */}
    </main>
  );
};

export default page;
