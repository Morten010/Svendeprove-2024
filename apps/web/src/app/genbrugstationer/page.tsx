import { FC, Suspense } from "react";
import Places from "./Places";
import Spinner from "@/components/details/Spinner";
export
interface GenbrugStationerProps {}

export const dynamic = 'force-dynamic'

const page: FC<GenbrugStationerProps> = ({}) => {

    return (
      <main className=" min-h-[calc(100vh-100px)] grid place-content-center">
        <h1
        className="sr-only"
        >
          Genbrugs stationer
        </h1>
        <p
        className="sr-only"
        >
          Alle genbrugs staioner
        </p>
        <Suspense 
        fallback={<div className="h-full grid place-content-center">
          <Spinner className="h-10 w-10"/>
        </div>} 
        >
          <Places />
        </Suspense>
      </main>
    );
};

export default page;
